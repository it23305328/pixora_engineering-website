import React, { useState } from 'react';
import { addProject } from '../services/projectService';
import { uploadImageToCloudinary } from '../services/cloudinaryService';
import { supabase } from '../services/supabaseClient';
import { useNavigate, Link } from 'react-router-dom';
import './AdminAddProject.css';

const AdminAddProject = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('Solar Energy');
    const [description, setDescription] = useState('');
    const [imageFile, setImageFile] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);

    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImageFile(file);
            setImagePreview(URL.createObjectURL(file));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');

        try {
            let uploadedImageUrl = '';

            // Upload to Cloudinary if an image is selected
            if (imageFile) {
                uploadedImageUrl = await uploadImageToCloudinary(imageFile);
            } else {
                throw new Error("Please select an image to upload.");
            }

            // Save to Supabase
            await addProject({
                title,
                category,
                description,
                image_url: uploadedImageUrl
            });

            setMessage('Project successfully added!');
            setTitle('');
            setCategory('Solar Energy');
            setDescription('');
            setImageFile(null);
            setImagePreview(null);

            // Reset file input
            const fileInput = document.getElementById('imageFile');
            if (fileInput) fileInput.value = "";

        } catch (error) {
            console.error('Error adding project:', error);
            setMessage(error.message || 'Failed to add project. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = async () => {
        await supabase.auth.signOut();
        navigate('/admin/login');
    };

    return (
        <div className="admin-project-container" style={{ flexDirection: 'column' }}>
            <div style={{ width: '100%', maxWidth: '600px', display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                <Link to="/admin/manage-projects" style={{ textDecoration: 'none', color: '#0b1a3d', fontWeight: 'bold' }}>
                    &larr; Back to Dashboard
                </Link>
                <button
                    onClick={handleLogout}
                    style={{ background: 'none', border: 'none', color: '#d93025', fontWeight: 'bold', cursor: 'pointer' }}
                >
                    Logout
                </button>
            </div>
            <div className="admin-project-card">
                <h2>Add New Project</h2>
                {message && <div className={`admin-message ${message.includes('success') ? 'success' : 'error'}`}>{message}</div>}

                <form onSubmit={handleSubmit} className="admin-project-form">
                    <div className="form-group">
                        <label htmlFor="title">Project Title *</label>
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                            placeholder="Enter project title"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="category">Category *</label>
                        <select
                            id="category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            <option value="Solar Energy">Solar Energy</option>
                            <option value="Construction">Construction</option>
                            <option value="Elevator Solutions">Elevator Solutions</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="imageFile">Project Image (Upload) *</label>
                        <input
                            type="file"
                            id="imageFile"
                            accept="image/*"
                            onChange={handleImageChange}
                            required
                        />
                    </div>

                    {imagePreview && (
                        <div className="image-preview-container">
                            <img src={imagePreview} alt="Preview" className="image-preview" />
                        </div>
                    )}

                    <div className="form-group">
                        <label htmlFor="description">Description *</label>
                        <textarea
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                            rows="4"
                            placeholder="Project description and key details..."
                        ></textarea>
                    </div>

                    <button type="submit" disabled={loading} className="admin-submit-btn">
                        {loading ? 'Uploading & Saving...' : 'Save Project'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AdminAddProject;
