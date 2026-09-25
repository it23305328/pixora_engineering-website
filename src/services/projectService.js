import { supabase } from './supabaseClient';

export const addProject = async (projectData) => {
    const { data, error } = await supabase
        .from('projects')
        .insert([projectData]);

    if (error) {
        throw error;
    }
    return data;
};

export const getProjects = async () => {
    const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false });

    if (error) {
        throw error;
    }
    return data;
};

export const updateProject = async (id, projectData) => {
    const { data, error } = await supabase
        .from('projects')
        .update(projectData)
        .eq('id', id);

    if (error) {
        throw error;
    }
    return data;
};

export const deleteProject = async (id) => {
    const { data, error } = await supabase
        .from('projects')
        .delete()
        .eq('id', id);

    if (error) {
        throw error;
    }
    return data;
};
