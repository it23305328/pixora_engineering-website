import React from 'react';
import Navbar from '../components/layout/Navbar';
import { Link } from 'react-router-dom';
import RecentProjects from '../components/common/RecentProjects';

const Construction = () => {
    return (
        <div className="bg-background text-on-background font-body-md antialiased selection:bg-secondary-container selection:text-on-secondary-container">
            {/* Navigation */}
            <Navbar />
            <main>
                {/* Hero Section */}
                <section className="relative min-h-[819px] flex items-center pt-24 pb-16">
                    <div className="absolute inset-0 z-0">
                        <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDcbgnGVFBY2YmjMWkHDkT183f7_vYeZV_bitBRz1_yOw0wOal16jKrjZ-FbtAMq2BOZVzNxkxueylOk1oPD4E4eGFBPjoXyxKAVmDllHQgS3bgfaSW9J9O-48I7FgFCfgu5wYlMJ5VM9U33zc9SPCVpjx2w_tBMECQIBkQ5srXzfJGPo9CVfJbs71RuWGy-Ixt111gwHWoBhtceQ9tEaYNgwix7rzq_SvDX6AtgM9oMRQQOmrsGGlBBg')" }}></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
                    </div>
                    <div className="relative z-10 w-full px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
                        <div className="max-w-2xl">
                            <nav className="mb-8 flex items-center text-on-surface-variant font-label-sm text-label-sm uppercase tracking-widest space-x-2">
                                <Link className="hover:text-primary transition-colors" to="/">Home</Link>
                                <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                                <span className="hover:text-primary transition-colors">Services</span>
                                <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                                <span className="text-primary font-bold">Construction</span>
                            </nav>
                            <h1 className="font-headline-xl text-headline-xl text-primary mb-6">Built With Precision.<br />Designed to Last.</h1>
                            <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-xl">Reliable construction and engineering solutions delivered with quality, precision and attention to detail.</p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link to="/projects" className="bg-primary text-on-primary font-label-sm text-label-sm h-14 px-8 rounded flex items-center justify-center hover:bg-inverse-surface transition-colors">Start a Project</Link>
                                <Link to="/projects" className="bg-transparent border border-outline text-primary font-label-sm text-label-sm h-14 px-8 rounded flex items-center justify-center hover:bg-surface-container transition-colors">View Our Projects</Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Introduction Bento */}
                <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
                        <div className="md:col-span-5 flex flex-col justify-center">
                            <h2 className="font-headline-lg text-headline-lg text-primary mb-6">Turning Plans Into Reality</h2>
                            <p className="font-body-md text-body-md text-on-surface-variant mb-8">At PIXORA GROUP, we bridge the gap between visionary design and structural reality. Our approach integrates rigorous engineering principles with cutting-edge construction methodologies, ensuring every project meets the highest standards of safety, quality, and durability.</p>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded bg-surface-container flex items-center justify-center shrink-0">
                                        <span className="material-symbols-outlined text-primary">architecture</span>
                                    </div>
                                    <div>
                                        <h4 className="font-label-sm text-label-sm text-primary mb-1">Precision Engineering</h4>
                                        <p className="font-body-md text-body-md text-on-surface-variant text-sm">Advanced structural analysis and smart planning.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded bg-surface-container flex items-center justify-center shrink-0">
                                        <span className="material-symbols-outlined text-primary">verified_user</span>
                                    </div>
                                    <div>
                                        <h4 className="font-label-sm text-label-sm text-primary mb-1">Uncompromising Safety</h4>
                                        <p className="font-body-md text-body-md text-on-surface-variant text-sm">Rigorous protocols exceeding industry standards.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:col-span-7 h-[500px] relative rounded overflow-hidden group">
                            <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2gvEdDqwP6KAGTHoZD0PphCEsayRifTMElqzh4K33iLIoVL5Vm5cb8pUjFZr86tH4nLtD1D6Oax7vT0iEptaAk_0-vx49h6_52RU6lF-WI3_zN5bTNV2INciUDsRNVoMCYS5tMi6_0-EleqxpWyeOu8ON9K69J_WvwNgJHRXEAoHwLNhCTbA9lf1U4k5w-wm_8kzHeWLS9P9qm8ykUCGSJTqtJsicr4dErJg-8OCdrewH_rwsIDyJ9g" alt="Blueprint" />
                            <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-700"></div>
                            <div className="absolute bottom-6 left-6 right-6 bg-white/70 backdrop-blur-md p-6 rounded flex justify-between items-end border border-outline-variant/20">
                                <div>
                                    <div className="font-headline-md text-headline-md text-primary">150+</div>
                                    <div className="font-label-sm text-label-sm text-on-surface-variant">Projects Completed</div>
                                </div>
                                <div className="text-right">
                                    <div className="font-headline-md text-headline-md text-primary">25Yrs</div>
                                    <div className="font-label-sm text-label-sm text-on-surface-variant">Engineering Excellence</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Vision Section */}
                <section className="bg-surface-container-low py-24">
                    <div className="px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter items-center">
                            <div>
                                <h2 className="font-headline-lg text-headline-lg text-primary mb-6">Our Vision</h2>
                                <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">We envision a future where engineering and construction seamlessly blend to create sustainable, resilient structures that endure for generations.</p>
                                <p className="font-body-md text-body-md text-on-surface-variant">We strive to be at the forefront of innovation, continually refining our processes and embracing new technologies to deliver unparalleled results for our clients.</p>
                            </div>
                            <div className="h-[400px] rounded overflow-hidden">
                                <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuACsPLTG1D6L1UTb2B6iw8W_R2DKOkhNlZXE1NmnnntUwvxLZ6IeXYWc-NoTF8TD_U4e81Z3hBKfYZeB_LjajuaB4C61-LlvWDjC5ghVWkFOYiY1hbLuw9SG_GYkGdQ45VXoE1emeqxYVXaJgGSm0cgebpdaXxp3mclaYkO3lyTzHxlpfeL9hl5DExdF1sTK2uCI3Vb3NMfhiBUoZD1o2tmZSqzBZ11M7Wx-A-7E4o--TKZj4Y05Nx-sA" alt="Vision" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our Approach */}
                <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
                    <h2 className="font-headline-lg text-headline-lg text-primary text-center mb-16">Our Approach</h2>
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center relative">
                        <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-outline-variant/30 -z-10 -translate-y-1/2"></div>
                        {/* Step 1 */}
                        <div className="flex flex-col items-center bg-background py-4 px-2 text-center w-full md:w-1/5 relative z-10 mb-8 md:mb-0">
                            <div className="w-12 h-12 rounded-full bg-primary text-on-primary flex items-center justify-center font-headline-md mb-4 border-4 border-background">1</div>
                            <h4 className="font-label-sm text-label-sm text-primary mb-2">Discover</h4>
                            <p className="font-body-md text-body-md text-on-surface-variant text-sm">Understanding requirements.</p>
                        </div>
                        {/* Step 2 */}
                        <div className="flex flex-col items-center bg-background py-4 px-2 text-center w-full md:w-1/5 relative z-10 mb-8 md:mb-0">
                            <div className="w-12 h-12 rounded-full bg-surface-container text-primary flex items-center justify-center font-headline-md mb-4 border-4 border-background">2</div>
                            <h4 className="font-label-sm text-label-sm text-primary mb-2">Plan</h4>
                            <p className="font-body-md text-body-md text-on-surface-variant text-sm">Detailed project mapping.</p>
                        </div>
                        {/* Step 3 */}
                        <div className="flex flex-col items-center bg-background py-4 px-2 text-center w-full md:w-1/5 relative z-10 mb-8 md:mb-0">
                            <div className="w-12 h-12 rounded-full bg-surface-container text-primary flex items-center justify-center font-headline-md mb-4 border-4 border-background">3</div>
                            <h4 className="font-label-sm text-label-sm text-primary mb-2">Design</h4>
                            <p className="font-body-md text-body-md text-on-surface-variant text-sm">Engineering blueprints.</p>
                        </div>
                        {/* Step 4 */}
                        <div className="flex flex-col items-center bg-background py-4 px-2 text-center w-full md:w-1/5 relative z-10 mb-8 md:mb-0">
                            <div className="w-12 h-12 rounded-full bg-surface-container text-primary flex items-center justify-center font-headline-md mb-4 border-4 border-background">4</div>
                            <h4 className="font-label-sm text-label-sm text-primary mb-2">Deliver</h4>
                            <p className="font-body-md text-body-md text-on-surface-variant text-sm">Precision construction.</p>
                        </div>
                        {/* Step 5 */}
                        <div className="flex flex-col items-center bg-background py-4 px-2 text-center w-full md:w-1/5 relative z-10">
                            <div className="w-12 h-12 rounded-full bg-surface-container text-primary flex items-center justify-center font-headline-md mb-4 border-4 border-background">5</div>
                            <h4 className="font-label-sm text-label-sm text-primary mb-2">Support</h4>
                            <p className="font-body-md text-body-md text-on-surface-variant text-sm">Ongoing maintenance.</p>
                        </div>
                    </div>
                </section>

                {/* Engineering & Expertise */}
                <section className="bg-surface-container-low py-24">
                    <div className="px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
                        <h2 className="font-headline-lg text-headline-lg text-primary text-center mb-16">Engineering &amp; Expertise</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
                            <div className="bg-surface p-8 rounded border border-outline-variant/30 hover:border-primary transition-colors group">
                                <span className="material-symbols-outlined text-4xl text-primary mb-6 group-hover:scale-110 transition-transform">architecture</span>
                                <h3 className="font-label-sm text-label-sm text-primary mb-3">Planning</h3>
                                <p className="font-body-md text-body-md text-on-surface-variant">Strategic foresight and meticulous site preparation.</p>
                            </div>
                            <div className="bg-surface p-8 rounded border border-outline-variant/30 hover:border-primary transition-colors group">
                                <span className="material-symbols-outlined text-4xl text-primary mb-6 group-hover:scale-110 transition-transform">foundation</span>
                                <h3 className="font-label-sm text-label-sm text-primary mb-3">Structural Solutions</h3>
                                <p className="font-body-md text-body-md text-on-surface-variant">Robust frameworks built for maximum endurance.</p>
                            </div>
                            <div className="bg-surface p-8 rounded border border-outline-variant/30 hover:border-primary transition-colors group">
                                <span className="material-symbols-outlined text-4xl text-primary mb-6 group-hover:scale-110 transition-transform">construction</span>
                                <h3 className="font-label-sm text-label-sm text-primary mb-3">Construction Management</h3>
                                <p className="font-body-md text-body-md text-on-surface-variant">Efficient oversight from groundbreaking to completion.</p>
                            </div>
                            <div className="bg-surface p-8 rounded border border-outline-variant/30 hover:border-primary transition-colors group">
                                <span className="material-symbols-outlined text-4xl text-primary mb-6 group-hover:scale-110 transition-transform">fact_check</span>
                                <h3 className="font-label-sm text-label-sm text-primary mb-3">Quality Control</h3>
                                <p className="font-body-md text-body-md text-on-surface-variant">Rigorous testing at every stage of development.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Recent Projects */}
                <RecentProjects category="construction" />

                {/* Why Choose Us */}
                <section className="bg-surface-container-low py-24">
                    <div className="px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto text-center">
                        <h2 className="font-headline-lg text-headline-lg text-primary mb-6">Why Choose Us</h2>
                        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">Decades of experience, unwavering commitment to safety, and a track record of delivering complex projects on time and within budget.</p>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
                    <h2 className="font-headline-lg text-headline-lg text-primary text-center mb-12">Frequently Asked Questions</h2>
                    <div className="max-w-3xl mx-auto space-y-4">
                        <details className="group bg-surface-container-low rounded">
                            <summary className="flex justify-between items-center font-label-sm text-label-sm text-primary cursor-pointer p-6 list-none">
                                What safety standards do you adhere to?
                                <span className="material-symbols-outlined transition duration-300 group-open:rotate-180">expand_more</span>
                            </summary>
                            <div className="p-6 pt-0 font-body-md text-body-md text-on-surface-variant">
                                We strictly adhere to all OSHA regulations and implement proprietary safety protocols that exceed standard industry requirements. Safety is our foundational priority on every site.
                            </div>
                        </details>
                        <details className="group bg-surface-container-low rounded">
                            <summary className="flex justify-between items-center font-label-sm text-label-sm text-primary cursor-pointer p-6 list-none">
                                How do you handle unexpected project delays?
                                <span className="material-symbols-outlined transition duration-300 group-open:rotate-180">expand_more</span>
                            </summary>
                            <div className="p-6 pt-0 font-body-md text-body-md text-on-surface-variant">
                                Our dynamic project management systems allow for rapid recalibration. We build buffer times into our initial estimates and maintain open communication with stakeholders to mitigate impacts.
                            </div>
                        </details>
                        <details className="group bg-surface-container-low rounded">
                            <summary className="flex justify-between items-center font-label-sm text-label-sm text-primary cursor-pointer p-6 list-none">
                                Do you integrate sustainable practices in construction?
                                <span className="material-symbols-outlined transition duration-300 group-open:rotate-180">expand_more</span>
                            </summary>
                            <div className="p-6 pt-0 font-body-md text-body-md text-on-surface-variant">
                                Yes, we prioritize sustainable material sourcing, energy-efficient designs, and waste reduction strategies on all projects, aiming for LEED certification whenever possible.
                            </div>
                        </details>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="bg-primary text-on-primary py-24">
                    <div className="px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto text-center">
                        <h2 className="font-headline-lg text-headline-lg mb-6">Have a Project in Mind?</h2>
                        <p className="font-body-lg text-body-lg text-on-primary/80 mb-10 max-w-2xl mx-auto">Let's discuss how our engineering expertise can bring your vision to life. Precision built, designed to last.</p>
                        <Link to="/projects" className="bg-secondary-container text-on-secondary-container font-label-sm text-label-sm h-14 px-10 rounded hover:bg-secondary-fixed transition-colors flex items-center justify-center w-max mx-auto">Discuss Your Project</Link>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-primary dark:bg-tertiary-container font-headline-sm text-headline-sm font-body-md text-body-md full-width py-12 md:py-20 border-t border-outline-variant/10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
                    <div className="md:col-span-1">
                        <Link to="/" className="font-headline-md text-headline-md font-bold text-secondary-fixed tracking-tight mb-6 block">PIXORA GROUP</Link>
                        <p className="font-body-md text-body-md text-on-primary/70 dark:text-on-tertiary/70 mb-4">© 2024 PIXORA GROUP Collective. All rights reserved. Engineering Excellence for a Sustainable Future.</p>
                    </div>
                    <div className="md:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-8">
                        <div>
                            <h4 className="font-label-sm text-label-sm text-secondary-fixed mb-4">Services</h4>
                            <ul className="space-y-3 font-body-md text-body-md">
                                <li><Link className="text-on-primary/70 dark:text-on-tertiary/70 hover:text-secondary-fixed transition-colors hover:translate-x-1 transition-transform duration-200 block cursor-pointer" to="/solar-energy">Solar Solutions</Link></li>
                                <li><Link className="dark:text-on-tertiary/70 hover:text-secondary-fixed transition-colors hover:translate-x-1 transition-transform duration-200 block cursor-pointer text-secondary-fixed font-bold" to="/construction">Civil Construction</Link></li>
                                <li><Link className="text-on-primary/70 dark:text-on-tertiary/70 hover:text-secondary-fixed transition-colors hover:translate-x-1 transition-transform duration-200 block cursor-pointer" to="/elevators">Vertical Mobility</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-label-sm text-label-sm text-secondary-fixed mb-4">Legal</h4>
                            <ul className="space-y-3 font-body-md text-body-md">
                                <li><Link className="text-on-primary/70 dark:text-on-tertiary/70 hover:text-secondary-fixed transition-colors hover:translate-x-1 transition-transform duration-200 block cursor-pointer" to="#">Privacy Policy</Link></li>
                                <li><Link className="text-on-primary/70 dark:text-on-tertiary/70 hover:text-secondary-fixed transition-colors hover:translate-x-1 transition-transform duration-200 block cursor-pointer" to="#">Terms of Service</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-label-sm text-label-sm text-secondary-fixed mb-4">Support</h4>
                            <ul className="space-y-3 font-body-md text-body-md">
                                <li><Link className="text-on-primary/70 dark:text-on-tertiary/70 hover:text-secondary-fixed transition-colors hover:translate-x-1 transition-transform duration-200 block cursor-pointer" to="#">Contact Support</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Construction;

