import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const SolarEnergy = () => {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal-on-scroll').forEach((element) => {
            observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="bg-background text-on-background font-body-md antialiased selection:bg-secondary-fixed selection:text-on-secondary-fixed">
            {/* TopNavBar */}
            <nav className="bg-surface/80 dark:bg-primary-container/80 backdrop-blur-md docked full-width top-0 sticky h-14 md:h-16 border-b border-outline-variant/20 dark:border-outline/20 shadow-sm dark:shadow-none z-50">
                <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto h-full">
                    <Link to="/" className="font-headline-md text-headline-md font-bold text-primary dark:text-inverse-primary tracking-tight scale-95 active:scale-90 transition-transform">
                        PIXORA GROUP
                    </Link>
                    <div className="hidden md:flex items-center gap-6">
                        <Link className="text-on-surface-variant dark:text-on-tertiary-container hover:text-primary dark:hover:text-primary-fixed transition-colors font-label-sm text-label-sm hover:bg-surface-container-high/50 dark:hover:bg-primary-container/50 transition-all duration-300 px-3 py-2 rounded" to="/">Home</Link>
                        <Link className="text-on-surface-variant dark:text-on-tertiary-container hover:text-primary dark:hover:text-primary-fixed transition-colors font-label-sm text-label-sm hover:bg-surface-container-high/50 dark:hover:bg-primary-container/50 transition-all duration-300 px-3 py-2 rounded" to="/about">About</Link>
                        <Link className="text-secondary dark:text-secondary-fixed-dim font-bold border-b-2 border-secondary pb-1 font-label-sm text-label-sm px-3 py-2" to="/solar-energy">Solar Energy</Link>
                        <Link className="text-on-surface-variant dark:text-on-tertiary-container hover:text-primary dark:hover:text-primary-fixed transition-colors font-label-sm text-label-sm hover:bg-surface-container-high/50 dark:hover:bg-primary-container/50 transition-all duration-300 px-3 py-2 rounded" to="/construction">Construction</Link>
                        <Link className="text-on-surface-variant dark:text-on-tertiary-container hover:text-primary dark:hover:text-primary-fixed transition-colors font-label-sm text-label-sm hover:bg-surface-container-high/50 dark:hover:bg-primary-container/50 transition-all duration-300 px-3 py-2 rounded" to="/elevators">Elevator Parts</Link>
                    </div>
                    <Link to="/projects" className="hidden md:flex bg-primary text-on-primary font-label-sm text-label-sm px-6 h-12 rounded items-center justify-center hover:bg-primary/90 transition-colors scale-95 active:scale-90 transition-transform">
                        Get a Quote
                    </Link>
                    <button className="md:hidden text-primary p-2">
                        <span className="material-symbols-outlined">menu</span>
                    </button>
                </div>
            </nav>
            <main>
                {/* Hero Section */}
                <section className="relative min-h-[80vh] flex items-end pb-24 pt-32">
                    <div className="absolute inset-0 z-0">
                        <img alt="Powering a Sustainable Future" className="w-full h-full object-cover object-center" src="https://lh3.googleusercontent.com/aida/AEtjO1Wpp_EhMNmtksgELXM48K5WCpJuxxmE5IMdApnyYkD3buvTscJgtpm67jgmxwhVU4ryq9coD-CJcB3ELeF5jNPkoFm05YmT6MRu4KqwAO0WveDwn0jU6Z2V_b0upTMmIIczdHpg8aUchh1MiNiyhOOIYz46ZBKKWpECcK-of1fxZOKWho3n8ZAvOBXw2JuErABVQYpvh4p22SefRJBEfN-iG6mBV50lwTTwEDm38aX91TvWgD8eFJzJ1Vdi" />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent"></div>
                    </div>
                    <div className="relative z-10 w-full px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
                        <div className="mb-8 flex items-center gap-2 text-on-primary/70 font-label-sm text-label-sm uppercase tracking-wider">
                            <Link to="/">Home</Link>
                            <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                            <span>Services</span>
                            <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                            <span className="text-secondary-fixed">Solar Solutions</span>
                        </div>
                        <div className="max-w-3xl">
                            <h1 className="font-headline-lg-mobile md:font-headline-xl text-headline-lg-mobile md:text-headline-xl text-on-primary mb-6 text-balance reveal-on-scroll">
                                Powering a Sustainable Future
                            </h1>
                            <p className="font-body-lg text-body-lg text-on-primary/90 mb-10 text-balance reveal-on-scroll" style={{ transitionDelay: '100ms' }}>
                                Smart, reliable and efficient solar energy solutions designed for a cleaner and more sustainable tomorrow.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
                                <Link to="/projects" className="bg-secondary text-on-secondary-fixed font-label-sm text-label-sm px-8 h-14 rounded flex items-center justify-center gap-2 hover:bg-secondary/90 transition-colors">
                                    Start Your Solar Project
                                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>arrow_forward</span>
                                </Link>
                                <Link to="/projects" className="glass-panel text-on-primary font-label-sm text-label-sm px-8 h-14 rounded flex items-center justify-center gap-2 hover:bg-white/20 transition-colors">
                                    View Our Solar Projects
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Introduction / Vision */}
                <section className="py-24 md:py-32 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
                        <div className="reveal-on-scroll">
                            <h2 className="font-headline-lg text-headline-lg text-primary mb-6 text-balance">Harnessing the Power of the Sun</h2>
                            <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">At PIXORA GROUP, we believe in a future powered by clean, renewable energy. Our Solar Solutions are engineered to provide maximum efficiency, reliability, and long-term savings for commercial and industrial applications.</p>
                            <p className="font-body-lg text-body-lg text-on-surface-variant">We combine cutting-edge technology with expert engineering to deliver tailored solar power systems that meet the unique energy demands of your business.</p>
                        </div>
                        <div className="reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
                            <img alt="Solar Panel Installation" className="w-full h-[500px] object-cover rounded-xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnfOoD3KinIDfemxK_BpX8nvW2mTHXvmChNj-lol88RtMsKTOBzWg8pqTfwGfUl4_aRFVb2rhPIf2mJHp4WHvXHzk3c7A8uGAH_2bLbFnjupsNMx8G9KJgqShuLSlOHqFDLMwkxQcJ7S0nNMyCVPA0-MLtLWcwJkqiXAuANB6RJXLYnoNpw6p7hnB75Wx3f9p7r8uLWQINwaY8cekYqeihfA35Rb9y9CbEWUuJNnBJ4jirckLS5AVPFA" />
                        </div>
                    </div>
                </section>

                {/* Our Approach Timeline */}
                <section className="py-24 md:py-32 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto bg-surface">
                    <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24 reveal-on-scroll">
                        <h2 className="font-headline-md text-headline-md text-primary mb-4">Our Approach</h2>
                        <p className="font-body-lg text-body-lg text-on-surface-variant">A proven 5-step methodology ensuring seamless project execution.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-x-6 gap-y-12 relative">
                        <div className="hidden md:block absolute top-8 left-0 w-full h-[1px] bg-outline-variant/30 z-0"></div>
                        <div className="relative z-10 reveal-on-scroll">
                            <div className="w-16 h-16 rounded-full bg-primary text-on-primary flex items-center justify-center font-headline-sm text-headline-sm mb-6 border-4 border-surface">01</div>
                            <h3 className="font-headline-sm text-headline-sm text-primary mb-3">Discover</h3>
                            <p className="text-on-surface-variant text-sm">Site analysis &amp; energy audit.</p>
                        </div>
                        <div className="relative z-10 reveal-on-scroll" style={{ transitionDelay: '100ms' }}>
                            <div className="w-16 h-16 rounded-full bg-primary text-on-primary flex items-center justify-center font-headline-sm text-headline-sm mb-6 border-4 border-surface">02</div>
                            <h3 className="font-headline-sm text-headline-sm text-primary mb-3">Plan</h3>
                            <p className="text-on-surface-variant text-sm">Financial modeling &amp; feasibility.</p>
                        </div>
                        <div className="relative z-10 reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
                            <div className="w-16 h-16 rounded-full bg-primary text-on-primary flex items-center justify-center font-headline-sm text-headline-sm mb-6 border-4 border-surface">03</div>
                            <h3 className="font-headline-sm text-headline-sm text-primary mb-3">Design</h3>
                            <p className="text-on-surface-variant text-sm">Custom engineering solutions.</p>
                        </div>
                        <div className="relative z-10 reveal-on-scroll" style={{ transitionDelay: '300ms' }}>
                            <div className="w-16 h-16 rounded-full bg-primary text-on-primary flex items-center justify-center font-headline-sm text-headline-sm mb-6 border-4 border-surface">04</div>
                            <h3 className="font-headline-sm text-headline-sm text-primary mb-3">Deliver</h3>
                            <p className="text-on-surface-variant text-sm">Precision installation.</p>
                        </div>
                        <div className="relative z-10 reveal-on-scroll" style={{ transitionDelay: '400ms' }}>
                            <div className="w-16 h-16 rounded-full bg-primary text-on-primary flex items-center justify-center font-headline-sm text-headline-sm mb-6 border-4 border-surface">05</div>
                            <h3 className="font-headline-sm text-headline-sm text-primary mb-3">Support</h3>
                            <p className="text-on-surface-variant text-sm">O&amp;M and monitoring.</p>
                        </div>
                    </div>
                </section>

                {/* Technology & Expertise */}
                <section className="py-24 md:py-32 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto bg-surface-container-low">
                    <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 reveal-on-scroll">
                        <h2 className="font-headline-md text-headline-md text-primary mb-4">Technology &amp; Expertise</h2>
                        <p className="font-body-lg text-body-lg text-on-surface-variant">We partner with Tier 1 manufacturers to integrate industry-leading components into every project.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-surface p-8 rounded-xl border border-outline-variant/20 hover:border-secondary transition-colors reveal-on-scroll">
                            <span className="material-symbols-outlined text-4xl text-secondary mb-6">solar_power</span>
                            <h3 className="font-headline-sm text-headline-sm text-primary mb-3">Solar Panels</h3>
                            <p className="text-on-surface-variant">High-efficiency mono PERC and bifacial modules for optimal yield.</p>
                        </div>
                        <div className="bg-surface p-8 rounded-xl border border-outline-variant/20 hover:border-secondary transition-colors reveal-on-scroll" style={{ transitionDelay: '100ms' }}>
                            <span className="material-symbols-outlined text-4xl text-secondary mb-6">battery_charging_full</span>
                            <h3 className="font-headline-sm text-headline-sm text-primary mb-3">Inverters</h3>
                            <p className="text-on-surface-variant">Robust string and central inverters ensuring maximum power conversion.</p>
                        </div>
                        <div className="bg-surface p-8 rounded-xl border border-outline-variant/20 hover:border-secondary transition-colors reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
                            <span className="material-symbols-outlined text-4xl text-secondary mb-6">monitoring</span>
                            <h3 className="font-headline-sm text-headline-sm text-primary mb-3">Monitoring Systems</h3>
                            <p className="text-on-surface-variant">Real-time data analytics and performance tracking platforms.</p>
                        </div>
                        <div className="bg-surface p-8 rounded-xl border border-outline-variant/20 hover:border-secondary transition-colors reveal-on-scroll" style={{ transitionDelay: '300ms' }}>
                            <span className="material-symbols-outlined text-4xl text-secondary mb-6">architecture</span>
                            <h3 className="font-headline-sm text-headline-sm text-primary mb-3">Mounting Systems</h3>
                            <p className="text-on-surface-variant">Durable, weather-resistant structures for diverse roof and ground applications.</p>
                        </div>
                        <div className="bg-surface p-8 rounded-xl border border-outline-variant/20 hover:border-secondary transition-colors reveal-on-scroll" style={{ transitionDelay: '400ms' }}>
                            <span className="material-symbols-outlined text-4xl text-secondary mb-6">battery_saver</span>
                            <h3 className="font-headline-sm text-headline-sm text-primary mb-3">Energy Storage</h3>
                            <p className="text-on-surface-variant">Advanced battery energy storage systems (BESS) for peak shaving and backup.</p>
                        </div>
                    </div>
                </section>

                {/* Recent Solar Projects */}
                <section className="py-24 md:py-32 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 reveal-on-scroll">
                        <div className="max-w-2xl">
                            <h2 className="font-headline-md text-headline-md text-primary mb-4">Recent Solar Projects</h2>
                            <p className="font-body-lg text-body-lg text-on-surface-variant">A showcase of our engineered solutions powering businesses across the region.</p>
                        </div>
                        <Link className="text-secondary font-label-sm text-label-sm flex items-center gap-2 hover:underline mt-6 md:mt-0" to="/projects">View All Projects <span className="material-symbols-outlined text-sm">arrow_forward</span></Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Link to="/projects" className="group cursor-pointer reveal-on-scroll">
                            <div className="overflow-hidden rounded-xl mb-6 relative h-[400px]">
                                <img alt="Project 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrYQ9isbUhjgd02BuzPWvkVHob6y8PcMnqbdOpBGf8EpxNJNoRgiF1XbcIk5N8jEgd8WIocev2L94v-kP2ZLwG0zXU89AfxtHmJGsttbdDJEyCUsT8CnekMl1z7D_QzFVG-FnEeu-H8qW1SnXDzODgphF6FqTpghMdnNPNMjDxTeH37PF3-ac9DGPD1V1yvC8ZVNaqmStUFqrUK-tadi14WGWCptIkiPpGkWgg2hg17pl3Cuz_1gu_Vg" />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary uppercase tracking-wide">Commercial Solar</div>
                            </div>
                            <h3 className="font-headline-sm text-headline-sm text-primary mb-2 group-hover:text-secondary transition-colors">Tech Hub Microgrid</h3>
                            <p className="text-on-surface-variant text-sm mb-4">Colombo, Sri Lanka</p>
                            <span className="text-primary font-label-sm text-label-sm flex items-center gap-2 group-hover:text-secondary transition-colors">View Project <span className="material-symbols-outlined text-sm">arrow_forward</span></span>
                        </Link>
                        <Link to="/projects" className="group cursor-pointer reveal-on-scroll" style={{ transitionDelay: '100ms' }}>
                            <div className="overflow-hidden rounded-xl mb-6 relative h-[400px]">
                                <img alt="Project 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0fRA4NoB3gvzoDFMHC3bmCy7Ta7qdd2M11d3p4Jx7Nox8aFQZIfugKA9brrDJnBPXc--R0roqjxWidoNHBFzxKLGcNNa659NQrL5M_2a_0GcoQBpffw9kRCQ2ohnVD5O0Qr6K8jjJBUAcZA2LrBTiPRKLdRxKlKAVgu0fUwGnMJ0EBvOeqixKLyNIfb3sNC7elEGa5CREbg6si5dzbjpLfzFBNkQe_zbXbrOSC73Z2YmRVizjV_ZRhg" />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary uppercase tracking-wide">Industrial Solar</div>
                            </div>
                            <h3 className="font-headline-sm text-headline-sm text-primary mb-2 group-hover:text-secondary transition-colors">Manufacturing Plant Array</h3>
                            <p className="text-on-surface-variant text-sm mb-4">Kandy, Sri Lanka</p>
                            <span className="text-primary font-label-sm text-label-sm flex items-center gap-2 group-hover:text-secondary transition-colors">View Project <span className="material-symbols-outlined text-sm">arrow_forward</span></span>
                        </Link>
                        <Link to="/projects" className="group cursor-pointer reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
                            <div className="overflow-hidden rounded-xl mb-6 relative h-[400px]">
                                <img alt="Project 3" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvUMJPMsFkJR50_8J5KbMDeqx4CJ3--xpAPdrVxp9vp7Z-roWKnS5J4dILSn4Hbl-yBbPGnhq0SWrXJgEAGrB3VJ6FG_xsNSxba3KrkUhGnkcyIWKxjhK1s7t6iFNsRD43A3mIvRDs2EjqyVcbIxQMOOo3RjGzrAx7aH9_T6PI5TyZ_finEO-pzKHUnZBMO_PZq6NrfZrLOU4_iTFluxA4DFYJ-Psw8sxEBfeiSMqsAjuZNMYRZMXFzQ" />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary uppercase tracking-wide">Utility Scale</div>
                            </div>
                            <h3 className="font-headline-sm text-headline-sm text-primary mb-2 group-hover:text-secondary transition-colors">Coastal Solar Farm</h3>
                            <p className="text-on-surface-variant text-sm mb-4">Galle, Sri Lanka</p>
                            <span className="text-primary font-label-sm text-label-sm flex items-center gap-2 group-hover:text-secondary transition-colors">View Project <span className="material-symbols-outlined text-sm">arrow_forward</span></span>
                        </Link>
                    </div>
                </section>

                {/* Why Choose Us */}
                <section className="py-24 md:py-32 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto bg-primary text-on-primary rounded-[2rem] my-12 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 20% 150%, var(--tw-colors-secondary-fixed) 0%, transparent 50%)' }}></div>
                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center p-8 md:p-16">
                        <div>
                            <h2 className="font-headline-lg text-headline-lg mb-6">Why Choose Apex for Solar?</h2>
                            <p className="font-body-lg text-body-lg text-on-primary/80 mb-8">We don't just install panels; we engineer comprehensive energy solutions tailored to your specific operational needs and financial goals.</p>
                            <ul className="space-y-6">
                                <li className="flex items-start gap-4">
                                    <span className="material-symbols-outlined text-secondary-fixed mt-1">check_circle</span>
                                    <div>
                                        <h4 className="font-headline-sm text-headline-sm mb-1">Engineering Excellence</h4>
                                        <p className="text-on-primary/70 text-sm">Designs optimized for maximum yield and longevity.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="material-symbols-outlined text-secondary-fixed mt-1">check_circle</span>
                                    <div>
                                        <h4 className="font-headline-sm text-headline-sm mb-1">Turnkey Solutions</h4>
                                        <p className="text-on-primary/70 text-sm">From permits to commissioning, we handle everything.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="material-symbols-outlined text-secondary-fixed mt-1">check_circle</span>
                                    <div>
                                        <h4 className="font-headline-sm text-headline-sm mb-1">Dedicated O&amp;M</h4>
                                        <p className="text-on-primary/70 text-sm">Ongoing operations and maintenance support.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 text-center">
                                <div className="font-headline-lg text-headline-lg text-secondary-fixed mb-2">50+</div>
                                <div className="text-on-primary/80 text-sm font-label-sm uppercase tracking-wide">MW Installed</div>
                            </div>
                            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 text-center">
                                <div className="font-headline-lg text-headline-lg text-secondary-fixed mb-2">120+</div>
                                <div className="text-on-primary/80 text-sm font-label-sm uppercase tracking-wide">Projects Completed</div>
                            </div>
                            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 text-center">
                                <div className="font-headline-lg text-headline-lg text-secondary-fixed mb-2">15</div>
                                <div className="text-on-primary/80 text-sm font-label-sm uppercase tracking-wide">Years Experience</div>
                            </div>
                            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 text-center">
                                <div className="font-headline-lg text-headline-lg text-secondary-fixed mb-2">24/7</div>
                                <div className="text-on-primary/80 text-sm font-label-sm uppercase tracking-wide">Monitoring Support</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-24 md:py-32 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-16 reveal-on-scroll">
                            <h2 className="font-headline-md text-headline-md text-primary mb-4">Frequently Asked Questions</h2>
                            <p className="font-body-lg text-body-lg text-on-surface-variant">Everything you need to know about transitioning to solar energy.</p>
                        </div>
                        <div className="space-y-4">
                            <details className="group bg-surface rounded-xl border border-outline-variant/20 reveal-on-scroll">
                                <summary className="flex justify-between items-center font-headline-sm text-headline-sm text-primary p-6 cursor-pointer list-none">
                                    <span>What is the typical ROI for a commercial solar installation?</span>
                                    <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
                                </summary>
                                <div className="p-6 pt-0 text-on-surface-variant font-body-md">
                                    The typical ROI for commercial solar installations ranges from 3 to 6 years, depending on system size, local energy rates, and available incentives. We provide detailed financial modeling during the planning phase to give you an accurate projection.
                                </div>
                            </details>
                            <details className="group bg-surface rounded-xl border border-outline-variant/20 reveal-on-scroll" style={{ transitionDelay: '100ms' }}>
                                <summary className="flex justify-between items-center font-headline-sm text-headline-sm text-primary p-6 cursor-pointer list-none">
                                    <span>How long does the installation process take?</span>
                                    <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
                                </summary>
                                <div className="p-6 pt-0 text-on-surface-variant font-body-md">
                                    Installation timelines vary based on project complexity. A standard commercial roof installation typically takes 2 to 4 weeks on-site, following a 6 to 8 week engineering and permitting phase.
                                </div>
                            </details>
                            <details className="group bg-surface rounded-xl border border-outline-variant/20 reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
                                <summary className="flex justify-between items-center font-headline-sm text-headline-sm text-primary p-6 cursor-pointer list-none">
                                    <span>Do you provide maintenance after installation?</span>
                                    <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
                                </summary>
                                <div className="p-6 pt-0 text-on-surface-variant font-body-md">
                                    Yes, we offer comprehensive Operations &amp; Maintenance (O&amp;M) packages, including continuous remote monitoring, scheduled preventative maintenance, and responsive corrective repairs to ensure optimal performance over the system's lifetime.
                                </div>
                            </details>
                            <details className="group bg-surface rounded-xl border border-outline-variant/20 reveal-on-scroll" style={{ transitionDelay: '300ms' }}>
                                <summary className="flex justify-between items-center font-headline-sm text-headline-sm text-primary p-6 cursor-pointer list-none">
                                    <span>What happens on cloudy days or during power outages?</span>
                                    <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
                                </summary>
                                <div className="p-6 pt-0 text-on-surface-variant font-body-md">
                                    Solar panels still generate electricity on cloudy days, though at reduced capacity. For power outages, standard grid-tied systems shut down for safety. We can integrate Energy Storage Systems (BESS) if you require backup power during outages.
                                </div>
                            </details>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-24 md:py-32 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto text-center reveal-on-scroll">
                    <h2 className="font-headline-lg text-headline-lg text-primary mb-6">Ready to Power Your Future?</h2>
                    <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-2xl mx-auto">Connect with our engineering team for a comprehensive solar assessment and customized proposal for your facility.</p>
                    <Link to="/projects" className="bg-primary text-on-primary font-label-sm text-label-sm px-8 h-14 rounded inline-flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors">
                        Request a Solar Consultation
                        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>arrow_forward</span>
                    </Link>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-primary dark:bg-tertiary-container full-width py-12 md:py-20 border-t border-outline-variant/10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
                    <div className="col-span-1 md:col-span-1 mb-8 md:mb-0">
                        <Link to="/" className="font-headline-md text-headline-md font-bold text-secondary-fixed tracking-tight mb-4 inline-block">
                            PIXORA GROUP
                        </Link>
                        <p className="font-body-md text-body-md text-on-primary/70 max-w-sm">
                            © 2024 PIXORA GROUP Collective. All rights reserved. Engineering Excellence for a Sustainable Future.
                        </p>
                    </div>
                    <div className="col-span-1">
                        <h4 className="font-headline-sm text-headline-sm text-on-primary mb-4">Solutions</h4>
                        <ul className="space-y-3">
                            <li><Link className="text-secondary-fixed font-bold hover:translate-x-1 transition-transform duration-200 inline-block cursor-pointer" to="/solar-energy">Solar Solutions</Link></li>
                            <li><Link className="text-on-primary/70 dark:text-on-tertiary/70 hover:text-secondary-fixed transition-colors hover:translate-x-1 transition-transform duration-200 inline-block cursor-pointer" to="/construction">Civil Construction</Link></li>
                            <li><Link className="text-on-primary/70 dark:text-on-tertiary/70 hover:text-secondary-fixed transition-colors hover:translate-x-1 transition-transform duration-200 inline-block cursor-pointer" to="/elevators">Vertical Mobility</Link></li>
                        </ul>
                    </div>
                    <div className="col-span-1">
                        <h4 className="font-headline-sm text-headline-sm text-on-primary mb-4">Legal</h4>
                        <ul className="space-y-3">
                            <li><Link className="text-on-primary/70 dark:text-on-tertiary/70 hover:text-secondary-fixed transition-colors hover:translate-x-1 transition-transform duration-200 inline-block cursor-pointer" to="#">Privacy Policy</Link></li>
                            <li><Link className="text-on-primary/70 dark:text-on-tertiary/70 hover:text-secondary-fixed transition-colors hover:translate-x-1 transition-transform duration-200 inline-block cursor-pointer" to="#">Terms of Service</Link></li>
                        </ul>
                    </div>
                    <div className="col-span-1">
                        <h4 className="font-headline-sm text-headline-sm text-on-primary mb-4">Connect</h4>
                        <ul className="space-y-3">
                            <li><Link className="text-on-primary/70 dark:text-on-tertiary/70 hover:text-secondary-fixed transition-colors hover:translate-x-1 transition-transform duration-200 inline-block cursor-pointer" to="#">Contact Support</Link></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default SolarEnergy;
