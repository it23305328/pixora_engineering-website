import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
    return (
        <div className="bg-background text-on-background font-body-md overflow-x-hidden selection:bg-secondary-container selection:text-on-secondary-container">
            {/* TopNavBar */}
            <nav className="fixed top-0 w-full z-50 bg-surface/80 dark:bg-surface-dim/80 backdrop-blur-xl border-b border-outline-variant/20 shadow-sm">
                <div className="flex justify-between items-center h-16 px-gutter max-w-max-width mx-auto">
                    <Link to="/" className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed tracking-tight">PIXORA GROUP</Link>
                    <div className="hidden md:flex gap-8">
                        <Link className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant dark:text-on-tertiary-container hover:text-primary dark:hover:text-primary-fixed transition-colors active:scale-95" to="/">Home</Link>
                        <Link className="font-label-sm text-label-sm uppercase tracking-wider text-primary dark:text-primary-fixed border-b-2 border-secondary active:scale-95 transition-transform" to="/about">About</Link>
                        <Link className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant dark:text-on-tertiary-container hover:text-primary dark:hover:text-primary-fixed transition-colors active:scale-95" to="/solar-energy">Solar Energy</Link>
                        <Link className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant dark:text-on-tertiary-container hover:text-primary dark:hover:text-primary-fixed transition-colors active:scale-95" to="/construction">Construction</Link>
                        <Link className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant dark:text-on-tertiary-container hover:text-primary dark:hover:text-primary-fixed transition-colors active:scale-95" to="/elevators">Elevator Parts</Link>
                    </div>
                    <Link to="/projects" className="bg-primary text-on-primary font-label-sm text-label-sm uppercase tracking-wider h-12 px-6 rounded flex items-center justify-center hover:bg-surface-tint transition-all duration-300 active:scale-95 hidden md:flex">Get a Quote</Link>
                    <button className="md:hidden text-primary">
                        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>menu</span>
                    </button>
                </div>
            </nav>
            <main className="pt-16">
                {/* Cinematic Hero */}
                <section className="relative min-h-[819px] flex items-center justify-center px-margin-mobile md:px-margin-desktop py-20">
                    <div className="absolute inset-0 z-0">
                        <div className="bg-cover bg-center w-full h-full opacity-30" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDZmFIcdwZitVKH1r1Fdm2HbQ0txHK9wpKOIFs9vNjwdl-ejR9W5ZcdmqEOo2teEYAU-8FsJGrqBAW8IE08yEKMrWA3R_BfUiEbAlkqokbatcBDUiLRuw1o-4aHpT_Hp2RZtRiNgo3Tn87DgEoM0s-RbwmenUDMsjLWNLf1KshahqHF_XYy8LocrjPOfG1Q5xlEhRQ2uZIQ4ARcjDTGkj7IKx81Zv2Wmera0NKjuhMQ0eTEVUuyym-6nQ')" }}></div>
                        <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background"></div>
                    </div>
                    <div className="relative z-10 max-w-max-width mx-auto text-center space-y-8">
                        <h1 className="font-headline-xl text-headline-xl text-primary max-w-4xl mx-auto">Engineering With Purpose. Building for Tomorrow.</h1>
                        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">At PIXORA GROUP, we fuse technical precision with visionary sustainability to construct the infrastructure of the future. We are a collective of structural architects and energy innovators.</p>
                    </div>
                </section>

                {/* Who We Are (Split Layout) */}
                <section className="py-20 px-margin-mobile md:px-margin-desktop bg-surface-container-lowest">
                    <div className="max-w-max-width mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                            <h2 className="font-headline-lg text-headline-lg md:text-headline-lg text-primary">Who We Are</h2>
                            <div className="w-16 h-1 bg-secondary-container"></div>
                            <p className="font-body-lg text-body-lg text-on-surface-variant">We are a premier global engineering collective dedicated to pushing the boundaries of what's possible. Our multidisciplinary team approaches every project with a rigorous, analytical mindset, ensuring architectural integrity and operational efficiency.</p>
                            <p className="font-body-md text-body-md text-on-surface-variant">Founded on the principles of innovation and reliability, PIXORA GROUP has grown from a specialized civil firm into a comprehensive provider of sustainable energy solutions, structural engineering, and vertical mobility systems.</p>
                        </div>
                        <div className="relative h-[500px] rounded-lg overflow-hidden border border-outline-variant/20 bg-white/70 backdrop-blur-md">
                            <img className="object-cover w-full h-full mix-blend-multiply opacity-80" alt="Blueprint" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkFwvYkMETH7-BUd2KI3TtQCIPJt4SD87TjULKHdk_HDpEcVC80y0Kp3Koat5S4SCt31LzHZinm4FicTjhzHOZrpTntv5k5huBCkfs9SzMFw45seKMRIkkq6If4UrvKsMiNnYJqZcBddADecM8mItMMucbF9BkthB0-h6pFogAPTv-a1SFkmG5bQgjjY7oP_nnaY8dzIoM4Owx0gPgykSXZCzRX0S7NdpFZ18D7_9ndjuHwA6mf6kjqQ" />
                        </div>
                    </div>
                </section>

                {/* Our Story Timeline */}
                <section className="py-20 px-margin-mobile md:px-margin-desktop bg-surface">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-16 space-y-4">
                            <h2 className="font-headline-md text-headline-md text-primary">Our Story</h2>
                            <p className="font-body-md text-body-md text-on-surface-variant">A legacy of continuous innovation and structural evolution.</p>
                        </div>
                        <div className="relative border-l border-outline-variant/30 ml-4 md:ml-1/2 space-y-12 pb-8">
                            {/* Timeline Item 1 */}
                            <div className="relative pl-8 md:pl-0">
                                <div className="absolute -left-[5px] md:left-1/2 md:-ml-[5px] top-1 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-background"></div>
                                <div className="md:w-1/2 md:pr-12 md:text-right">
                                    <span className="font-label-sm text-label-sm text-secondary tracking-widest uppercase">2010</span>
                                    <h3 className="font-headline-md text-headline-md text-primary-fixed-variant mt-2 mb-2 text-xl">Foundation</h3>
                                    <p className="font-body-md text-body-md text-on-surface-variant text-sm">Established as a boutique civil engineering firm focused on complex structural analyses.</p>
                                </div>
                            </div>
                            {/* Timeline Item 2 */}
                            <div className="relative pl-8 md:pl-0">
                                <div className="absolute -left-[5px] md:left-1/2 md:-ml-[5px] top-1 w-2.5 h-2.5 rounded-full bg-secondary-container ring-4 ring-background"></div>
                                <div className="md:w-1/2 md:ml-auto md:pl-12">
                                    <span className="font-label-sm text-label-sm text-secondary tracking-widest uppercase">2015</span>
                                    <h3 className="font-headline-md text-headline-md text-primary-fixed-variant mt-2 mb-2 text-xl">Vertical Expansion</h3>
                                    <p className="font-body-md text-body-md text-on-surface-variant text-sm">Launched our Vertical Mobility division, pioneering highly efficient elevator part manufacturing.</p>
                                </div>
                            </div>
                            {/* Timeline Item 3 */}
                            <div className="relative pl-8 md:pl-0">
                                <div className="absolute -left-[5px] md:left-1/2 md:-ml-[5px] top-1 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-background"></div>
                                <div className="md:w-1/2 md:pr-12 md:text-right">
                                    <span className="font-label-sm text-label-sm text-secondary tracking-widest uppercase">2020</span>
                                    <h3 className="font-headline-md text-headline-md text-primary-fixed-variant mt-2 mb-2 text-xl">Sustainable Pivot</h3>
                                    <p className="font-body-md text-body-md text-on-surface-variant text-sm">Integrated Solar Energy solutions into our core offerings, aligning with global green initiatives.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Vision & Mission */}
                <section className="py-20 px-margin-mobile md:px-margin-desktop bg-surface-container-lowest border-y border-outline-variant/20">
                    <div className="max-w-max-width mx-auto grid grid-cols-1 md:grid-cols-2 gap-gutter">
                        <div className="bg-white/70 backdrop-blur-md p-12 rounded-lg relative overflow-hidden group border border-outline-variant/20">
                            <div className="absolute top-0 right-0 p-6 opacity-10 transform group-hover:scale-110 transition-transform duration-500">
                                <span className="material-symbols-outlined text-8xl">visibility</span>
                            </div>
                            <h3 className="font-headline-md text-headline-md text-primary mb-4">Our Vision</h3>
                            <p className="font-body-lg text-body-lg text-on-surface-variant relative z-10">To be the global vanguard of engineering, where technical mastery meets ecological responsibility, creating a built environment that thrives in harmony with nature.</p>
                        </div>
                        <div className="bg-white/70 backdrop-blur-md p-12 rounded-lg relative overflow-hidden group border border-outline-variant/20">
                            <div className="absolute top-0 right-0 p-6 opacity-10 transform group-hover:scale-110 transition-transform duration-500">
                                <span className="material-symbols-outlined text-8xl">flag</span>
                            </div>
                            <h3 className="font-headline-md text-headline-md text-primary mb-4">Our Mission</h3>
                            <p className="font-body-lg text-body-lg text-on-surface-variant relative z-10">To deliver uncompromising structural integrity, innovative energy solutions, and precision-engineered mobility systems through rigorous analysis and sustainable practices.</p>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24 px-margin-mobile md:px-margin-desktop bg-primary-container text-on-primary-container">
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <h2 className="font-headline-lg text-headline-lg text-surface-container-lowest">Let's Build the Future Together.</h2>
                        <p className="font-body-lg text-body-lg text-inverse-primary/80">Partner with PIXORA GROUP for technical precision and visionary sustainability.</p>
                        <div className="pt-8">
                            <Link to="/projects" className="bg-secondary-container text-on-secondary-container font-label-sm text-label-sm uppercase tracking-wider h-14 px-8 rounded hover:bg-secondary-fixed transition-all duration-300 inline-flex items-center justify-center">Contact Our Experts</Link>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="w-full py-16 bg-primary-container dark:bg-tertiary-container border-t border-outline-variant/10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter px-gutter max-w-max-width mx-auto">
                    <div className="font-headline-md text-headline-md font-bold text-surface-container-lowest mb-8 md:mb-0">PIXORA GROUP</div>
                    <div className="flex flex-col space-y-4">
                        <Link className="font-body-md text-body-md text-on-primary-container/80 dark:text-on-tertiary-container/80 hover:text-secondary-fixed transition-colors hover:translate-x-1 cursor-pointer w-fit" to="/solar-energy">Solar Solutions</Link>
                        <Link className="font-body-md text-body-md text-on-primary-container/80 dark:text-on-tertiary-container/80 hover:text-secondary-fixed transition-colors hover:translate-x-1 cursor-pointer w-fit" to="/construction">Civil Construction</Link>
                        <Link className="font-body-md text-body-md text-on-primary-container/80 dark:text-on-tertiary-container/80 hover:text-secondary-fixed transition-colors hover:translate-x-1 cursor-pointer w-fit" to="/elevators">Vertical Mobility</Link>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <Link className="font-body-md text-body-md text-on-primary-container/80 dark:text-on-tertiary-container/80 hover:text-secondary-fixed transition-colors hover:translate-x-1 cursor-pointer w-fit" to="#">Privacy Policy</Link>
                        <Link className="font-body-md text-body-md text-on-primary-container/80 dark:text-on-tertiary-container/80 hover:text-secondary-fixed transition-colors hover:translate-x-1 cursor-pointer w-fit" to="#">Terms of Service</Link>
                        <p className="font-body-md text-body-md text-on-primary-container/50 mt-8">© 2024 PIXORA GROUP Collective. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default AboutUs;
