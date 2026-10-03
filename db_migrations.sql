
-- Supabase Migrations for Extended Project Details

-- Update existing projects table
ALTER TABLE public.projects 
ADD COLUMN IF NOT EXISTS slug TEXT UNIQUE,
ADD COLUMN IF NOT EXISTS location TEXT,
ADD COLUMN IF NOT EXISTS project_year TEXT,
ADD COLUMN IF NOT EXISTS status TEXT DEFAULT 'completed',
ADD COLUMN IF NOT EXISTS published BOOLEAN DEFAULT true,
ADD COLUMN IF NOT EXISTS overview TEXT,
ADD COLUMN IF NOT EXISTS challenge TEXT,
ADD COLUMN IF NOT EXISTS solution TEXT,
ADD COLUMN IF NOT EXISTS result TEXT,
ADD COLUMN IF NOT EXISTS cover_image_url TEXT,
ADD COLUMN IF NOT EXISTS cover_image_public_id TEXT;

-- Table for project images (if not exist, or append)
CREATE TABLE IF NOT EXISTS public.project_images (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    project_id UUID REFERENCES public.projects(id) ON DELETE CASCADE,
    image_url TEXT NOT NULL,
    public_id TEXT,
    alt_text TEXT,
    image_type TEXT DEFAULT 'gallery', 
    sort_order INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc', now())
);

-- Table for project highlights
CREATE TABLE IF NOT EXISTS public.project_highlights (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    project_id UUID REFERENCES public.projects(id) ON DELETE CASCADE,
    label TEXT NOT NULL,
    value TEXT NOT NULL,
    sort_order INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc', now())
);

-- Table for specifications
CREATE TABLE IF NOT EXISTS public.project_specifications (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    project_id UUID REFERENCES public.projects(id) ON DELETE CASCADE,
    label TEXT NOT NULL,
    value TEXT NOT NULL,
    sort_order INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc', now())
);

-- Table for process steps
CREATE TABLE IF NOT EXISTS public.project_process_steps (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    project_id UUID REFERENCES public.projects(id) ON DELETE CASCADE,
    step_number TEXT,
    title TEXT,
    description TEXT,
    sort_order INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc', now())
);

-- Table for testimonial
CREATE TABLE IF NOT EXISTS public.project_testimonials (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    project_id UUID REFERENCES public.projects(id) ON DELETE CASCADE,
    quote TEXT NOT NULL,
    person_name TEXT,
    person_role TEXT,
    company TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc', now())
);

-- Enable RLS and setup policies
ALTER TABLE public.project_images ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.project_highlights ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.project_specifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.project_process_steps ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.project_testimonials ENABLE ROW LEVEL SECURITY;

-- Note: We assume that the user will setup the appropriate select policies (anon) and action policies (authenticated) as they did for projects.

