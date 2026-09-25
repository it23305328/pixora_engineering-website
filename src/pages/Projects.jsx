import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getProjects } from '../services/projectService';
import './ProjectsList.css';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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
            <nav className="fixed top-0 w-full z-50 bg-surface/80 dark:bg-primary-container/80 backdrop-blur-md border-b border-outline-variant/20 shadow-sm transition-all duration-200 ease-in-out glass-nav">
                <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop flex justify-between items-center h-16">
                    <Link to="/" className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed">
                        PIXORA GROUP
                    </Link>
                    <div className="hidden md:flex space-x-8 items-center">
                        <Link className="font-body-md text-body-md text-on-surface-variant dark:text-on-tertiary-container hover:text-secondary transition-colors duration-300" to="/">Home</Link>
                        <Link className="font-body-md text-body-md text-on-surface-variant dark:text-on-tertiary-container hover:text-secondary transition-colors duration-300" to="/solar-energy">Solar Energy</Link>
                        <Link className="font-body-md text-body-md text-on-surface-variant dark:text-on-tertiary-container hover:text-secondary transition-colors duration-300" to="/construction">Construction</Link>
                        <Link className="font-body-md text-body-md text-on-surface-variant dark:text-on-tertiary-container hover:text-secondary transition-colors duration-300" to="/elevators">Elevator Solutions</Link>
                        <Link className="font-body-md text-body-md text-secondary dark:text-secondary-fixed-dim font-bold border-b-2 border-secondary hover:text-secondary transition-colors duration-300" to="/projects">Projects</Link>
                    </div>
                </div>
            </nav>

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
                                    <div key={project.id} className="project-card">
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
