import { supabase } from './supabaseClient';

export const addProject = async (projectData) => {
    const { data, error } = await supabase
        .from('projects')
        .insert([projectData])
        .select('*');

    if (error) throw error;
    return data;
};

export const getProjects = async () => {
    const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false });

    if (error) throw error;
    return data;
};

export const updateProject = async (id, projectData) => {
    const { data, error } = await supabase
        .from('projects')
        .update(projectData)
        .eq('id', id);

    if (error) throw error;
    return data;
};

export const deleteProject = async (id) => {
    const { data, error } = await supabase
        .from('projects')
        .delete()
        .eq('id', id);

    if (error) throw error;
    return data;
};

export const getProjectBySlug = async (slug) => {
    const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('slug', slug)
        .maybeSingle();
    if (error) throw error;
    return data;
};

export const getProjectById = async (id) => {
    const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('id', id)
        .maybeSingle();
    if (error) throw error;
    return data;
};

export const getProjectImages = async (projectId) => {
    const { data, error } = await supabase
        .from('project_images')
        .select('*')
        .eq('project_id', projectId)
        .order('sort_order', { ascending: true });
    if (error) throw error;
    return data;
};

export const getProjectHighlights = async (projectId) => {
    const { data, error } = await supabase
        .from('project_highlights')
        .select('*')
        .eq('project_id', projectId)
        .order('sort_order', { ascending: true });
    if (error) throw error;
    return data;
};

export const getProjectSpecifications = async (projectId) => {
    const { data, error } = await supabase
        .from('project_specifications')
        .select('*')
        .eq('project_id', projectId)
        .order('sort_order', { ascending: true });
    if (error) throw error;
    return data;
};

export const getProjectProcessSteps = async (projectId) => {
    const { data, error } = await supabase
        .from('project_process_steps')
        .select('*')
        .eq('project_id', projectId)
        .order('sort_order', { ascending: true });
    if (error) throw error;
    return data;
};

export const getProjectTestimonial = async (projectId) => {
    const { data, error } = await supabase
        .from('project_testimonials')
        .select('*')
        .eq('project_id', projectId)
        .maybeSingle();
    if (error) throw error;
    return data;
};

export const getPreviousProject = async (project) => {
    const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('category', project.category)
        .eq('published', true)
        .lt('created_at', project.created_at)
        .order('created_at', { ascending: false })
        .limit(1)
        .maybeSingle();
    if (error) throw error;
    return data;
};

export const getNextProject = async (project) => {
    const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('category', project.category)
        .eq('published', true)
        .gt('created_at', project.created_at)
        .order('created_at', { ascending: true })
        .limit(1)
        .maybeSingle();
    if (error) throw error;
    return data;
};

export const saveProjectImages = async (projectId, images) => {
    if (!images || images.length === 0) return;
    const records = images.map((img, i) => ({ ...img, project_id: projectId, sort_order: i }));
    const { error } = await supabase.from('project_images').insert(records);
    if (error) throw error;
};

export const deleteProjectImages = async (projectId) => {
    const { error } = await supabase.from('project_images').delete().eq('project_id', projectId);
    if (error) throw error;
};

export const saveProjectHighlights = async (projectId, highlights) => {
    if (!highlights || highlights.length === 0) return;
    const records = highlights.map((h, i) => ({ ...h, project_id: projectId, sort_order: i }));
    const { error } = await supabase.from('project_highlights').insert(records);
    if (error) throw error;
};

export const deleteProjectHighlights = async (projectId) => {
    const { error } = await supabase.from('project_highlights').delete().eq('project_id', projectId);
    if (error) throw error;
};

export const saveProjectSpecifications = async (projectId, specs) => {
    if (!specs || specs.length === 0) return;
    const records = specs.map((s, i) => ({ ...s, project_id: projectId, sort_order: i }));
    const { error } = await supabase.from('project_specifications').insert(records);
    if (error) throw error;
};

export const deleteProjectSpecifications = async (projectId) => {
    const { error } = await supabase.from('project_specifications').delete().eq('project_id', projectId);
    if (error) throw error;
};

export const saveProjectProcessSteps = async (projectId, steps) => {
    if (!steps || steps.length === 0) return;
    const records = steps.map((s, i) => ({ ...s, project_id: projectId, sort_order: i }));
    const { error } = await supabase.from('project_process_steps').insert(records);
    if (error) throw error;
};

export const deleteProjectProcessSteps = async (projectId) => {
    const { error } = await supabase.from('project_process_steps').delete().eq('project_id', projectId);
    if (error) throw error;
};

export const saveProjectTestimonial = async (projectId, testimonial) => {
    if (!testimonial || !testimonial.quote) return;
    const { error } = await supabase.from('project_testimonials').insert({ ...testimonial, project_id: projectId });
    if (error) throw error;
};

export const deleteProjectTestimonial = async (projectId) => {
    const { error } = await supabase.from('project_testimonials').delete().eq('project_id', projectId);
    if (error) throw error;
};
