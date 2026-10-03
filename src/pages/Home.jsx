import React from 'react';
import Navbar from '../components/layout/Navbar';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="bg-surface text-on-surface font-body-md antialiased selection:bg-secondary-fixed selection:text-on-secondary-fixed">
            {/* TopNavBar */}
            <Navbar />

            <main>
                {/* Hero Section */}
                <section className="relative w-full h-[90vh] min-h-[600px] flex items-center justify-center">
                    <div className="absolute inset-0 w-full h-full bg-primary/40 z-10"></div>
                    <div className="absolute inset-0 w-full h-full bg-cover bg-center z-0" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC8-hrpcWYseJaru8Eev5M61-V7KuD0xSNMmAHb6VMbNWYxH34Jz0fYDp8qPhnM0tmUSWzzc_UQ2vGyP8PbzVfzB8sVQo0Ry5KrLSbFO8v_DXtfdAM6TFy3eargRn7G5-E9PiSaFrT-GXeLS8ivqoR13jXGaPcUSn3aw1kqB4yESFJIWYQ_WMYVr8ayfEWLW2Oc76mZV4nWU3u7b_mnGlijBMfem1Z8ew_xKll8tcRMmbY0rFJ10mF6ww')" }}></div>
                    <div className="relative z-20 text-center px-margin-mobile md:px-margin-desktop max-w-4xl mx-auto flex flex-col items-center">
                        <h1 className="font-headline-xl text-headline-xl text-on-primary mb-6 drop-shadow-lg">
                            Engineering Solutions Built for Tomorrow
                        </h1>
                        <p className="font-body-lg text-body-lg text-on-primary/90 mb-10 max-w-2xl font-medium tracking-wide">
                            Solar Energy • Construction • Elevator Solutions
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 mb-16">
                            <Link to="/projects" className="bg-secondary-container text-on-secondary-container px-8 py-4 rounded font-label-sm text-label-sm hover:-translate-y-1 transition-transform duration-300 shadow-lg">
                                Request a Quote
                            </Link>
                            <Link to="/projects" className="bg-surface/20 backdrop-blur-md border border-on-primary/30 text-on-primary px-8 py-4 rounded font-label-sm text-label-sm hover:bg-surface/30 transition-colors duration-300">
                                Explore Our Services
                            </Link>
                        </div>
                        <div className="grid grid-cols-3 gap-8 md:gap-16 w-full max-w-3xl border-t border-on-primary/20 pt-8 backdrop-blur-sm rounded-lg p-6 bg-primary/20">
                            <div className="text-center">
                                <div className="font-headline-md text-headline-md text-secondary-fixed mb-1">10+</div>
                                <div className="font-label-sm text-label-sm text-on-primary/80 uppercase tracking-wider">Years Experience</div>
                            </div>
                            <div className="text-center border-l border-r border-on-primary/20">
                                <div className="font-headline-md text-headline-md text-secondary-fixed mb-1">150+</div>
                                <div className="font-label-sm text-label-sm text-on-primary/80 uppercase tracking-wider">Projects</div>
                            </div>
                            <div className="text-center">
                                <div className="font-headline-md text-headline-md text-secondary-fixed mb-1">50+</div>
                                <div className="font-label-sm text-label-sm text-on-primary/80 uppercase tracking-wider">Clients</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Engineering With Purpose */}
                <section className="py-24 md:py-32 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto bg-surface cad-grid-light" id="about">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                        <div className="lg:col-span-6 space-y-6">
                            <div className="inline-flex items-center gap-2 text-secondary font-label-sm text-xs uppercase tracking-widest font-bold">
                                <span className="w-6 h-0.5 bg-engineering-gold"></span>
                                ABOUT PIXORA GROUP
                            </div>
                            <h2 className="font-headline-lg text-3xl md:text-headline-lg text-primary tracking-tight font-bold">
                                Engineering With Purpose.
                            </h2>
                            <div className="w-20 h-1 bg-engineering-gold"></div>
                            <p className="font-body-lg text-on-surface-variant text-body-lg leading-relaxed">
                                PIXORA GROUP delivers practical and reliable solutions across renewable energy, construction, and elevator systems, combining technical expertise with modern engineering practices.
                            </p>
                            <p className="font-body-md text-on-surface-variant/90 leading-relaxed">
                                From high-yield commercial solar infrastructure and resilient civil frameworks to intelligent vertical transportation systems, our interdisciplinary teams leverage computational modeling and precision manufacturing to solve critical urban challenges.
                            </p>
                            <div className="pt-4 flex items-center gap-6">
                                <Link className="inline-flex items-center gap-2 text-primary font-label-sm text-label-sm uppercase font-bold tracking-wider hover:text-secondary group transition-colors" to="/about">
                                    <span>Learn More About Apex</span>
                                    <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                </Link>
                                <span className="text-outline-variant">|</span>
                                <span className="font-mono text-xs text-on-surface-variant">EST. 2014 • COLOMBO HQ</span>
                            </div>
                        </div>
                        <div className="lg:col-span-6 relative">
                            <div className="relative rounded-lg overflow-hidden border border-outline-variant/40 shadow-xl bg-surface-container-lowest">
                                <img alt="Architectural engineering blueprints" className="w-full h-[460px] object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkFwvYkMETH7-BUd2KI3TtQCIPJt4SD87TjULKHdk_HDpEcVC80y0Kp3Koat5S4SCt31LzHZinm4FicTjhzHOZrpTntv5k5huBCkfs9SzMFw45seKMRIkkq6If4UrvKsMiNnYJqZcBddADecM8mItMMucbF9BkthB0-h6pFogAPTv-a1SFkmG5bQgjjY7oP_nnaY8dzIoM4Owx0gPgykSXZCzRX0S7NdpFZ18D7_9ndjuHwA6mf6kjqQ" />
                                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent p-6 text-on-primary">
                                    <div className="font-mono text-xs text-engineering-gold">[CAD SIMULATION &amp; QUALITY METRICS]</div>
                                    <div className="font-headline-md text-lg text-white font-semibold">Computational Analysis &amp; Field Execution</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our Solutions */}
                <section className="py-24 md:py-32 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <div className="inline-flex items-center gap-2 text-secondary font-label-sm text-xs uppercase tracking-widest font-bold mb-3">
                            <span className="w-6 h-0.5 bg-engineering-gold"></span>
                            CORE DISCIPLINES
                            <span className="w-6 h-0.5 bg-engineering-gold"></span>
                        </div>
                        <h2 className="font-headline-lg text-3xl md:text-headline-lg text-primary mb-4 font-bold">Our Engineering Solutions</h2>
                        <div className="w-16 h-1 bg-engineering-gold mx-auto mb-6"></div>
                        <p className="font-body-lg text-body-lg text-on-surface-variant">
                            Integrated solutions designed for performance, reliability, and long-term value across three critical infrastructure sectors.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <Link to="/solar-energy" className="group relative h-[440px] rounded-lg overflow-hidden cursor-pointer border border-outline-variant/30 shadow-md hover:shadow-2xl transition-all duration-500">
                            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDNGiE9a3UQKztkUuHL9-MMQp2PZgQBwgadbGpc-GADMaTVjyTN6KjvnO7pLgDuUSmSYBxNNKn8tmOjx68OZ_q4QrBQHPIj7mg8P7tfX0baLw4TCWiBmUjr6Zmm1HsWafOScxng5hJehjVzRyCj9sjpEDS3Tf63Gsw3Jhwj8TUj271nIMiU0MtMkELTFtIE7XeiQNNk3H0Qk7q7uGN5Rb0pFECbiNA3Sbsc-8m8s7m_TThXSoXbiVBaSA')" }}></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-primary-dark-navy via-primary/60 to-primary/20"></div>

                            <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col h-full justify-end">
                                <span className="material-symbols-outlined text-engineering-gold text-4xl mb-3">solar_power</span>
                                <h3 className="font-headline-md text-2xl text-on-primary mb-2 font-bold group-hover:text-engineering-gold transition-colors">Solar Energy</h3>
                                <p className="font-body-md text-sm text-white/80 mb-4">High-capacity commercial arrays, BIPV systems, and utility-scale solar generation with smart string monitoring.</p>
                                <div className="flex items-center gap-2 text-engineering-gold font-label-sm text-xs uppercase tracking-wider font-semibold">
                                    <span>Discover Solutions</span>
                                    <span className="material-symbols-outlined text-sm group-hover:translate-x-2 transition-transform duration-300">arrow_forward</span>
                                </div>
                            </div>
                        </Link>
                        {/* Card 2 */}
                        <Link to="/construction" className="group relative h-[440px] rounded-lg overflow-hidden cursor-pointer border border-outline-variant/30 shadow-md hover:shadow-2xl transition-all duration-500">
                            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDnwYyy6wh4muzucOfJQkCdA8LaIIZlyOTdkpGolRfOyyzucJOf4drIbzWyZDwTie9zPf3qoVGNX9iga0OckKsmKx7RKvikPAa47lF89W-LJWG-Ue9lhFBr5P33rQnUVnxz-fw4gOyZptFHlIIE6bnLNgtdSd-Kobk7dQlSfe7DDk1xrvq0y96NVxuYzYxM4U6_uAW3gEebu-W2P6jXtr1KLUGckLrSBByMAw8HuN6ipNOQruYz6CLJWQ')" }}></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-primary-dark-navy via-primary/60 to-primary/20"></div>

                            <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col h-full justify-end">
                                <span className="material-symbols-outlined text-engineering-gold text-4xl mb-3">architecture</span>
                                <h3 className="font-headline-md text-2xl text-on-primary mb-2 font-bold group-hover:text-engineering-gold transition-colors">Construction</h3>
                                <p className="font-body-md text-sm text-white/80 mb-4">Civil structural frameworks, seismic-rated reinforcements, and complex commercial mega-project turnkey execution.</p>
                                <div className="flex items-center gap-2 text-engineering-gold font-label-sm text-xs uppercase tracking-wider font-semibold">
                                    <span>Discover Solutions</span>
                                    <span className="material-symbols-outlined text-sm group-hover:translate-x-2 transition-transform duration-300">arrow_forward</span>
                                </div>
                            </div>
                        </Link>
                        {/* Card 3 */}
                        <Link to="/elevators" className="group relative h-[440px] rounded-lg overflow-hidden cursor-pointer border border-outline-variant/30 shadow-md hover:shadow-2xl transition-all duration-500">
                            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCtCvsKm-R4_MXSDmqdGi2HJKjsDrA7q9Fdwj3OvOroTyD8d4gmG3naccZRJvooBHhln7PawdzDe4NuQoyYleKwe_x-Vq3vXaMfXivgysGQ0dVYosvl8ipIQzH5E_61DCS42r5tkHAjL4fNbNCKHLzAgnnkcSUllIORg7L7caebHhFz1S0h1BveNF_USA0WajNan575bd5JGD1d-lViIJqykLrwearkK3nedL5-KAZgrS8ffzxl62TkJw')" }}></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-primary-dark-navy via-primary/60 to-primary/20"></div>

                            <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col h-full justify-end">
                                <span className="material-symbols-outlined text-engineering-gold text-4xl mb-3">elevator</span>
                                <h3 className="font-headline-md text-2xl text-on-primary mb-2 font-bold group-hover:text-engineering-gold transition-colors">Elevator Solutions</h3>
                                <p className="font-body-md text-sm text-white/80 mb-4">High-speed vertical mobility, micro-engineered traction components, precision control logic, and retrofit maintenance.</p>
                                <div className="flex items-center gap-2 text-engineering-gold font-label-sm text-xs uppercase tracking-wider font-semibold">
                                    <span>Discover Solutions</span>
                                    <span className="material-symbols-outlined text-sm group-hover:translate-x-2 transition-transform duration-300">arrow_forward</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </section>

                {/* What Our Clients Say */}
                <section className="py-24 md:py-32 bg-surface-container-low border-b border-outline-variant/30">
                    <div className="px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <div className="inline-flex items-center gap-2 text-secondary font-label-sm text-xs uppercase tracking-widest font-bold mb-3">
                                <span className="w-6 h-0.5 bg-engineering-gold"></span>
                                ENDORSEMENTS
                                <span className="w-6 h-0.5 bg-engineering-gold"></span>
                            </div>
                            <h2 className="font-headline-lg text-3xl md:text-headline-lg font-bold text-primary mb-4">What Our Clients Say</h2>
                            <div className="w-16 h-1 bg-engineering-gold mx-auto mb-6"></div>
                            <p className="font-body-lg text-on-surface-variant">Voices from our institutional, utility, and commercial property partners.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Testimonial 1 */}
                            <div className="bg-white p-8 rounded-lg border border-outline-variant/40 shadow-sm relative flex flex-col justify-between">
                                <div>
                                    <span className="text-5xl font-serif text-engineering-gold leading-none select-none">“</span>
                                    <p className="font-body-md text-sm text-on-surface-variant leading-relaxed mt-2 mb-6">
                                        The high-speed elevator retrofit at our Colombo commercial tower was handled with absolute precision. Despite 24/7 building occupancy, Apex maintained seamless scheduling with zero downtime incidents.
                                    </p>
                                </div>
                                <div className="pt-4 border-t border-outline-variant/20">
                                    <div className="font-headline-md text-sm font-bold text-primary">Ranil Wickremasinghe</div>
                                    <div className="font-mono text-xs text-secondary">Commercial Real Estate Director, Altura Properties</div>
                                </div>
                            </div>
                            {/* Testimonial 2 */}
                            <div className="bg-white p-8 rounded-lg border border-outline-variant/40 shadow-sm relative flex flex-col justify-between">
                                <div>
                                    <span className="text-5xl font-serif text-engineering-gold leading-none select-none">“</span>
                                    <p className="font-body-md text-sm text-on-surface-variant leading-relaxed mt-2 mb-6">
                                        Commissioning our 12.5MW utility solar farm ahead of the statutory monsoon deadline was a monumental achievement. Apex’s balance-of-plant electrical engineering proved flawless from day one.
                                    </p>
                                </div>
                                <div className="pt-4 border-t border-outline-variant/20">
                                    <div className="font-headline-md text-sm font-bold text-primary">Dr. Malik Samarasinghe</div>
                                    <div className="font-mono text-xs text-secondary">Renewable Consortium Lead, CleanGrid Lanka</div>
                                </div>
                            </div>
                            {/* Testimonial 3 */}
                            <div className="bg-white p-8 rounded-lg border border-outline-variant/40 shadow-sm relative flex flex-col justify-between">
                                <div>
                                    <span className="text-5xl font-serif text-engineering-gold leading-none select-none">“</span>
                                    <p className="font-body-md text-sm text-on-surface-variant leading-relaxed mt-2 mb-6">
                                        When complex urban soil conditions threatened to delay our civic bridge access ramps, Apex’s structural engineering team redesigned the piling matrix within 72 hours. Outstanding competency.
                                    </p>
                                </div>
                                <div className="pt-4 border-t border-outline-variant/20">
                                    <div className="font-headline-md text-sm font-bold text-primary">Anura Senanayake</div>
                                    <div className="font-mono text-xs text-secondary">Chief Engineer, Municipal Infrastructure Board</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Latest From Apex */}
                <section className="py-24 md:py-32 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto" id="insights">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                        <div>
                            <div className="inline-flex items-center gap-2 text-secondary font-label-sm text-xs uppercase tracking-widest font-bold mb-2">
                                <span className="w-6 h-0.5 bg-engineering-gold"></span>
                                KNOWLEDGE BASE
                            </div>
                            <h2 className="font-headline-lg text-3xl md:text-headline-lg font-bold text-primary">Latest From Apex</h2>
                            <p className="font-body-lg text-on-surface-variant max-w-xl mt-2">Engineering insights, project dispatches, and technical analyses from our lead specialists.</p>
                        </div>
                        <Link className="inline-flex items-center gap-2 text-primary font-label-sm text-xs uppercase font-bold tracking-wider hover:text-secondary group" to="/about">
                            <span>View Engineering Journal</span>
                            <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Article 1 */}
                        <article className="bg-surface rounded-lg overflow-hidden border border-outline-variant/40 shadow-sm hover:shadow-lg transition-shadow group flex flex-col justify-between">
                            <div>
                                <div className="relative h-48 overflow-hidden">
                                    <img alt="Photovoltaic panels" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNGiE9a3UQKztkUuHL9-MMQp2PZgQBwgadbGpc-GADMaTVjyTN6KjvnO7pLgDuUSmSYBxNNKn8tmOjx68OZ_q4QrBQHPIj7mg8P7tfX0baLw4TCWiBmUjr6Zmm1HsWafOScxng5hJehjVzRyCj9sjpEDS3Tf63Gsw3Jhwj8TUj271nIMiU0MtMkELTFtIE7XeiQNNk3H0Qk7q7uGN5Rb0pFECbiNA3Sbsc-8m8s7m_TThXSoXbiVBaSA" />
                                    <span className="absolute top-4 left-4 bg-primary text-white font-mono text-[10px] px-2.5 py-1 rounded uppercase tracking-wider">Engineering Insights</span>
                                </div>
                                <div className="p-6">
                                    <div className="font-mono text-xs text-on-surface-variant mb-2">OCTOBER 2024 • 7 MIN READ</div>
                                    <h3 className="font-headline-md text-lg font-bold text-primary mb-3 group-hover:text-secondary transition-colors">Next-Generation BIPV: Merging Architectural Aesthetics with High Photovoltaic Yield</h3>
                                    <p className="font-body-md text-xs text-on-surface-variant line-clamp-2">How building-integrated photovoltaic glass modules are replacing conventional curtain walls without compromising envelope insulation.</p>
                                </div>
                            </div>
                            <div className="p-6 pt-0">
                                <Link className="inline-flex items-center gap-1 text-secondary font-label-sm text-xs font-bold uppercase tracking-wider group-hover:translate-x-1 transition-transform" to="/solar-energy">
                                    Read More <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                </Link>
                            </div>
                        </article>
                        {/* Article 2 */}
                        <article className="bg-surface rounded-lg overflow-hidden border border-outline-variant/40 shadow-sm hover:shadow-lg transition-shadow group flex flex-col justify-between">
                            <div>
                                <div className="relative h-48 overflow-hidden">
                                    <img alt="Piling and foundation works" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnwYyy6wh4muzucOfJQkCdA8LaIIZlyOTdkpGolRfOyyzucJOf4drIbzWyZDwTie9zPf3qoVGNX9iga0OckKsmKx7RKvikPAa47lF89W-LJWG-Ue9lhFBr5P33rQnUVnxz-fw4gOyZptFHlIIE6bnLNgtdSd-Kobk7dQlSfe7DDk1xrvq0y96NVxuYzYxM4U6_uAW3gEebu-W2P6jXtr1KLUGckLrSBByMAw8HuN6ipNOQruYz6CLJWQ" />
                                    <span className="absolute top-4 left-4 bg-primary text-white font-mono text-[10px] px-2.5 py-1 rounded uppercase tracking-wider">Project Updates</span>
                                </div>
                                <div className="p-6">
                                    <div className="font-mono text-xs text-on-surface-variant mb-2">SEPTEMBER 2024 • 5 MIN READ</div>
                                    <h3 className="font-headline-md text-lg font-bold text-primary mb-3 group-hover:text-secondary transition-colors">Deep Foundation Piling in Urban Densities: Overcoming Subsurface Complexities</h3>
                                    <p className="font-body-md text-xs text-on-surface-variant line-clamp-2">Mitigating micro-vibration hazards in adjacent historic structures using continuous flight auger (CFA) drilling methodologies.</p>
                                </div>
                            </div>
                            <div className="p-6 pt-0">
                                <Link className="inline-flex items-center gap-1 text-secondary font-label-sm text-xs font-bold uppercase tracking-wider group-hover:translate-x-1 transition-transform" to="/construction">
                                    Read More <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                </Link>
                            </div>
                        </article>
                        {/* Article 3 */}
                        <article className="bg-surface rounded-lg overflow-hidden border border-outline-variant/40 shadow-sm hover:shadow-lg transition-shadow group flex flex-col justify-between">
                            <div>
                                <div className="relative h-48 overflow-hidden">
                                    <img alt="Modern elevator telematics" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtCvsKm-R4_MXSDmqdGi2HJKjsDrA7q9Fdwj3OvOroTyD8d4gmG3naccZRJvooBHhln7PawdzDe4NuQoyYleKwe_x-Vq3vXaMfXivgysGQ0dVYosvl8ipIQzH5E_61DCS42r5tkHAjL4fNbNCKHLzAgnnkcSUllIORg7L7caebHhFz1S0h1BveNF_USA0WajNan575bd5JGD1d-lViIJqykLrwearkK3nedL5-KAZgrS8ffzxl62TkJw" />
                                    <span className="absolute top-4 left-4 bg-primary text-white font-mono text-[10px] px-2.5 py-1 rounded uppercase tracking-wider">Industry Solutions</span>
                                </div>
                                <div className="p-6">
                                    <div className="font-mono text-xs text-on-surface-variant mb-2">AUGUST 2024 • 6 MIN READ</div>
                                    <h3 className="font-headline-md text-lg font-bold text-primary mb-3 group-hover:text-secondary transition-colors">Predictive Telemetry in Traction Elevators: Slashing Down-Time by 70%</h3>
                                    <p className="font-body-md text-xs text-on-surface-variant line-clamp-2">Continuous motor current sampling and accelerometer logging to preemptively detect bearing wear before operational shutdowns.</p>
                                </div>
                            </div>
                            <div className="p-6 pt-0">
                                <Link className="inline-flex items-center gap-1 text-secondary font-label-sm text-xs font-bold uppercase tracking-wider group-hover:translate-x-1 transition-transform" to="/elevators">
                                    Read More <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                </Link>
                            </div>
                        </article>
                    </div>
                </section>

                {/* Have an Engineering Project in Mind */}
                <section className="bg-primary-container text-on-primary py-24 md:py-32 cad-grid relative border-t border-white/10" id="contact">
                    <div className="px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                            {/* Contact Meta */}
                            <div className="lg:col-span-5 space-y-8">
                                <div>
                                    <div className="inline-flex items-center gap-2 text-engineering-gold font-mono text-xs uppercase tracking-widest font-bold mb-3">
                                        <span className="w-6 h-0.5 bg-engineering-gold"></span>
                                        INITIALIZE ENGAGEMENT
                                    </div>
                                    <h2 className="font-headline-xl text-3xl md:text-5xl font-bold mb-4">Have an Engineering Project in Mind?</h2>
                                    <p className="font-body-lg text-white/80 leading-relaxed">
                                        Tell us about your project, performance requirements, or structural challenges. Our principal engineering officers will review and provide a structured scope appraisal.
                                    </p>
                                </div>
                                <div className="space-y-4 pt-4 border-t border-white/10 text-sm">
                                    <div className="flex items-start gap-4">
                                        <span className="material-symbols-outlined text-engineering-gold">location_on</span>
                                        <div>
                                            <div className="font-bold text-white">PIXORA GROUP Collective HQ</div>
                                            <div className="text-white/70">No. 450, R.A. De Mel Mawatha, Colombo 03, Sri Lanka</div>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <span className="material-symbols-outlined text-engineering-gold">mail</span>
                                        <div>
                                            <div className="font-bold text-white">Direct Project Inquiries</div>
                                            <div className="text-white/70">projects@apexengineering.lk • tenders@apexengineering.lk</div>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <span className="material-symbols-outlined text-engineering-gold">call</span>
                                        <div>
                                            <div className="font-bold text-white">Engineering Desk &amp; Dispatch</div>
                                            <div className="text-white/70">+94 (11) 258-9400 / +94 (11) 258-9401</div>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <span className="material-symbols-outlined text-engineering-gold">schedule</span>
                                        <div>
                                            <div className="font-bold text-white">Operational Hours</div>
                                            <div className="text-white/70">Mon – Fri: 08:00 – 18:00 IST | 24/7 Rapid Emergency Response</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* High-Conversion Corporate Form */}
                            <div className="lg:col-span-7 bg-primary-dark-navy/90 border border-white/15 p-8 md:p-10 rounded-lg shadow-2xl backdrop-blur-md">
                                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block font-mono text-xs uppercase text-white/80 mb-2">Full Name *</label>
                                            <input className="w-full bg-white/5 border border-white/20 rounded px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-engineering-gold font-body-md text-sm" placeholder="Eng. Robert Vance" required type="text" />
                                        </div>
                                        <div>
                                            <label className="block font-mono text-xs uppercase text-white/80 mb-2">Company / Organization *</label>
                                            <input className="w-full bg-white/5 border border-white/20 rounded px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-engineering-gold font-body-md text-sm" placeholder="Nexus Industrial Group" required type="text" />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block font-mono text-xs uppercase text-white/80 mb-2">Work Email *</label>
                                            <input className="w-full bg-white/5 border border-white/20 rounded px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-engineering-gold font-body-md text-sm" placeholder="rvance@nexus.com" required type="email" />
                                        </div>
                                        <div>
                                            <label className="block font-mono text-xs uppercase text-white/80 mb-2">Contact Number</label>
                                            <input className="w-full bg-white/5 border border-white/20 rounded px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-engineering-gold font-body-md text-sm" placeholder="+94 77 123 4567" type="tel" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block font-mono text-xs uppercase text-white/80 mb-2">Service Required *</label>
                                        <select className="w-full bg-[#0d1b38] border border-white/20 rounded px-4 py-3 text-white focus:outline-none focus:border-engineering-gold font-body-md text-sm">
                                            <option value="solar">Commercial &amp; Industrial Solar (EPC / PPA)</option>
                                            <option value="construction">Civil Construction &amp; Structural Frameworks</option>
                                            <option value="elevators">Elevator Parts, Systems &amp; Retrofit Mobility</option>
                                            <option value="full_epc">Integrated Multi-Disciplinary Turnkey</option>
                                            <option value="consulting">Technical Consultation &amp; Structural Audit</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block font-mono text-xs uppercase text-white/80 mb-2">Project Scope &amp; Technical Requirements *</label>
                                        <textarea className="w-full bg-white/5 border border-white/20 rounded px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-engineering-gold font-body-md text-sm" placeholder="Describe location, estimated scale (kWp, floor area, shafts), timeline, and technical objectives..." required rows="4"></textarea>
                                    </div>
                                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                                        <div className="font-mono text-[11px] text-white/50">
                                            [NDA PROTECTED] All engineering specifications treated as confidential.
                                        </div>
                                        <button className="w-full sm:w-auto bg-engineering-gold hover:bg-[#d99a06] text-primary-container px-8 py-3.5 rounded font-label-sm text-sm font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg" type="submit">
                                            <span>Send Inquiry</span>
                                            <span className="material-symbols-outlined text-sm font-bold">arrow_forward</span>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-primary dark:bg-tertiary-container w-full py-12 md:py-20 border-t border-outline-variant/10 text-on-primary">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
                    <div className="col-span-1 md:col-span-1 flex flex-col space-y-4">
                        <div className="font-headline-md text-headline-md font-bold text-secondary-fixed tracking-tight mb-2">
                            PIXORA GROUP
                        </div>
                        <p className="font-body-md text-on-primary/70 dark:text-on-tertiary/70 text-sm">
                            Engineering Excellence for a Sustainable Future. High-precision infrastructure, clean energy integration, and smart vertical mobility.
                        </p>
                        <div className="pt-2 font-mono text-xs text-white/40">
                            ISO 9001:2015 REGISTERED COLLECTIVE
                        </div>
                    </div>
                    <div className="col-span-1 flex flex-col space-y-3">
                        <h4 className="font-headline-sm text-headline-sm text-on-primary dark:text-on-tertiary font-bold mb-2">Services</h4>
                        <Link className="font-body-md text-sm text-on-primary/70 dark:text-on-tertiary/70 hover:text-secondary-fixed transition-colors hover:translate-x-1 duration-200 cursor-pointer" to="/solar-energy">Solar Solutions</Link>
                        <Link className="font-body-md text-sm text-on-primary/70 dark:text-on-tertiary/70 hover:text-secondary-fixed transition-colors hover:translate-x-1 duration-200 cursor-pointer" to="/construction">Civil Construction</Link>
                        <Link className="font-body-md text-sm text-on-primary/70 dark:text-on-tertiary/70 hover:text-secondary-fixed transition-colors hover:translate-x-1 duration-200 cursor-pointer" to="/elevators">Vertical Mobility</Link>
                    </div>
                    <div className="col-span-1 flex flex-col space-y-3">
                        <h4 className="font-headline-sm text-headline-sm text-on-primary dark:text-on-tertiary font-bold mb-2">Legal &amp; Compliance</h4>
                        <Link className="font-body-md text-sm text-on-primary/70 dark:text-on-tertiary/70 hover:text-secondary-fixed transition-colors hover:translate-x-1 duration-200 cursor-pointer" to="#">Privacy Policy</Link>
                        <Link className="font-body-md text-sm text-on-primary/70 dark:text-on-tertiary/70 hover:text-secondary-fixed transition-colors hover:translate-x-1 duration-200 cursor-pointer" to="#">Terms of Service</Link>
                        <Link className="font-body-md text-sm text-on-primary/70 dark:text-on-tertiary/70 hover:text-secondary-fixed transition-colors hover:translate-x-1 duration-200 cursor-pointer" to="#">HSE Policy Statement</Link>
                        <Link className="font-body-md text-sm text-on-primary/70 dark:text-on-tertiary/70 hover:text-secondary-fixed transition-colors hover:translate-x-1 duration-200 cursor-pointer" to="#">Procurement Integrity</Link>
                    </div>
                    <div className="col-span-1 flex flex-col space-y-3">
                        <h4 className="font-headline-sm text-headline-sm text-on-primary dark:text-on-tertiary font-bold mb-2">Connect</h4>
                        <Link className="font-body-md text-sm text-on-primary/70 dark:text-on-tertiary/70 hover:text-secondary-fixed transition-colors hover:translate-x-1 duration-200 cursor-pointer" to="#">Contact Support</Link>
                        <Link className="font-body-md text-sm text-on-primary/70 dark:text-on-tertiary/70 hover:text-secondary-fixed transition-colors hover:translate-x-1 duration-200 cursor-pointer" to="#">Project Tenders</Link>
                        <Link className="font-body-md text-sm text-on-primary/70 dark:text-on-tertiary/70 hover:text-secondary-fixed transition-colors hover:translate-x-1 duration-200 cursor-pointer" to="#">Careers &amp; Fellowships</Link>
                        <Link className="font-body-md text-sm text-on-primary/40 hover:text-secondary-fixed transition-colors hover:translate-x-1 duration-200 cursor-pointer flex items-center gap-2 mt-4" to="/admin/manage-projects">`r`n                            <span className="material-symbols-outlined text-[14px]">admin_panel_settings</span>
                            Admin Access
                        </Link>
                    </div>
                </div>
                <div className="px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto mt-12 pt-8 border-t border-outline-variant/10 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-4">
                    <p className="font-body-md text-on-primary/50 text-xs">
                        © 2026 PIXORA GROUP Collective. All rights reserved. Registered Engineering Firm #LK-ENG-4912.
                    </p>
                    <div className="font-mono text-xs text-on-primary/40 flex items-center gap-4">
                        <span>COLOMBO</span>
                        <span>•</span>
                        <span>SINGAPORE</span>
                        <span>•</span>
                        <span>DUBAI</span>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Home;

