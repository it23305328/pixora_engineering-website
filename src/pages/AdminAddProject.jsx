import React, { useState, useEffect } from 'react';
import {
    addProject,
    updateProject,
    getProjectById,
    getProjectImages,
    getProjectHighlights,
    getProjectSpecifications,
    getProjectProcessSteps,
    getProjectTestimonial,
    deleteProjectImages,
    deleteProjectHighlights,
    deleteProjectSpecifications,
    deleteProjectProcessSteps,
    deleteProjectTestimonial,
    saveProjectImages,
    saveProjectHighlights,
    saveProjectSpecifications,
    saveProjectProcessSteps,
    saveProjectTestimonial
} from '../services/projectService';
import { uploadImageToCloudinary } from '../services/cloudinaryService';
import { supabase } from '../services/supabaseClient';
import { useNavigate, Link, useParams } from 'react-router-dom';
import './AdminAddProject.css';

const AdminAddProject = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const isEditMode = Boolean(id);

    // Basic Details
    const [title, setTitle] = useState('');
    const [slug, setSlug] = useState('');
    const [category, setCategory] = useState('solar');
    const [location, setLocation] = useState('');
    const [projectYear, setProjectYear] = useState('');
    const [status, setStatus] = useState('completed');
    const [published, setPublished] = useState(true);

    // Description Details
    const [description, setDescription] = useState('');
    const [overview, setOverview] = useState('');
    const [challenge, setChallenge] = useState('');
    const [solution, setSolution] = useState('');
    const [result, setResult] = useState('');

    // Single Cover Image
    const [imageFile, setImageFile] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [existingCoverUrl, setExistingCoverUrl] = useState(null);

    // Dynamic Lists
    const [galleryFiles, setGalleryFiles] = useState([]);
    const [existingGallery, setExistingGallery] = useState([]);

    const [beforeFile, setBeforeFile] = useState(null);
    const [existingBeforeUrl, setExistingBeforeUrl] = useState(null);

    const [afterFile, setAfterFile] = useState(null);
    const [existingAfterUrl, setExistingAfterUrl] = useState(null);

    const [highlights, setHighlights] = useState([]);
    const [specifications, setSpecifications] = useState([]);
    const [processSteps, setProcessSteps] = useState([]);

    // Testimonial
    const [testimonialQuote, setTestimonialQuote] = useState('');
    const [testimonialName, setTestimonialName] = useState('');
    const [testimonialRole, setTestimonialRole] = useState('');
    const [testimonialCompany, setTestimonialCompany] = useState('');

    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [initializing, setInitializing] = useState(isEditMode);

    useEffect(() => {
        if (isEditMode) {
            const fetchExistingProject = async () => {
                try {
                    const proj = await getProjectById(id);
                    setTitle(proj.title || '');
                    setSlug(proj.slug || '');
                    setCategory(proj.category || 'solar');
                    setLocation(proj.location || '');
                    setProjectYear(proj.project_year || '');
                    setStatus(proj.status || 'completed');
                    setPublished(proj.published !== false);
                    setDescription(proj.description || '');
                    setOverview(proj.overview || '');
                    setChallenge(proj.challenge || '');
                    setSolution(proj.solution || '');
                    setResult(proj.result || '');
                    setExistingCoverUrl(proj.cover_image_url || proj.image_url);

                    const imgs = await getProjectImages(id);
                    setExistingGallery(imgs.filter(i => i.image_type === 'gallery'));
                    const befores = imgs.filter(i => i.image_type === 'before');
                    const afters = imgs.filter(i => i.image_type === 'after');
                    if (befores.length) setExistingBeforeUrl(befores[0].image_url);
                    if (afters.length) setExistingAfterUrl(afters[0].image_url);

                    const hls = await getProjectHighlights(id);
                    setHighlights(hls);

                    const specs = await getProjectSpecifications(id);
                    setSpecifications(specs);

                    const steps = await getProjectProcessSteps(id);
                    setProcessSteps(steps);

                    const test = await getProjectTestimonial(id);
                    if (test) {
                        setTestimonialQuote(test.quote || '');
                        setTestimonialName(test.person_name || '');
                        setTestimonialRole(test.person_role || '');
                        setTestimonialCompany(test.company || '');
                    }
                } catch (err) {
                    console.error('Error fetching project for edit:', err);
                    setMessage('Failed to load project details.');
                } finally {
                    setInitializing(false);
                }
            };
            fetchExistingProject();
        }
    }, [id, isEditMode]);

    const handleTitleChange = (e) => {
        const val = e.target.value;
        setTitle(val);
        if (!isEditMode) {
            setSlug(val.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, ''));
        }
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImageFile(file);
            setImagePreview(URL.createObjectURL(file));
        }
    };

    const handleGalleryChange = (e) => {
        const files = Array.from(e.target.files);
        setGalleryFiles(prev => [...prev, ...files]);
    };
    const removeGalleryFile = (index) => {
        setGalleryFiles(prev => prev.filter((_, i) => i !== index));
    };
    const removeExistingGallery = (idToRemove) => {
        setExistingGallery(prev => prev.filter(img => img.id !== idToRemove));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');

        try {
            if (!isEditMode && !imageFile) throw new Error("Please select a cover image.");

            let coverImageUrl = existingCoverUrl;
            if (imageFile) {
                coverImageUrl = await uploadImageToCloudinary(imageFile);
            }

            const projectData = {
                title, slug, category, location, project_year: projectYear, status, published,
                description, overview, challenge, solution, result,
                image_url: coverImageUrl,
                cover_image_url: coverImageUrl
            };

            let projectId = id;
            if (isEditMode) {
                await updateProject(id, projectData);
            } else {
                const [createdProject] = await addProject(projectData);
                projectId = createdProject.id;
            }

            // Handle Images
            const newImageRecords = [];
            for (let f of galleryFiles) {
                const url = await uploadImageToCloudinary(f);
                newImageRecords.push({ image_url: url, image_type: 'gallery' });
            }

            let finalBeforeUrl = existingBeforeUrl;
            if (beforeFile) {
                finalBeforeUrl = await uploadImageToCloudinary(beforeFile);
                newImageRecords.push({ image_url: finalBeforeUrl, image_type: 'before' });
            } else if (existingBeforeUrl && !isEditMode) {
                newImageRecords.push({ image_url: existingBeforeUrl, image_type: 'before' });
            } else if (existingBeforeUrl && isEditMode) {
                newImageRecords.push({ image_url: existingBeforeUrl, image_type: 'before' });
            } // We'll clear and recreate all images to make sorting and updates simple

            let finalAfterUrl = existingAfterUrl;
            if (afterFile) {
                finalAfterUrl = await uploadImageToCloudinary(afterFile);
                newImageRecords.push({ image_url: finalAfterUrl, image_type: 'after' });
            } else if (existingAfterUrl) {
                newImageRecords.push({ image_url: existingAfterUrl, image_type: 'after' });
            }

            const allFinalGallery = [...existingGallery.map(g => ({ image_url: g.image_url, image_type: 'gallery' })), ...newImageRecords];

            if (isEditMode) await deleteProjectImages(projectId);
            if (allFinalGallery.length > 0) {
                await saveProjectImages(projectId, allFinalGallery);
            }

            // Deal with lists (delete first then insert new)
            if (isEditMode) {
                await deleteProjectHighlights(projectId);
                await deleteProjectSpecifications(projectId);
                await deleteProjectProcessSteps(projectId);
                await deleteProjectTestimonial(projectId);
            }

            await saveProjectHighlights(projectId, highlights);
            await saveProjectSpecifications(projectId, specifications);
            await saveProjectProcessSteps(projectId, processSteps);
            if (testimonialQuote) {
                await saveProjectTestimonial(projectId, {
                    quote: testimonialQuote, person_name: testimonialName,
                    person_role: testimonialRole, company: testimonialCompany
                });
            }

            setMessage(`Project successfully ${isEditMode ? 'updated' : 'added'}!`);
            setTimeout(() => navigate('/admin/manage-projects'), 1500);

        } catch (error) {
            console.error('Error saving project:', error);
            setMessage(error.message || 'Failed to save project.');
        } finally {
            setLoading(false);
        }
    };

    if (initializing) return <div className="text-center pt-24 text-xl">Loading project data...</div>;

    return (
        <div className="admin-project-container text-gray-800" style={{ flexDirection: 'column', maxWidth: '800px', margin: '0 auto', paddingBottom: '100px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', width: '100%' }}>
                <Link to="/admin/manage-projects" style={{ textDecoration: 'none', color: '#0b1a3d', fontWeight: 'bold' }}>&larr; Back to Dashboard</Link>
                <button onClick={() => supabase.auth.signOut().then(() => navigate('/admin/login'))} style={{ background: 'none', border: 'none', color: '#d93025', fontWeight: 'bold', cursor: 'pointer' }}>Logout</button>
            </div>

            <div className="admin-project-card p-6 rounded-lg bg-white shadow w-full">
                <h2 className="text-2xl font-bold mb-6">{isEditMode ? 'Edit Project' : 'Add New Project'}</h2>
                {message && <div style={{ marginBottom: "1rem", color: message.includes('success') ? 'green' : 'red', fontWeight: "bold" }}>{message}</div>}

                <form onSubmit={handleSubmit} className="admin-project-form w-full flex flex-col gap-6">
                    {/* Basic Info */}
                    <div className="bg-gray-50 p-4 rounded border">
                        <h3 className="font-bold text-lg mb-4 border-b pb-2">1. Basic Information</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div><label>Title *</label><input type="text" value={title} onChange={handleTitleChange} required className="w-full border p-2 rounded" /></div>
                            <div><label>Slug *</label><input type="text" value={slug} onChange={e => setSlug(e.target.value)} required className="w-full border p-2 rounded" /></div>
                            <div>
                                <label>Category *</label>
                                <select value={category} onChange={e => setCategory(e.target.value)} className="w-full border p-2 rounded">
                                    <option value="solar">Solar Energy Solutions</option>
                                    <option value="construction">Construction & Engineering</option>
                                    <option value="elevator">Elevator Parts & Solutions</option>
                                </select>
                            </div>
                            <div><label>Location</label><input type="text" value={location} onChange={e => setLocation(e.target.value)} className="w-full border p-2 rounded" /></div>
                            <div><label>Year</label><input type="text" value={projectYear} onChange={e => setProjectYear(e.target.value)} className="w-full border p-2 rounded" /></div>
                            <div>
                                <label>Status</label>
                                <select value={status} onChange={e => setStatus(e.target.value)} className="w-full border p-2 rounded">
                                    <option value="completed">Completed</option>
                                    <option value="ongoing">Ongoing</option>
                                    <option value="upcoming">Upcoming</option>
                                </select>
                            </div>
                        </div>
                        <div className="mt-4"><label className="cursor-pointer font-bold"><input type="checkbox" checked={published} onChange={e => setPublished(e.target.checked)} /> Published</label></div>
                    </div>

                    {/* Media */}
                    <div className="bg-gray-50 p-4 rounded border">
                        <h3 className="font-bold text-lg mb-4 border-b pb-2">2. Cover & Media</h3>
                        <div className="mb-4">
                            <label>Cover Image {isEditMode ? '(Optional to replace)' : '*'}</label>
                            <input type="file" accept="image/*" onChange={handleImageChange} required={!isEditMode && !existingCoverUrl} className="w-full mb-2" />
                            {imagePreview ? <img src={imagePreview} alt="Preview" className="h-32 object-cover rounded" />
                                : existingCoverUrl ? <img src={existingCoverUrl} alt="Existing Cover" className="h-32 object-cover rounded" /> : null}
                        </div>
                        <hr className="my-4" />
                        <div className="mb-4">
                            <label>Gallery Images (Upload additional)</label>
                            <input type="file" accept="image/*" multiple onChange={handleGalleryChange} className="w-full mb-2" />
                            <div className="flex flex-wrap gap-2">
                                {existingGallery.map((img) => (
                                    <div key={img.id} className="relative group border-2 border-green-500 rounded">
                                        <img src={img.image_url} alt="" className="h-16 w-16 object-cover rounded" />
                                        <button type="button" onClick={() => removeExistingGallery(img.id)} className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">x</button>
                                    </div>
                                ))}
                                {galleryFiles.map((file, i) => (
                                    <div key={i} className="relative group border-2 border-blue-500 rounded">
                                        <img src={URL.createObjectURL(file)} alt="" className="h-16 w-16 object-cover rounded" />
                                        <button type="button" onClick={() => removeGalleryFile(i)} className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">x</button>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <hr className="my-4" />
                        <div className="flex gap-4">
                            <div className="flex-1">
                                <label>Before Image</label>
                                <input type="file" accept="image/*" onChange={e => setBeforeFile(e.target.files[0])} className="w-full mb-2" />
                                {beforeFile ? <img src={URL.createObjectURL(beforeFile)} className="h-20 object-cover" /> : existingBeforeUrl ? <img src={existingBeforeUrl} className="h-20 object-cover" /> : null}
                            </div>
                            <div className="flex-1">
                                <label>After Image</label>
                                <input type="file" accept="image/*" onChange={e => setAfterFile(e.target.files[0])} className="w-full mb-2" />
                                {afterFile ? <img src={URL.createObjectURL(afterFile)} className="h-20 object-cover" /> : existingAfterUrl ? <img src={existingAfterUrl} className="h-20 object-cover" /> : null}
                            </div>
                        </div>
                    </div>

                    {/* Descriptions */}
                    <div className="bg-gray-50 p-4 rounded border">
                        <h3 className="font-bold text-lg mb-4 border-b pb-2">3. Descriptions</h3>
                        <div className="flex flex-col gap-4">
                            <div><label>Short Description *</label><textarea required value={description} onChange={e => setDescription(e.target.value)} rows="2" className="w-full border p-2 rounded" /></div>
                            <div><label>Overview</label><textarea value={overview} onChange={e => setOverview(e.target.value)} rows="3" className="w-full border p-2 rounded" /></div>
                            <div><label>The Challenge</label><textarea value={challenge} onChange={e => setChallenge(e.target.value)} rows="3" className="w-full border p-2 rounded" /></div>
                            <div><label>Our Solution</label><textarea value={solution} onChange={e => setSolution(e.target.value)} rows="3" className="w-full border p-2 rounded" /></div>
                            <div><label>Project Result</label><textarea value={result} onChange={e => setResult(e.target.value)} rows="3" className="w-full border p-2 rounded" /></div>
                        </div>
                    </div>

                    {/* Highlights */}
                    <div className="bg-gray-50 p-4 rounded border">
                        <div className="flex justify-between items-center border-b pb-2 mb-4">
                            <h3 className="font-bold text-lg">4. Highlights / Stats</h3>
                            <button type="button" onClick={() => setHighlights([...highlights, { label: '', value: '' }])} className="bg-blue-100 text-blue-700 px-3 py-1 rounded text-sm font-bold">+ Add Highlight</button>
                        </div>
                        {highlights.map((h, i) => (
                            <div key={i} className="flex gap-2 mb-2">
                                <input type="text" placeholder="Value (e.g. 14)" value={h.value} onChange={e => { const nh = [...highlights]; nh[i].value = e.target.value; setHighlights(nh); }} className="flex-1 border p-2 rounded" />
                                <input type="text" placeholder="Label (e.g. Weeks to Completion)" value={h.label} onChange={e => { const nh = [...highlights]; nh[i].label = e.target.value; setHighlights(nh); }} className="flex-[2] border p-2 rounded" />
                                <button type="button" onClick={() => setHighlights(highlights.filter((_, idx) => idx !== i))} className="bg-white border rounded px-3 text-red-500 font-bold">X</button>
                            </div>
                        ))}
                    </div>

                    {/* Specifications */}
                    <div className="bg-gray-50 p-4 rounded border">
                        <div className="flex justify-between items-center border-b pb-2 mb-4">
                            <h3 className="font-bold text-lg">5. Technical Specifications</h3>
                            <button type="button" onClick={() => setSpecifications([...specifications, { label: '', value: '' }])} className="bg-blue-100 text-blue-700 px-3 py-1 rounded text-sm font-bold">+ Add Spec</button>
                        </div>
                        {specifications.map((s, i) => (
                            <div key={i} className="flex gap-2 mb-2">
                                <input type="text" placeholder="Name (e.g. Panel Efficiency)" value={s.label} onChange={e => { const ns = [...specifications]; ns[i].label = e.target.value; setSpecifications(ns); }} className="flex-1 border p-2 rounded" />
                                <input type="text" placeholder="Value (e.g. 22.8%)" value={s.value} onChange={e => { const ns = [...specifications]; ns[i].value = e.target.value; setSpecifications(ns); }} className="flex-[2] border p-2 rounded" />
                                <button type="button" onClick={() => setSpecifications(specifications.filter((_, idx) => idx !== i))} className="bg-white border rounded px-3 text-red-500 font-bold">X</button>
                            </div>
                        ))}
                    </div>

                    {/* Process */}
                    <div className="bg-gray-50 p-4 rounded border">
                        <div className="flex justify-between items-center border-b pb-2 mb-4">
                            <h3 className="font-bold text-lg">6. Process Steps</h3>
                            <button type="button" onClick={() => setProcessSteps([...processSteps, { title: '', description: '' }])} className="bg-blue-100 text-blue-700 px-3 py-1 rounded text-sm font-bold">+ Add Step</button>
                        </div>
                        {processSteps.map((s, i) => (
                            <div key={i} className="flex flex-col gap-2 mb-4 border p-3 rounded bg-white relative">
                                <button type="button" onClick={() => setProcessSteps(processSteps.filter((_, idx) => idx !== i))} className="absolute top-2 right-2 text-red-500 font-bold">X</button>
                                <input type="text" placeholder="Step Title" value={s.title} onChange={e => { const ns = [...processSteps]; ns[i].title = e.target.value; setProcessSteps(ns); }} className="border p-2 rounded pr-8" />
                                <textarea placeholder="Step Description" value={s.description} onChange={e => { const ns = [...processSteps]; ns[i].description = e.target.value; setProcessSteps(ns); }} className="border p-2 rounded" rows="2" />
                            </div>
                        ))}
                    </div>

                    {/* Testimonial */}
                    <div className="bg-gray-50 p-4 rounded border">
                        <h3 className="font-bold text-lg mb-4 border-b pb-2">7. Client Testimonial</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="col-span-2"><label>Quote</label><textarea value={testimonialQuote} onChange={e => setTestimonialQuote(e.target.value)} className="w-full border p-2 rounded" rows="2" /></div>
                            <div><label>Person Name</label><input type="text" value={testimonialName} onChange={e => setTestimonialName(e.target.value)} className="w-full border p-2 rounded" /></div>
                            <div><label>Role</label><input type="text" value={testimonialRole} onChange={e => setTestimonialRole(e.target.value)} className="w-full border p-2 rounded" /></div>
                            <div className="col-span-2"><label>Company</label><input type="text" value={testimonialCompany} onChange={e => setTestimonialCompany(e.target.value)} className="w-full border p-2 rounded" /></div>
                        </div>
                    </div>

                    <button type="submit" disabled={loading} className="bg-[#0b1a3d] hover:bg-[#1a2d5c] text-white font-bold py-4 rounded text-xl transition-colors">
                        {loading ? 'Uploading & Saving...' : (isEditMode ? 'Save Changes' : 'Save Complete Project')}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AdminAddProject;
