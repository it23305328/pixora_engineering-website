import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getProjects, deleteProject, updateProject } from '../services/projectService';
import { uploadImageToCloudinary } from '../services/cloudinaryService';
import { supabase } from '../services/supabaseClient';
import { useNavigate } from 'react-router-dom';
import './AdminManageProjects.css';
import './AdminAddProject.css'; // For reusing form styles

const AdminManageProjects = () => {
    const navigate = useNavigate();
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    // Edit Modal State
    const [editingProject, setEditingProject] = useState(null);
    const [editForm, setEditForm] = useState({ title: '', category: '', description: '', image_url: '' });
    const [newImageFile, setNewImageFile] = useState(null);
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        try {
            setLoading(true);
            const data = await getProjects();
            setProjects(data);
        } catch (error) {
            console.error("Error fetching projects:", error);
            alert("Failed to load projects.");
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this project?")) {
            try {
                await deleteProject(id);
                setProjects(projects.filter(p => p.id !== id));
            } catch (error) {
                console.error("Error deleting project:", error);
                alert("Failed to delete project.");
            }
        }
    };

    const handleEditClick = (project) => {
        setEditingProject(project);
        setEditForm({
            title: project.title,
            category: project.category,
            description: project.description,
            image_url: project.image_url
        });
        setNewImageFile(null);
    };

    const handleEditSubmit = async (e) => {
        e.preventDefault();
        setSaving(true);
        try {
            let finalImageUrl = editForm.image_url;

            if (newImageFile) {
                finalImageUrl = await uploadImageToCloudinary(newImageFile);
            }

            const updates = {
                title: editForm.title,
                category: editForm.category,
                description: editForm.description,
                image_url: finalImageUrl
            };

            await updateProject(editingProject.id, updates);

            // Update local state
            setProjects(projects.map(p => p.id === editingProject.id ? { ...p, ...updates } : p));
            setEditingProject(null);
        } catch (error) {
            console.error("Error updating project:", error);
            alert("Failed to update project.");
        } finally {
            setSaving(false);
        }
    };

    const handleLogout = async () => {
        await supabase.auth.signOut();
        navigate('/admin/login');
    };

    return (
        <div className="manage-projects-container">
            <div className="manage-projects-header">
                <h1>Manage Projects</h1>
                <div style={{ display: 'flex', gap: '10px' }}>
                    <Link to="/admin/add-project" className="add-new-btn">Add New Project</Link>
                    <button onClick={handleLogout} className="action-btn delete-btn">Logout</button>
                </div>
            </div>

            {loading ? (
                <div style={{ textAlign: 'center', padding: '40px' }}>Loading...</div>
            ) : (
                <div className="projects-table-container">
                    <table className="projects-table">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Category</th>
                                <th>Date Added</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {projects.length > 0 ? projects.map((project) => (
                                <tr key={project.id}>
                                    <td>
                                        {project.image_url ? (
                                            <img src={project.image_url} alt={project.title} className="table-img" />
                                        ) : (
                                            <div className="table-img" style={{ background: '#eee' }}></div>
                                        )}
                                    </td>
                                    <td>{project.title}</td>
                                    <td>{project.category}</td>
                                    <td>{new Date(project.created_at).toLocaleDateString()}</td>
                                    <td>
                                        <button className="action-btn edit-btn" onClick={() => handleEditClick(project)}>Edit</button>
                                        <button className="action-btn delete-btn" onClick={() => handleDelete(project.id)}>Delete</button>
                                    </td>
                                </tr>
                            )) : (
                                <tr>
                                    <td colSpan="5" style={{ textAlign: 'center', padding: '20px' }}>No projects found.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            )}

            {/* Edit Modal */}
            {editingProject && (
                <div className="modal-overlay">
                    <div className="modal-content admin-project-form">
                        <h2>Edit Project</h2>
                        <form onSubmit={handleEditSubmit}>
                            <div className="form-group">
                                <label>Title</label>
                                <input
                                    type="text"
                                    value={editForm.title}
                                    onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label>Category</label>
                                <select
                                    value={editForm.category}
                                    onChange={(e) => setEditForm({ ...editForm, category: e.target.value })}
                                >
                                    <option value="Solar Energy">Solar Energy</option>
                                    <option value="Construction">Construction</option>
                                    <option value="Elevator Solutions">Elevator Solutions</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Replace Image (Optional)</label>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => setNewImageFile(e.target.files[0])}
                                />
                                {editForm.image_url && !newImageFile && (
                                    <div style={{ marginTop: '10px', fontSize: '12px' }}>
                                        Current: <a href={editForm.image_url} target="_blank" rel="noreferrer">View Image</a>
                                    </div>
                                )}
                            </div>

                            <div className="form-group">
                                <label>Description</label>
                                <textarea
                                    value={editForm.description}
                                    onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
                                    required
                                    rows="4"
                                />
                            </div>

                            <div className="modal-actions">
                                <button type="button" className="cancel-btn" onClick={() => setEditingProject(null)} disabled={saving}>Cancel</button>
                                <button type="submit" className="save-btn" disabled={saving}>
                                    {saving ? 'Saving...' : 'Save Changes'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminManageProjects;
