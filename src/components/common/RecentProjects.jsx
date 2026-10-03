import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getProjects } from '../../services/projectService';

const RecentProjects = ({ category }) => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const data = await getProjects();
                const filtered = category
                    ? data.filter(p => p.category.toLowerCase().includes(category.toLowerCase()))
                    : data;
                setProjects(filtered.slice(0, 3)); // show top 3
            } catch (err) {
                console.error("Error fetching recent projects:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchProjects();
    }, [category]);

    if (loading) return null;
    if (projects.length === 0) return null;

    return (
        <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
            <h2 className="font-headline-lg text-headline-lg text-primary text-center mb-12">Recent Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {projects.map(project => (
                    <div key={project.id} className="bg-surface border border-outline-variant/30 rounded overflow-hidden">
                        <img src={project.image_url || 'https://via.placeholder.com/400x300'} alt={project.title} className="w-full h-48 object-cover" />
                        <div className="p-6">
                            <h3 className="font-headline-sm text-lg font-bold mb-2">{project.title}</h3>
                            <p className="text-on-surface-variant text-sm mb-4 line-clamp-2">{project.description}</p>
                            <Link to={`/projects/${project.slug || project.id}`} className="text-primary font-bold text-sm hover:underline">View Details</Link>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center mt-12">
                <Link to="/projects" className="bg-transparent border border-outline text-primary font-label-sm text-label-sm h-12 px-8 rounded inline-flex items-center justify-center hover:bg-surface-container transition-colors">View All Projects</Link>
            </div>
        </section>
    );
};

export default RecentProjects;
