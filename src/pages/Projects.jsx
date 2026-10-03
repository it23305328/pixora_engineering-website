import React, { useEffect, useState } from 'react';
import Navbar from '../components/layout/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { getProjects } from '../services/projectService';
import './ProjectsList.css';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const data = await getProjects();
                setProjects(data);
            } catch (err) {
                console.error("Error fetching projects:", err);
                setError("Failed to load projects. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    return (
        <div className="bg-background text-on-surface font-body-md antialiased min-h-screen flex flex-col">
            {/* TopNavBar */}
            <Navbar />

            {/* Main Content using Vanilla CSS */}
            <main className="flex-grow pt-24 bg-[#f7f9fc]">
                <div className="projects-page-container">
                    <div className="projects-header">
                        <h1>Our Project Portfolio</h1>
                        <p>Explore our recent transformations, engineering marvels, and sustainable structures built for the future.</p>
                    </div>

                    {loading ? (
                        <div className="projects-loading">Loading projects...</div>
                    ) : error ? (
                        <div className="projects-error">{error}</div>
                    ) : (
                        <div className="projects-grid">
                            {projects.length > 0 ? (
                                projects.map((project) => (
                                    <div key={project.id} className="project-card cursor-pointer hover:shadow-lg transition-shadow" onClick={() => navigate(`/projects/${project.slug || project.id}`)}>
                                        <div className="project-image-wrapper">
                                            <div className="project-category">{project.category}</div>
                                            <img
                                                src={project.image_url || 'https://via.placeholder.com/400x300?text=No+Image'}
                                                alt={project.title}
                                                className="project-image"
                                            />
                                        </div>
                                        <div className="project-content">
                                            <h3 className="project-title">{project.title}</h3>
                                            <p className="project-description">{project.description}</p>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="no-projects">
                                    No projects available yet. Please check back later.
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </main>

            {/* Footer */}
            <footer className="w-full bg-primary-container dark:bg-tertiary-container border-t border-outline/10 text-on-primary">
                <div className="max-w-max-width mx-auto px-margin-desktop py-12 text-center text-on-primary/70">
                    <p>© 2026 PIXORA GROUP. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Projects;

