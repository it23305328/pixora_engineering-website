-- RLS Policies for Extended Project Details

-- 1. project_images
CREATE POLICY "Allow public read access to project_images" ON public.project_images FOR SELECT USING (true);
CREATE POLICY "Allow authenticated insert to project_images" ON public.project_images FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Allow authenticated update to project_images" ON public.project_images FOR UPDATE TO authenticated USING (true);
CREATE POLICY "Allow authenticated delete to project_images" ON public.project_images FOR DELETE TO authenticated USING (true);

-- 2. project_highlights
CREATE POLICY "Allow public read access to project_highlights" ON public.project_highlights FOR SELECT USING (true);
CREATE POLICY "Allow authenticated insert to project_highlights" ON public.project_highlights FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Allow authenticated update to project_highlights" ON public.project_highlights FOR UPDATE TO authenticated USING (true);
CREATE POLICY "Allow authenticated delete to project_highlights" ON public.project_highlights FOR DELETE TO authenticated USING (true);

-- 3. project_specifications
CREATE POLICY "Allow public read access to project_specifications" ON public.project_specifications FOR SELECT USING (true);
CREATE POLICY "Allow authenticated insert to project_specifications" ON public.project_specifications FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Allow authenticated update to project_specifications" ON public.project_specifications FOR UPDATE TO authenticated USING (true);
CREATE POLICY "Allow authenticated delete to project_specifications" ON public.project_specifications FOR DELETE TO authenticated USING (true);

-- 4. project_process_steps
CREATE POLICY "Allow public read access to project_process_steps" ON public.project_process_steps FOR SELECT USING (true);
CREATE POLICY "Allow authenticated insert to project_process_steps" ON public.project_process_steps FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Allow authenticated update to project_process_steps" ON public.project_process_steps FOR UPDATE TO authenticated USING (true);
CREATE POLICY "Allow authenticated delete to project_process_steps" ON public.project_process_steps FOR DELETE TO authenticated USING (true);

-- 5. project_testimonials
CREATE POLICY "Allow public read access to project_testimonials" ON public.project_testimonials FOR SELECT USING (true);
CREATE POLICY "Allow authenticated insert to project_testimonials" ON public.project_testimonials FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Allow authenticated update to project_testimonials" ON public.project_testimonials FOR UPDATE TO authenticated USING (true);
CREATE POLICY "Allow authenticated delete to project_testimonials" ON public.project_testimonials FOR DELETE TO authenticated USING (true);
