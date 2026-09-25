import React from 'react';
import { Link } from 'react-router-dom';

const Elevator = () => {
    return (
        <div className="bg-background text-on-background font-body-md antialiased selection:bg-secondary/20 selection:text-primary">
            {/* TopNavBar */}
            <nav className="bg-surface/80 dark:bg-primary-container/80 backdrop-blur-md docked full-width top-0 sticky h-14 md:h-16 border-b border-outline-variant/20 dark:border-outline/20 shadow-sm dark:shadow-none z-50">
                <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto h-full">
                    <Link to="/" className="font-headline-md text-headline-md font-bold text-primary dark:text-inverse-primary tracking-tight">
                        PIXORA GROUP
                    </Link>
                    <div className="hidden md:flex items-center space-x-8 h-full">
                        <Link className="text-on-surface-variant dark:text-on-tertiary-container hover:text-primary dark:hover:text-primary-fixed transition-colors font-label-sm text-label-sm h-full flex items-center hover:bg-surface-container-high/50 dark:hover:bg-primary-container/50 duration-300 px-4" to="/">Home</Link>
                        <Link className="text-on-surface-variant dark:text-on-tertiary-container hover:text-primary dark:hover:text-primary-fixed transition-colors font-label-sm text-label-sm h-full flex items-center hover:bg-surface-container-high/50 dark:hover:bg-primary-container/50 duration-300 px-4" to="/about">About</Link>
                        <Link className="text-on-surface-variant dark:text-on-tertiary-container hover:text-primary dark:hover:text-primary-fixed transition-colors font-label-sm text-label-sm h-full flex items-center hover:bg-surface-container-high/50 dark:hover:bg-primary-container/50 duration-300 px-4" to="/solar-energy">Solar Energy</Link>
                        <Link className="text-on-surface-variant dark:text-on-tertiary-container hover:text-primary dark:hover:text-primary-fixed transition-colors font-label-sm text-label-sm h-full flex items-center hover:bg-surface-container-high/50 dark:hover:bg-primary-container/50 duration-300 px-4" to="/construction">Construction</Link>
                        <Link className="text-secondary dark:text-secondary-fixed-dim font-bold border-b-2 border-secondary pb-1 font-label-sm text-label-sm h-full flex items-center px-4" to="/elevators">Elevator Parts</Link>
                    </div>
                    <Link to="/projects" className="hidden md:inline-flex bg-primary text-on-primary font-label-sm text-label-sm h-[48px] px-6 items-center justify-center rounded scale-95 active:scale-90 transition-transform">
                        Get a Quote
                    </Link>
                    {/* Mobile Menu Toggle */}
                    <button className="md:hidden text-primary">
                        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>menu</span>
                    </button>
                </div>
            </nav>

            {/* Hero Section */}
            <header className="relative w-full min-h-[80vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaaXRgsMAoP76U5D2ylur38urt8yJg5SuBYeVYr7bzoKmWaeB24gRbW8tEvOLh07GmEOBm51T3hBvEGYNcaUnvFDd1jJ7MLLwNlwo7pMHy7HUE1zpTan9TJxgZDa2YwM-kMeNBzHtovDV0WCspnSnxI9SDuCRPuJco0IX5iT6kLvmseLV6J5s68Z6xqCUV4REWNCpVBFyikfQKV-NdqnB_SbUceFj8MYQFPzQvMqMb0j49dPIfnxX0-w" alt="hero" />
                    <div className="absolute inset-0 bg-gradient-to-r from-surface/95 via-surface/80 to-transparent"></div>
                </div>
                <div className="relative z-10 w-full max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-20">
                    {/* Breadcrumb */}
                    <nav className="flex items-center space-x-2 text-on-surface-variant font-label-sm text-label-sm mb-8">
                        <Link className="hover:text-primary transition-colors" to="/">Home</Link>
                        <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 0" }}>chevron_right</span>
                        <span className="hover:text-primary transition-colors">Services</span>
                        <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 0" }}>chevron_right</span>
                        <span className="text-primary font-semibold">Elevator Parts</span>
                    </nav>
                    <div className="max-w-2xl">
                        <h1 className="font-headline-lg-mobile md:font-headline-xl text-headline-lg-mobile md:text-headline-xl text-primary mb-6">
                            Reliable Components for Vertical Mobility
                        </h1>
                        <p className="font-body-lg text-body-lg text-on-surface-variant mb-10">
                            Quality elevator components and technical parts designed to support safe, reliable and efficient elevator systems. Engineered for precision and longevity in modern architectural environments.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/projects" className="bg-primary text-on-primary font-label-sm text-label-sm h-[56px] px-8 rounded flex items-center justify-center hover:bg-primary/90 transition-colors">
                                Browse Elevator Parts
                            </Link>
                            <Link to="/projects" className="bg-secondary text-on-secondary-fixed font-label-sm text-label-sm h-[56px] px-8 rounded flex items-center justify-center hover:bg-secondary/90 transition-colors">
                                Request a Quote
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

            {/* Elevator Product Categories */}
            <section className="py-20 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto technical-grid">
                <div className="text-center mb-12">
                    <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Elevator Product Categories</h2>
                    <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">Comprehensive range of parts for maintenance, repair, and modernization.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
                    <div className="bg-surface border border-outline-variant/50 p-6 rounded hover:shadow-lg transition-shadow">
                        <span className="material-symbols-outlined text-4xl text-secondary mb-4">settings</span>
                        <h3 className="font-headline-sm text-xl font-semibold mb-2">Mechanical Parts</h3>
                        <p className="text-on-surface-variant">Gears, pulleys, cables, and structural components.</p>
                    </div>
                    <div className="bg-surface border border-outline-variant/50 p-6 rounded hover:shadow-lg transition-shadow">
                        <span className="material-symbols-outlined text-4xl text-secondary mb-4">electric_bolt</span>
                        <h3 className="font-headline-sm text-xl font-semibold mb-2">Electrical Systems</h3>
                        <p className="text-on-surface-variant">Controllers, wiring, drives, and power supplies.</p>
                    </div>
                    <div className="bg-surface border border-outline-variant/50 p-6 rounded hover:shadow-lg transition-shadow">
                        <span className="material-symbols-outlined text-4xl text-secondary mb-4">verified_user</span>
                        <h3 className="font-headline-sm text-xl font-semibold mb-2">Safety Gear</h3>
                        <p className="text-on-surface-variant">Governors, buffers, safeties, and limit switches.</p>
                    </div>
                </div>
            </section>

            {/* Our Approach */}
            <section className="py-20 bg-surface-container-lowest border-y border-outline-variant/20 px-margin-mobile md:px-margin-desktop">
                <div className="max-w-max-width mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Our Approach</h2>
                        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">A systematic methodology for delivering precision elevator solutions.</p>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center relative">
                        <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-outline-variant/30 -translate-y-1/2 z-0"></div>
                        <div className="relative z-10 flex flex-col items-center mb-8 md:mb-0 bg-surface-container-lowest px-4">
                            <div className="w-12 h-12 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold mb-4">1</div>
                            <h4 className="font-headline-sm font-semibold text-primary">Discover</h4>
                        </div>
                        <div className="relative z-10 flex flex-col items-center mb-8 md:mb-0 bg-surface-container-lowest px-4">
                            <div className="w-12 h-12 rounded-full bg-surface-container-high border-2 border-primary text-primary flex items-center justify-center font-bold mb-4">2</div>
                            <h4 className="font-headline-sm font-semibold text-primary">Plan</h4>
                        </div>
                        <div className="relative z-10 flex flex-col items-center mb-8 md:mb-0 bg-surface-container-lowest px-4">
                            <div className="w-12 h-12 rounded-full bg-surface-container-high border-2 border-primary text-primary flex items-center justify-center font-bold mb-4">3</div>
                            <h4 className="font-headline-sm font-semibold text-primary">Design</h4>
                        </div>
                        <div className="relative z-10 flex flex-col items-center mb-8 md:mb-0 bg-surface-container-lowest px-4">
                            <div className="w-12 h-12 rounded-full bg-surface-container-high border-2 border-primary text-primary flex items-center justify-center font-bold mb-4">4</div>
                            <h4 className="font-headline-sm font-semibold text-primary">Deliver</h4>
                        </div>
                        <div className="relative z-10 flex flex-col items-center bg-surface-container-lowest px-4">
                            <div className="w-12 h-12 rounded-full bg-secondary text-on-secondary-fixed flex items-center justify-center font-bold mb-4">5</div>
                            <h4 className="font-headline-sm font-semibold text-primary">Support</h4>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technology & Components */}
            <section className="py-20 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
                <div className="mb-12">
                    <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Technology &amp; Components</h2>
                    <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">Advanced technical components for modern vertical transportation.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-surface border border-outline-variant/30 p-6 rounded hover:border-primary/50 transition-colors">
                        <h3 className="font-headline-sm text-lg font-bold mb-3 text-primary">Control Systems</h3>
                        <p className="text-sm text-on-surface-variant">Microprocessor-based dispatchers and motor controllers.</p>
                    </div>
                    <div className="bg-surface border border-outline-variant/30 p-6 rounded hover:border-primary/50 transition-colors">
                        <h3 className="font-headline-sm text-lg font-bold mb-3 text-primary">Door Components</h3>
                        <p className="text-sm text-on-surface-variant">Operators, tracks, rollers, and electronic safety edges.</p>
                    </div>
                    <div className="bg-surface border border-outline-variant/30 p-6 rounded hover:border-primary/50 transition-colors">
                        <h3 className="font-headline-sm text-lg font-bold mb-3 text-primary">Safety Components</h3>
                        <p className="text-sm text-on-surface-variant">Overspeed governors, safety catches, and buffers.</p>
                    </div>
                    <div className="bg-surface border border-outline-variant/30 p-6 rounded hover:border-primary/50 transition-colors">
                        <h3 className="font-headline-sm text-lg font-bold mb-3 text-primary">Traction Components</h3>
                        <p className="text-sm text-on-surface-variant">Machines, sheaves, ropes, and suspension means.</p>
                    </div>
                    <div className="bg-surface border border-outline-variant/30 p-6 rounded hover:border-primary/50 transition-colors">
                        <h3 className="font-headline-sm text-lg font-bold mb-3 text-primary">Electrical Components</h3>
                        <p className="text-sm text-on-surface-variant">Traveling cables, limit switches, and pushbuttons.</p>
                    </div>
                </div>
            </section>

            {/* Recent Elevator Projects */}
            <section className="py-20 bg-surface-container-low px-margin-mobile md:px-margin-desktop">
                <div className="max-w-max-width mx-auto">
                    <div className="mb-12 flex justify-between items-end">
                        <div>
                            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Recent Elevator Projects</h2>
                            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">Showcasing our precision engineering in real-world applications.</p>
                        </div>
                        <Link to="/projects" className="hidden md:inline-flex text-secondary font-label-sm items-center hover:underline">
                            View All Projects <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
                        <div className="bg-surface-container-lowest rounded overflow-hidden shadow-sm border border-outline-variant/20">
                            <div className="h-48 bg-surface-dim relative">
                                <img alt="Hotel elevator" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC62dNuZXHmg5ltr8EQBfK9EPWQ72I3HUTrlVmbQ4Ku1DRtRW-ARUroN0hDTDxJ1886z183Nk4tw8EVJmb3o6lK4UWczaBb2a1ERsfs0BKZ0ZhRPutJgMkmmSDEEyX050o2doMnx-1IHbW8ocGoDq8D6H8uUxbnP76FUKauouxhzAdA2mKFwsowmleioM3uK-WeTOE5ZRHpjgwLePd7HiK-6TMuGPxeU4k_WfdnACqPxG1WcQatdlXYVw" />
                            </div>
                            <div className="p-6">
                                <span className="text-xs font-bold text-secondary uppercase tracking-wider mb-2 block">Hospitality</span>
                                <h3 className="font-headline-sm text-xl font-bold mb-2">Grand Azure Hotel</h3>
                                <p className="text-sm text-on-surface-variant">Complete modernization of 6 high-speed passenger cars with advanced dispatching.</p>
                            </div>
                        </div>
                        <div className="bg-surface-container-lowest rounded overflow-hidden shadow-sm border border-outline-variant/20">
                            <div className="h-48 bg-surface-dim relative">
                                <img alt="Office tower elevator" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAE46jvSyN5ns0DNd8HjyvmRVXZ03uHepN9c3cjNZtVc2hgmde21rU6TUmqBdV4TSdPCikDqEV8-7aXIYuW8r4yb4QoKV8Tyvd19xO4lfzGg87_5Y3yJt6cKoeSzkET_pRAbG-NCtyZCOlSFRA0H6qTxyh8R4OfLLNXE-Y31Fe1BAkj5fN8avK2dIsJA4fcZ_lvxaOX-drKrxW1cDpXmihhA9AKQYwWVJ9efi2hbtaGUgPiBKjzimhlEg" />
                            </div>
                            <div className="p-6">
                                <span className="text-xs font-bold text-secondary uppercase tracking-wider mb-2 block">Commercial</span>
                                <h3 className="font-headline-sm text-xl font-bold mb-2">Metro Office Tower</h3>
                                <p className="text-sm text-on-surface-variant">Installation of regenerative drives and destination dispatch systems for 12 cars.</p>
                            </div>
                        </div>
                        <div className="bg-surface-container-lowest rounded overflow-hidden shadow-sm border border-outline-variant/20">
                            <div className="h-48 bg-surface-dim relative">
                                <img alt="Industrial elevator" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXoTy1126uae8NUme6sp144vpbl0BrTd90CWJRfdQXhI_18X951L0_VGSa269yE5RbFesx7QH1nsGfY80BvrFGaTBIv3ijkrrkF4rj4VkYP7yBKOfSIlynM_a-eV1lPJMG1a_IZO2B8AD6QtKXNwTgEBAyiZ00cm-uKnG7a9FhBZ6J9o3L0c4DGsn-g_vWBA15dM7a1CLujh9WUEXvhyFbj_AVdRuxmzF__HLk5vFDUgz3xDZR6ohKLw" />
                            </div>
                            <div className="p-6">
                                <span className="text-xs font-bold text-secondary uppercase tracking-wider mb-2 block">Industrial</span>
                                <h3 className="font-headline-sm text-xl font-bold mb-2">Apex Logistics Hub</h3>
                                <p className="text-sm text-on-surface-variant">Heavy-duty freight elevator components engineered for high-capacity continuous use.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="font-headline-lg text-headline-lg text-primary mb-6">Why Choose Us</h2>
                        <ul className="space-y-6">
                            <li className="flex items-start">
                                <span className="material-symbols-outlined text-secondary mr-4 mt-1">check_circle</span>
                                <div>
                                    <h4 className="font-bold text-primary mb-1">OEM Quality Parts</h4>
                                    <p className="text-sm text-on-surface-variant">We source and manufacture components that meet or exceed original equipment manufacturer specifications.</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="material-symbols-outlined text-secondary mr-4 mt-1">check_circle</span>
                                <div>
                                    <h4 className="font-bold text-primary mb-1">Technical Expertise</h4>
                                    <p className="text-sm text-on-surface-variant">Our engineers provide comprehensive support for complex modernization and repair projects.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-surface-dim rounded h-64 md:h-full min-h-[300px] relative overflow-hidden">
                        <img alt="Engineering precision" className="w-full h-full object-cover absolute inset-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAZ4mHFfBwDyEi-3R3Ro8KjPPobq1tG8Sk_-ThliPAqOv2hEfNj8u5A_MV7sEQMQpeUXQl8uO2CAXGfaDfZY4yvR6a1Pxaob7QR6R8IUEEDUwQDmdMVoMVhRi415ZeXGVv9vXyvLIsyBxJp6t3qyANty9jhJbqq4mri6igfbZc6p1YjmoMn-qcK36ssvnU7lYq27rt9yLaMYGz0TexAL4PMfKQTtVuhyJNuK6o4BluA-TwgVqiHHMAaQ" />
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 bg-surface-container-lowest px-margin-mobile md:px-margin-desktop border-t border-outline-variant/20">
                <div className="max-w-3xl mx-auto">
                    <h2 className="font-headline-lg text-headline-lg text-primary mb-10 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        <details className="group border border-outline-variant/30 rounded bg-surface p-6 [&_summary::-webkit-details-marker]:hidden cursor-pointer">
                            <summary className="flex justify-between items-center font-bold text-primary list-none">
                                Do you supply parts for older elevator models?
                                <span className="material-symbols-outlined transition group-open:rotate-180">expand_more</span>
                            </summary>
                            <p className="mt-4 text-on-surface-variant text-sm">Yes, we maintain a vast inventory of components for legacy systems and can also reverse-engineer critical obsolete parts to keep older elevators running safely.</p>
                        </details>
                        <details className="group border border-outline-variant/30 rounded bg-surface p-6 [&_summary::-webkit-details-marker]:hidden cursor-pointer">
                            <summary className="flex justify-between items-center font-bold text-primary list-none">
                                What is your standard lead time for safety components?
                                <span className="material-symbols-outlined transition group-open:rotate-180">expand_more</span>
                            </summary>
                            <p className="mt-4 text-on-surface-variant text-sm">Most standard safety components are kept in stock and can ship within 24-48 hours. Custom engineered solutions typically require 2-4 weeks.</p>
                        </details>
                        <details className="group border border-outline-variant/30 rounded bg-surface p-6 [&_summary::-webkit-details-marker]:hidden cursor-pointer">
                            <summary className="flex justify-between items-center font-bold text-primary list-none">
                                Do you offer technical support for installation?
                                <span className="material-symbols-outlined transition group-open:rotate-180">expand_more</span>
                            </summary>
                            <p className="mt-4 text-on-surface-variant text-sm">Absolutely. Our engineering team is available for remote troubleshooting and we provide detailed technical documentation with all complex assemblies.</p>
                        </details>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-primary text-on-primary text-center px-margin-mobile md:px-margin-desktop technical-grid relative overflow-hidden">
                <div className="relative z-10 max-w-2xl mx-auto">
                    <h2 className="font-headline-lg text-3xl md:text-5xl font-bold mb-6">Looking for the Right Elevator Component?</h2>
                    <p className="text-on-primary/80 mb-10 text-lg">Our experts are ready to assist you with specs, pricing, and availability.</p>
                    <Link to="/projects" className="bg-secondary text-on-secondary-fixed font-label-sm text-label-sm h-[56px] px-10 rounded inline-flex items-center justify-center hover:bg-secondary/90 transition-colors shadow-lg">
                        Request a Quote
                    </Link>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-primary dark:bg-tertiary-container full-width py-12 md:py-20 border-t border-outline-variant/10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
                    <div className="col-span-1 md:col-span-1 mb-8 md:mb-0">
                        <div className="font-headline-md text-headline-md font-bold text-secondary-fixed tracking-tight mb-6">
                            PIXORA GROUP
                        </div>
                        <p className="font-body-md text-body-md text-on-primary/70 dark:text-on-tertiary/70 mb-6">
                            Engineering Excellence for a Sustainable Future.
                        </p>
                    </div>
                    <div className="col-span-1">
                        <h3 className="font-headline-sm text-headline-sm text-on-primary dark:text-on-tertiary mb-6">Solutions</h3>
                        <ul className="space-y-4">
                            <li><Link className="font-body-md text-body-md text-on-primary/70 dark:text-on-tertiary/70 hover:text-secondary-fixed transition-colors hover:translate-x-1 duration-200 block cursor-pointer" to="/solar-energy">Solar Solutions</Link></li>
                            <li><Link className="font-body-md text-body-md text-on-primary/70 dark:text-on-tertiary/70 hover:text-secondary-fixed transition-colors hover:translate-x-1 duration-200 block cursor-pointer" to="/construction">Civil Construction</Link></li>
                            <li><Link className="font-body-md text-body-md text-secondary-fixed font-bold hover:translate-x-1 duration-200 block cursor-pointer" to="/elevators">Vertical Mobility</Link></li>
                        </ul>
                    </div>
                    <div className="col-span-1">
                        <h3 className="font-headline-sm text-headline-sm text-on-primary dark:text-on-tertiary mb-6">Legal</h3>
                        <ul className="space-y-4">
                            <li><Link className="font-body-md text-body-md text-on-primary/70 dark:text-on-tertiary/70 hover:text-secondary-fixed transition-colors hover:translate-x-1 duration-200 block cursor-pointer" to="#">Privacy Policy</Link></li>
                            <li><Link className="font-body-md text-body-md text-on-primary/70 dark:text-on-tertiary/70 hover:text-secondary-fixed transition-colors hover:translate-x-1 duration-200 block cursor-pointer" to="#">Terms of Service</Link></li>
                        </ul>
                    </div>
                    <div className="col-span-1">
                        <h3 className="font-headline-sm text-headline-sm text-on-primary dark:text-on-tertiary mb-6">Contact</h3>
                        <ul className="space-y-4">
                            <li><Link className="font-body-md text-body-md text-on-primary/70 dark:text-on-tertiary/70 hover:text-secondary-fixed transition-colors hover:translate-x-1 duration-200 block cursor-pointer" to="#">Contact Support</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="w-full border-t border-outline-variant/10 mt-12 pt-8 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
                    <p className="font-body-md text-body-md text-on-primary/50 text-center">
                        © 2024 PIXORA GROUP Collective. All rights reserved. Engineering Excellence for a Sustainable Future.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Elevator;
