import React, { useEffect, useState } from 'react';
import Navbar from '../components/layout/Navbar';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
    getProjectBySlug,
    getProjectImages,
    getProjectHighlights,
    getProjectSpecifications,
    getProjectProcessSteps,
    getProjectTestimonial,
    getPreviousProject,
    getNextProject
} from '../services/projectService';

const ProjectDetails = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [project, setProject] = useState(null);
    const [images, setImages] = useState([]);
    const [highlights, setHighlights] = useState([]);
    const [specifications, setSpecifications] = useState([]);
    const [processSteps, setProcessSteps] = useState([]);
    const [testimonial, setTestimonial] = useState(null);
    const [prevProject, setPrevProject] = useState(null);
    const [nextProject, setNextProject] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjectDetails = async () => {
            setLoading(true);
            try {
                const proj = await getProjectBySlug(slug);
                if (!proj) {
                    setProject(null);
                    setLoading(false);
                    return;
                }
                setProject(proj);

                const [imgs, hls, specs, steps, test, prev, next] = await Promise.all([
                    getProjectImages(proj.id),
                    getProjectHighlights(proj.id),
                    getProjectSpecifications(proj.id),
                    getProjectProcessSteps(proj.id),
                    getProjectTestimonial(proj.id),
                    getPreviousProject(proj),
                    getNextProject(proj)
                ]);

                setImages(imgs || []);
                setHighlights(hls || []);
                setSpecifications(specs || []);
                setProcessSteps(steps || []);
                setTestimonial(test || null);
                setPrevProject(prev || null);
                setNextProject(next || null);

            } catch (err) {
                console.error("Error fetching project details:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchProjectDetails();
    }, [slug]);

    if (loading) return <div className="pt-32 text-center text-xl font-bold min-h-screen bg-background text-on-background">Loading project...</div>;

    if (!project) return (
        <div className="pt-32 text-center min-h-screen bg-background text-on-background">
            <h1 className="text-4xl text-error mb-4">Project Not Found</h1>
            <button onClick={() => navigate('/projects')} className="bg-primary text-on-primary px-6 py-2 rounded-md hover:bg-primary/90 transition-colors">
                Back to Projects
            </button>
        </div>
    );

    const galleryImages = images.filter(i => i.image_type === 'gallery');
    const beforeImages = images.filter(i => i.image_type === 'before');
    const afterImages = images.filter(i => i.image_type === 'after');

    return (
        <div className="bg-background text-on-background font-body-md antialiased selection:bg-secondary-container selection:text-on-secondary-container">
            {/* TopNavBar */}
            <Navbar />

            <main className="pt-20">
                {/* 1. Hero Section */}
                <section className="relative w-full h-[70vh] min-h-[600px] flex items-end pb-24">
                    <div className="absolute inset-0 z-0">
                        {project.cover_image_url && (
                            <img alt={project.title} className="w-full h-full object-cover" src={project.cover_image_url} />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-primary-container/90 via-primary-container/40 to-transparent"></div>
                    </div>
                    <div className="relative z-10 max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop w-full text-on-primary">
                        <div className="max-w-3xl">
                            <span className="font-label-sm text-label-sm text-secondary-fixed uppercase tracking-wider mb-4 block">{project.category || 'Project'}</span>
                            <h1 className="font-headline-xl text-headline-xl md:text-[80px] leading-[1.05] font-bold mb-6 text-white">{project.title}</h1>
                            <div className="flex flex-wrap gap-6 mb-8 border-l-2 border-secondary-fixed pl-6 py-2">
                                <div>
                                    <span className="block font-label-sm text-label-sm text-surface-variant/80 uppercase">Type</span>
                                    <span className="font-body-md text-body-md font-semibold">{project.category || 'N/A'}</span>
                                </div>
                                <div>
                                    <span className="block font-label-sm text-label-sm text-surface-variant/80 uppercase">Location</span>
                                    <span className="font-body-md text-body-md font-semibold">{project.location || 'N/A'}</span>
                                </div>
                                <div>
                                    <span className="block font-label-sm text-label-sm text-surface-variant/80 uppercase">Year</span>
                                    <span className="font-body-md text-body-md font-semibold">{project.project_year || 'N/A'}</span>
                                </div>
                                <div>
                                    <span className="block font-label-sm text-label-sm text-surface-variant/80 uppercase">Status</span>
                                    <span className="font-body-md text-body-md font-semibold text-secondary-fixed capitalize">{project.status || 'Active'}</span>
                                </div>
                            </div>
                            <a className="inline-flex items-center justify-center bg-secondary-container text-on-secondary-container font-label-sm text-label-sm px-8 py-4 rounded hover:bg-secondary-fixed transition-colors h-14" href="#contact">
                                Start a Similar Project
                            </a>
                        </div>
                    </div>
                </section>

                {/* 2. Project Overview */}
                {project.overview && (
                    <section className="py-24 bg-surface">
                        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
                                {/* Main Content */}
                                <div className="lg:col-span-8 pr-0 lg:pr-12">
                                    <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary-container mb-8">Engineering a Sustainable Future.</h2>
                                    <div className="font-body-lg text-body-lg text-on-surface-variant space-y-6 whitespace-pre-wrap">
                                        {project.overview}
                                    </div>
                                    {project.description && (
                                        <div className="mt-8 font-body-md text-on-surface-variant whitespace-pre-wrap">
                                            {project.description}
                                        </div>
                                    )}
                                </div>
                                {/* Sidebar */}
                                <div className="lg:col-span-4 mt-12 lg:mt-0">
                                    <div className="p-8 rounded-lg sticky top-32" style={{ background: 'rgba(255, 255, 255, 0.7)', backdropFilter: 'blur(20px)', border: '1px solid rgba(117, 119, 127, 0.2)' }}>
                                        <h3 className="font-headline-md text-headline-md text-primary-container mb-6 text-2xl">Key Information</h3>
                                        <ul className="space-y-4 font-body-md text-body-md text-on-surface-variant">
                                            {project.client && (
                                                <li className="flex justify-between border-b border-outline/10 pb-4"><span className="font-semibold text-primary-container">Client</span><span>{project.client}</span></li>
                                            )}
                                            <li className="flex justify-between border-b border-outline/10 pb-4"><span className="font-semibold text-primary-container">Location</span><span className="text-right">{project.location || 'N/A'}</span></li>
                                            <li className="flex justify-between border-b border-outline/10 pb-4"><span className="font-semibold text-primary-container">Project Type</span><span className="text-right">{project.category || 'N/A'}</span></li>
                                            <li className="flex justify-between border-b border-outline/10 pb-4"><span className="font-semibold text-primary-container">Year</span><span>{project.project_year || 'N/A'}</span></li>
                                            <li className="flex justify-between pb-2"><span className="font-semibold text-primary-container">Status</span><span className="text-secondary font-bold capitalize">{project.status || 'Active'}</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* 3. The Challenge */}
                {(project.challenge || project.solution) && (
                    <section className="py-24 bg-surface-container-lowest">
                        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                                <div>
                                    <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider mb-2 block">The Challenge</span>
                                    <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary-container mb-6">Navigating Constraints.</h2>
                                    <p className="font-body-lg text-body-lg text-on-surface-variant mb-6 whitespace-pre-wrap">{project.challenge}</p>
                                    <p className="font-body-md text-body-md text-on-surface-variant whitespace-pre-wrap">{project.solution}</p>
                                </div>
                                <div className="relative h-[500px] rounded-lg overflow-hidden p-2" style={{ background: 'rgba(255, 255, 255, 0.7)', backdropFilter: 'blur(20px)', border: '1px solid rgba(117, 119, 127, 0.2)' }}>
                                    {(galleryImages[0]?.image_url || project.cover_image_url) && (
                                        <img className="w-full h-full object-cover rounded" alt="Challenge Illustration" src={galleryImages[0]?.image_url || project.cover_image_url} />
                                    )}
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* Before & After */}
                {(beforeImages.length > 0 && afterImages.length > 0) && (
                    <section className="py-24 bg-surface">
                        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
                            <div className="text-center mb-16">
                                <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider mb-2 block">Transformation</span>
                                <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary-container">Before &amp; After</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
                                <div className="relative group overflow-hidden rounded-lg">
                                    <div className="absolute top-4 left-4 z-10 bg-primary/80 text-white px-4 py-1 text-label-sm rounded">Before</div>
                                    <img alt="Before" className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105" src={beforeImages[0].image_url} />
                                </div>
                                <div className="relative group overflow-hidden rounded-lg">
                                    <div className="absolute top-4 left-4 z-10 bg-secondary text-on-secondary-container px-4 py-1 text-label-sm rounded">After</div>
                                    <img alt="After" className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105" src={afterImages[0].image_url} />
                                </div>
                            </div>
                        </div>
                    </section>
                )}


                {/* Methodology / Process Steps */}
                {processSteps.length > 0 && (
                    <section className="py-24 bg-primary-container text-on-primary">
                        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
                            <div className="text-center max-w-3xl mx-auto mb-16">
                                <span className="font-label-sm text-label-sm text-secondary-fixed uppercase tracking-wider mb-2 block">Methodology</span>
                                <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-white mb-6">A Phased Engineering Approach</h2>
                                <p className="font-body-lg text-body-lg text-surface-variant">We deployed precision methodology to ensure seamless execution from concept to commissioning.</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
                                {processSteps.map((step, index) => (
                                    <div key={step.id} className="bg-white/5 border border-white/10 p-8 rounded-lg hover:bg-white/10 transition-colors duration-300">
                                        <div className="text-secondary-fixed font-headline-md text-headline-md mb-4">{String(index + 1).padStart(2, '0')}</div>
                                        <h3 className="font-headline-md text-headline-md text-xl text-white mb-3">{step.title}</h3>
                                        <p className="font-body-md text-body-md text-surface-variant/80">{step.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* Technical Specifications */}
                {specifications.length > 0 && (
                    <section className="py-24 bg-surface-container-low">
                        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
                                <div className="lg:col-span-4">
                                    <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider mb-2 block">Engineering Data</span>
                                    <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary-container mb-6">Technical Specifications</h2>
                                    <p className="font-body-md text-on-surface-variant">Precision-engineered components selected for maximum durability and efficiency.</p>
                                </div>
                                <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                                    {specifications.map(s => (
                                        <div key={s.id} className="border-b border-outline/10 pb-4">
                                            <span className="block font-label-sm text-outline uppercase mb-1">{s.label}</span>
                                            <span className="font-body-lg font-semibold text-primary-container">{s.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* Highlights / Stats */}
                {highlights.length > 0 && (
                    <section className="py-24 bg-surface">
                        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {highlights.map((h, i) => (
                                    <div key={h.id} className={`p-10 rounded-lg text-center border-t-4 ${i === 1 ? 'border-t-primary-container' : 'border-t-secondary'}`} style={{ background: 'rgba(255, 255, 255, 0.7)', backdropFilter: 'blur(20px)', border: '1px solid rgba(117, 119, 127, 0.2)' }}>
                                        <div className="font-headline-xl text-headline-xl text-primary-container mb-2">{h.value}</div>
                                        <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">{h.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* Project Gallery */}
                {galleryImages.length > 1 && (
                    <section className="py-24 bg-surface-container-lowest">
                        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
                            <div className="flex justify-between items-end mb-12">
                                <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary-container">Visual Documentation</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter auto-rows-[300px]">
                                {galleryImages.slice(0, 3).map((img, i) => {
                                    if (i === 0) {
                                        return (
                                            <div key={img.id} className="md:col-span-7 row-span-2 relative group overflow-hidden rounded-lg cursor-pointer">
                                                <img alt={img.alt_text || 'Gallery Image'} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={img.image_url} />
                                                <div className="absolute inset-0 bg-primary-container/10 group-hover:bg-transparent transition-colors duration-500"></div>
                                            </div>
                                        );
                                    } else {
                                        return (
                                            <div key={img.id} className="md:col-span-5 row-span-1 relative group overflow-hidden rounded-lg cursor-pointer">
                                                <img alt={img.alt_text || 'Gallery Image'} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={img.image_url} />
                                                <div className="absolute inset-0 bg-primary-container/10 group-hover:bg-transparent transition-colors duration-500"></div>
                                            </div>
                                        );
                                    }
                                })}
                            </div>
                        </div>
                    </section>
                )}

                {/* Testimonial */}
                {testimonial && testimonial.quote && (
                    <section className="py-24 bg-surface">
                        <div className="max-w-3xl mx-auto px-margin-mobile text-center">
                            <span className="material-symbols-outlined text-secondary text-6xl mb-8">format_quote</span>
                            <blockquote className="font-headline-md text-headline-md text-primary-container mb-10 italic">
                                "{testimonial.quote}"
                            </blockquote>
                            <div className="flex items-center justify-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-white">
                                    <span className="material-symbols-outlined">person</span>
                                </div>
                                <div className="text-left">
                                    <div className="font-bold text-primary-container">{testimonial.person_name}</div>
                                    <div className="text-label-sm text-outline uppercase">{testimonial.person_role}{testimonial.company ? `, ${testimonial.company}` : ''}</div>
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* Final CTA */}
                <section className="py-32 bg-primary-container text-on-primary text-center" id="contact">
                    <div className="max-w-3xl mx-auto px-margin-mobile">
                        <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-white mb-6">Have a Similar Project? - Start Your Project</h2>
                        <p className="font-body-lg text-body-lg text-surface-variant/80 mb-10">Partner with our engineering collective for solutions that deliver measurable impact.</p>
                        <Link className="inline-flex items-center justify-center bg-secondary-container text-on-secondary-container font-label-sm text-label-sm px-10 py-4 rounded hover:bg-secondary-fixed transition-colors h-14" to="/projects">
                            Contact Us
                        </Link>
                    </div>
                </section>

                {/* 10. Project Navigation */}
                <section className="py-12 border-t border-outline/10 bg-surface">
                    <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop flex justify-between items-center">
                        {prevProject ? (
                            <Link className="group flex items-center gap-4 text-on-surface-variant hover:text-primary-container transition-colors" to={`/projects/${prevProject.slug}`}>
                                <span className="material-symbols-outlined transform group-hover:-translate-x-1 transition-transform">arrow_back</span>
                                <div>
                                    <span className="block font-label-sm text-label-sm uppercase text-outline mb-1">Previous Project</span>
                                    <span className="font-body-md text-body-md font-semibold">{prevProject.title}</span>
                                </div>
                            </Link>
                        ) : <div></div>}

                        {nextProject ? (
                            <Link className="group flex items-center gap-4 text-on-surface-variant hover:text-primary-container text-right transition-colors" to={`/projects/${nextProject.slug}`}>
                                <div>
                                    <span className="block font-label-sm text-label-sm uppercase text-outline mb-1">Next Project</span>
                                    <span className="font-body-md text-body-md font-semibold">{nextProject.title}</span>
                                </div>
                                <span className="material-symbols-outlined transform group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </Link>
                        ) : <div></div>}
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="w-full bg-primary-container dark:bg-tertiary-container border-t border-outline/10 text-on-primary dark:text-on-tertiary font-body-md text-body-md">
                <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-20 grid grid-cols-1 md:grid-cols-4 gap-gutter">
                    <div className="col-span-1 md:col-span-1 mb-10 md:mb-0">
                        <div className="font-headline-md text-headline-md font-bold text-secondary mb-6">Apex Engineering</div>
                        <p className="text-on-primary-container dark:text-on-tertiary-container mb-6 opacity-80">Building the future with kinetic precision and sustainable innovation.</p>
                        <div className="text-on-primary-container dark:text-on-tertiary-container opacity-60 text-sm">
                            © 2026 Apex Engineering Collective. All rights reserved.
                        </div>
                    </div>
                    <div className="col-span-1">
                        <h4 className="font-label-sm text-label-sm text-on-primary uppercase tracking-wider mb-6">Services</h4>
                        <ul className="space-y-4">
                            <li><Link className="text-on-primary-container dark:text-on-tertiary-container hover:text-secondary-fixed transition-colors opacity-80 hover:opacity-100" to="/solar-energy">Solar Energy</Link></li>
                            <li><Link className="text-on-primary-container dark:text-on-tertiary-container hover:text-secondary-fixed transition-colors opacity-80 hover:opacity-100" to="/construction">Construction</Link></li>
                            <li><Link className="text-on-primary-container dark:text-on-tertiary-container hover:text-secondary-fixed transition-colors opacity-80 hover:opacity-100" to="/elevators">Elevator Solutions</Link></li>
                        </ul>
                    </div>
                    <div className="col-span-1">
                        <h4 className="font-label-sm text-label-sm text-on-primary uppercase tracking-wider mb-6">Company</h4>
                        <ul className="space-y-4">
                            <li><Link className="text-on-primary-container dark:text-on-tertiary-container hover:text-secondary-fixed transition-colors opacity-80 hover:opacity-100" to="/projects">Projects</Link></li>
                            <li><Link className="text-on-primary-container dark:text-on-tertiary-container hover:text-secondary-fixed transition-colors opacity-80 hover:opacity-100" to="/about">About Us</Link></li>
                            <li><Link className="text-on-primary-container dark:text-on-tertiary-container hover:text-secondary-fixed transition-colors opacity-80 hover:opacity-100" to="/">Global Offices</Link></li>
                        </ul>
                    </div>
                    <div className="col-span-1">
                        <h4 className="font-label-sm text-label-sm text-on-primary uppercase tracking-wider mb-6">Legal</h4>
                        <ul className="space-y-4">
                            <li><Link className="text-on-primary-container dark:text-on-tertiary-container hover:text-secondary-fixed transition-colors opacity-80 hover:opacity-100" to="/">Privacy Policy</Link></li>
                            <li><Link className="text-on-primary-container dark:text-on-tertiary-container hover:text-secondary-fixed transition-colors opacity-80 hover:opacity-100" to="/">Terms of Service</Link></li>
                            <li><Link className="text-on-primary-container dark:text-on-tertiary-container hover:text-secondary-fixed transition-colors opacity-80 hover:opacity-100" to="/">Sustainability Report</Link></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default ProjectDetails;

