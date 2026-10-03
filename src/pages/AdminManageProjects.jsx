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

    // Edit Modal State removed since we now route to full edit page
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
        navigate(`/admin/edit-project/${project.id}`);
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

        </div>
    );
};

export default AdminManageProjects;
