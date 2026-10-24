import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import { Link } from 'react-router-dom';

const ContactUs = () => {
    const [selectedService, setSelectedService] = useState('');

    const handleServiceChange = (e) => {
        setSelectedService(e.target.value);
    };

    return (
        <div className="bg-background text-on-background font-body-md min-h-screen flex flex-col selection:bg-secondary selection:text-on-secondary">
            {/* Navigation */}
            <Navbar />

            {/* Main Content */}
            <main className="flex-grow">
                {/* Hero Section */}
                <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
                    <div className="max-w-3xl">
                        <h1 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-xl md:text-headline-xl text-primary mb-6">
                            Let's Build Something Better Together.
                        </h1>
                        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
                            Have a project, requirement or question? Our team is ready to help you find the right solution.
                        </p>
                    </div>
                </section>

                {/* Contact Two-Column Layout */}
                <section className="py-16 bg-surface-container-lowest px-margin-mobile md:px-margin-desktop">
                    <div className="max-w-max-width mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-gutter">

                        {/* Left Column: Contact Info */}
                        <div className="lg:col-span-5 space-y-8">
                            {/* Quick Actions */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <a className="bg-white/70 backdrop-blur-[20px] border border-outline-variant/20 p-6 rounded flex items-start space-x-4 hover:border-secondary transition-colors group" href="tel:+94112589400">
                                    <div className="p-3 bg-surface-container rounded group-hover:bg-secondary-container transition-colors">
                                        <span className="material-symbols-outlined text-primary group-hover:text-on-secondary-container">call</span>
                                    </div>
                                    <div>
                                        <h3 className="font-label-sm text-label-sm text-on-surface-variant mb-1 uppercase tracking-wider">Call Us</h3>
                                        <p className="font-body-md text-body-md text-primary font-medium">+94 (11) 258-9400</p>
                                    </div>
                                </a>
                                <a className="bg-white/70 backdrop-blur-[20px] border border-outline-variant/20 p-6 rounded flex items-start space-x-4 hover:border-secondary transition-colors group" href="mailto:projects@apexengineering.lk">
                                    <div className="p-3 bg-surface-container rounded group-hover:bg-secondary-container transition-colors">
                                        <span className="material-symbols-outlined text-primary group-hover:text-on-secondary-container">mail</span>
                                    </div>
                                    <div>
                                        <h3 className="font-label-sm text-label-sm text-on-surface-variant mb-1 uppercase tracking-wider">Email Us</h3>
                                        <p className="font-body-md text-body-md text-primary font-medium break-all">projects@pixora.lk</p>
                                    </div>
                                </a>
                            </div>

                            {/* Office & Hours Card */}
                            <div className="bg-white/70 backdrop-blur-[20px] border border-outline-variant/20 p-8 rounded space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="p-3 bg-surface-container rounded">
                                        <span className="material-symbols-outlined text-primary">location_on</span>
                                    </div>
                                    <div>
                                        <h3 className="font-label-sm text-label-sm text-on-surface-variant mb-2 uppercase tracking-wider">Office Address</h3>
                                        <p className="font-body-md text-body-md text-primary">
                                            PIXORA GROUP Collective HQ<br />
                                            No. 450, R.A. De Mel Mawatha,<br />
                                            Colombo 03, Sri Lanka
                                        </p>
                                    </div>
                                </div>
                                <div className="w-full h-px bg-outline-variant/30"></div>
                                <div className="flex items-start space-x-4">
                                    <div className="p-3 bg-surface-container rounded">
                                        <span className="material-symbols-outlined text-primary">schedule</span>
                                    </div>
                                    <div>
                                        <h3 className="font-label-sm text-label-sm text-on-surface-variant mb-2 uppercase tracking-wider">Business Hours</h3>
                                        <p className="font-body-md text-body-md text-primary">
                                            Mon - Fri: 08:00 - 18:00 IST<br />
                                            24/7 Rapid Emergency Response
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Map Placeholder */}
                            <div className="rounded overflow-hidden border border-outline-variant/30 h-64 relative">
                                <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjjQXAUBH4JHNcu9fGSH-HsxiDotFIsKKOak35UbgCz90EwgJAs7ntc69w1_u7WDHKunoyqIXMqTybmg0n_Do1Qb2AY3ID_jMHPH552z7bC-23XPHTmRCzQNHmUGFGtjppXtaZb6M0OmP6I2sZpXGbtXtoI715kyxrz1lN0FZ3wOI4umrM8Zqduh7ASXsr3mQ6U6GNeWbJdoG918zqonn5C_NnBJk_7MFMF3njsA9pGdHci4wzVN5INw" alt="Map Location" />
                                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent">
                                    <span className="font-label-sm text-label-sm text-white drop-shadow-md">Find Us</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Inquiry Form */}
                        <div className="lg:col-span-7">
                            <div className="bg-white border border-outline-variant/20 rounded p-8 md:p-12 shadow-sm relative overflow-hidden">
                                {/* Decorative element */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-surface-container-low rounded-bl-full -z-10"></div>

                                <h2 className="font-headline-md text-headline-md text-primary mb-8">Tell Us About Your Project</h2>

                                <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Inquiry Sent!"); }}>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block font-label-sm text-label-sm text-on-surface-variant mb-2" htmlFor="fullName">Full Name <span className="text-error">*</span></label>
                                            <input className="w-full bg-surface-bright border border-outline-variant rounded px-4 py-3 font-body-md text-body-md focus:outline-none focus:border-primary focus:shadow-[0_2px_0_0_#feb700] transition-all" id="fullName" required type="text" />
                                        </div>
                                        <div>
                                            <label className="block font-label-sm text-label-sm text-on-surface-variant mb-2" htmlFor="companyName">Company Name</label>
                                            <input className="w-full bg-surface-bright border border-outline-variant rounded px-4 py-3 font-body-md text-body-md focus:outline-none focus:border-primary focus:shadow-[0_2px_0_0_#feb700] transition-all" id="companyName" type="text" />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block font-label-sm text-label-sm text-on-surface-variant mb-2" htmlFor="email">Email Address <span className="text-error">*</span></label>
                                            <input className="w-full bg-surface-bright border border-outline-variant rounded px-4 py-3 font-body-md text-body-md focus:outline-none focus:border-primary focus:shadow-[0_2px_0_0_#feb700] transition-all" id="email" required type="email" />
                                        </div>
                                        <div>
                                            <label className="block font-label-sm text-label-sm text-on-surface-variant mb-2" htmlFor="phone">Phone Number <span className="text-error">*</span></label>
                                            <input className="w-full bg-surface-bright border border-outline-variant rounded px-4 py-3 font-body-md text-body-md focus:outline-none focus:border-primary focus:shadow-[0_2px_0_0_#feb700] transition-all" id="phone" required type="tel" />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block font-label-sm text-label-sm text-on-surface-variant mb-2" htmlFor="service">Service Required <span className="text-error">*</span></label>
                                        <div className="relative">
                                            <select
                                                className="appearance-none w-full bg-surface-bright border border-outline-variant rounded px-4 py-3 font-body-md text-body-md focus:outline-none focus:border-primary focus:shadow-[0_2px_0_0_#feb700] transition-all pr-10 cursor-pointer"
                                                id="service"
                                                required
                                                value={selectedService}
                                                onChange={handleServiceChange}
                                            >
                                                <option disabled value="">Select a service...</option>
                                                <option value="solar">Solar Energy</option>
                                                <option value="construction">Civil Construction</option>
                                                <option value="elevator">Elevator Parts</option>
                                                <option value="general">General Inquiry</option>
                                            </select>
                                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-outline">
                                                <span className="material-symbols-outlined">expand_more</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Dynamic Fields */}
                                    {selectedService === 'solar' && (
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block font-label-sm text-label-sm text-on-surface-variant mb-2">Property Type</label>
                                                <select className="appearance-none w-full bg-surface-bright border border-outline-variant rounded px-4 py-3 font-body-md text-body-md focus:outline-none focus:border-primary focus:shadow-[0_2px_0_0_#feb700] transition-all cursor-pointer">
                                                    <option>Commercial</option>
                                                    <option>Industrial</option>
                                                    <option>Utility Scale</option>
                                                    <option>Residential</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label className="block font-label-sm text-label-sm text-on-surface-variant mb-2">Energy Requirement</label>
                                                <input type="text" placeholder="e.g. 50kW, 1MW" className="w-full bg-surface-bright border border-outline-variant rounded px-4 py-3 font-body-md text-body-md focus:outline-none focus:border-primary focus:shadow-[0_2px_0_0_#feb700] transition-all" />
                                            </div>
                                        </div>
                                    )}

                                    {selectedService === 'construction' && (
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block font-label-sm text-label-sm text-on-surface-variant mb-2">Project Type</label>
                                                <select className="appearance-none w-full bg-surface-bright border border-outline-variant rounded px-4 py-3 font-body-md text-body-md focus:outline-none focus:border-primary focus:shadow-[0_2px_0_0_#feb700] transition-all cursor-pointer">
                                                    <option>Infrastructure</option>
                                                    <option>Commercial Building</option>
                                                    <option>Industrial Facility</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label className="block font-label-sm text-label-sm text-on-surface-variant mb-2">Scope Estimate</label>
                                                <input type="text" placeholder="Budget or Square Footage" className="w-full bg-surface-bright border border-outline-variant rounded px-4 py-3 font-body-md text-body-md focus:outline-none focus:border-primary focus:shadow-[0_2px_0_0_#feb700] transition-all" />
                                            </div>
                                        </div>
                                    )}

                                    {selectedService === 'elevator' && (
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="md:col-span-2">
                                                <label className="block font-label-sm text-label-sm text-on-surface-variant mb-2">Part Number / Model</label>
                                                <input type="text" placeholder="If known" className="w-full bg-surface-bright border border-outline-variant rounded px-4 py-3 font-body-md text-body-md focus:outline-none focus:border-primary focus:shadow-[0_2px_0_0_#feb700] transition-all" />
                                            </div>
                                        </div>
                                    )}

                                    <div>
                                        <label className="block font-label-sm text-label-sm text-on-surface-variant mb-2" htmlFor="location">Project Location</label>
                                        <input className="w-full bg-surface-bright border border-outline-variant rounded px-4 py-3 font-body-md text-body-md focus:outline-none focus:border-primary focus:shadow-[0_2px_0_0_#feb700] transition-all" id="location" placeholder="City, State, or Region" type="text" />
                                    </div>

                                    <div>
                                        <label className="block font-label-sm text-label-sm text-on-surface-variant mb-2" htmlFor="message">Message <span className="text-error">*</span></label>
                                        <textarea className="w-full bg-surface-bright border border-outline-variant rounded px-4 py-3 font-body-md text-body-md focus:outline-none focus:border-primary focus:shadow-[0_2px_0_0_#feb700] transition-all resize-y" id="message" required rows="4"></textarea>
                                    </div>

                                    <button className="bg-primary text-on-primary font-label-sm text-label-sm px-8 py-4 rounded hover:bg-primary/90 transition-colors h-14 w-full md:w-auto inline-flex items-center justify-center space-x-2 group" type="submit">
                                        <span>Send Inquiry</span>
                                        <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA Section */}
                <section className="py-24 bg-primary dark:bg-tertiary-container relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "32px 32px" }}></div>
                    <div className="px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto relative z-10 text-center">
                        <h2 className="font-headline-md text-headline-md md:font-headline-lg md:text-headline-lg text-on-primary mb-6">Have a Requirement?</h2>
                        <p className="font-body-lg text-body-lg text-on-primary/80 max-w-2xl mx-auto mb-10">
                            Connect with our engineering specialists today to discuss how we can bring precision and sustainability to your next project.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
                            <button className="bg-secondary text-on-secondary-fixed font-label-sm text-label-sm px-8 py-4 rounded hover:bg-secondary-container transition-colors h-14 w-full sm:w-auto">
                                Request a Quote
                            </button>
                            <button className="bg-transparent border border-outline-variant/30 text-on-primary font-label-sm text-label-sm px-8 py-4 rounded hover:bg-white/5 transition-colors h-14 w-full sm:w-auto flex items-center justify-center space-x-2">
                                <span className="material-symbols-outlined">call</span>
                                <span>Call Us</span>
                            </button>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-primary dark:bg-tertiary-container text-on-primary dark:text-on-tertiary py-12 md:py-20 border-t border-outline-variant/10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
                    {/* Brand Column */}
                    <div className="md:col-span-1 flex flex-col space-y-6">
                        <div className="font-headline-md text-headline-md font-bold text-secondary-fixed tracking-tight">
                            PIXORA GROUP
                        </div>
                        <p className="font-body-md text-body-md text-on-primary/70 dark:text-on-tertiary/70 max-w-xs">
                            Engineering Excellence for a Sustainable Future.
                        </p>
                    </div>
                    {/* Links Columns */}
                    <div className="md:col-span-2 grid grid-cols-2 gap-8">
                        <div>
                            <h4 className="font-label-sm text-label-sm text-secondary-fixed mb-4 uppercase tracking-wider">Solutions</h4>
                            <ul className="space-y-3">
                                <li><Link className="text-on-primary/70 dark:text-on-tertiary/70 hover:text-secondary-fixed transition-colors inline-block hover:translate-x-1 duration-200" to="/solar-energy">Solar Solutions</Link></li>
                                <li><Link className="text-on-primary/70 dark:text-on-tertiary/70 hover:text-secondary-fixed transition-colors inline-block hover:translate-x-1 duration-200" to="/construction">Civil Construction</Link></li>
                                <li><Link className="text-on-primary/70 dark:text-on-tertiary/70 hover:text-secondary-fixed transition-colors inline-block hover:translate-x-1 duration-200" to="/elevators">Vertical Mobility</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-label-sm text-label-sm text-secondary-fixed mb-4 uppercase tracking-wider">Legal &amp; Support</h4>
                            <ul className="space-y-3">
                                <li><Link className="text-on-primary/70 dark:text-on-tertiary/70 hover:text-secondary-fixed transition-colors inline-block hover:translate-x-1 duration-200" to="#">Privacy Policy</Link></li>
                                <li><Link className="text-on-primary/70 dark:text-on-tertiary/70 hover:text-secondary-fixed transition-colors inline-block hover:translate-x-1 duration-200" to="#">Terms of Service</Link></li>
                                <li><Link className="text-on-primary/70 dark:text-on-tertiary/70 hover:text-secondary-fixed transition-colors inline-block hover:translate-x-1 duration-200" to="#">Contact Support</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="md:col-span-1 mt-8 md:mt-0 pt-8 md:pt-0 border-t border-outline-variant/10 md:border-0 flex items-end">
                        <p className="font-body-md text-body-md text-on-primary/50 text-sm">
                            © 2026 PIXORA GROUP Collective. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default ContactUs;
