import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    const getLinkClass = (path) => {
        const baseClass = "h-full flex items-center font-label-sm text-label-sm hover:bg-surface-container-high/50 dark:hover:bg-primary-container/50 transition-all duration-300";
        if (location.pathname === path) {
            return `${baseClass} text-secondary dark:text-secondary-fixed-dim font-bold border-b-2 border-secondary pb-1`;
        }
        return `${baseClass} text-on-surface-variant dark:text-on-tertiary-container hover:text-primary dark:hover:text-primary-fixed transition-colors`;
    };

    return (
        <nav className="bg-surface/80 dark:bg-primary-container/80 backdrop-blur-md w-full top-0 sticky h-14 md:h-16 border-b border-outline-variant/20 dark:border-outline/20 shadow-sm dark:shadow-none z-50">
            <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto h-full">
                <Link to="/" className="font-headline-md text-headline-md font-bold text-primary dark:text-inverse-primary tracking-tight">
                    PIXORA GROUP
                </Link>

                <div className="hidden md:flex space-x-8 items-center h-full">
                    <Link className={getLinkClass('/')} to="/">Home</Link>
                    <Link className={getLinkClass('/about')} to="/about">About</Link>
                    <Link className={getLinkClass('/solar-energy')} to="/solar-energy">Solar Energy</Link>
                    <Link className={getLinkClass('/construction')} to="/construction">Construction</Link>
                    <Link className={getLinkClass('/elevators')} to="/elevators">Elevator Parts</Link>
                    <Link className={getLinkClass('/projects')} to="/projects">Projects</Link>
                </div>

                <div className="flex items-center gap-4">
                    <Link to="/projects" className="hidden md:block bg-primary text-on-primary px-6 py-2 rounded font-label-sm text-label-sm hover:bg-surface-container-high/50 dark:hover:bg-primary-container/50 transition-all duration-300 scale-95 active:scale-90 touch-manipulation">
                        Get a Quote
                    </Link>
                    <button
                        className="md:hidden text-primary dark:text-inverse-primary p-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span className="material-symbols-outlined">
                            {isMobileMenuOpen ? 'close' : 'menu'}
                        </span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="absolute top-[56px] md:top-[64px] left-0 w-full bg-surface/95 dark:bg-primary-container/95 backdrop-blur-md border-b border-outline-variant/30 shadow-lg md:hidden z-50">
                    <div className="flex flex-col p-4 space-y-4">
                        <Link to="/" className={`font-label-sm ${location.pathname === '/' ? 'text-secondary font-bold' : 'text-primary dark:text-inverse-primary hover:text-secondary-fixed'} transition-colors`}>Home</Link>
                        <Link to="/about" className={`font-label-sm ${location.pathname === '/about' ? 'text-secondary font-bold' : 'text-primary dark:text-inverse-primary hover:text-secondary-fixed'} transition-colors`}>About</Link>
                        <Link to="/solar-energy" className={`font-label-sm ${location.pathname === '/solar-energy' ? 'text-secondary font-bold' : 'text-primary dark:text-inverse-primary hover:text-secondary-fixed'} transition-colors`}>Solar Energy</Link>
                        <Link to="/construction" className={`font-label-sm ${location.pathname === '/construction' ? 'text-secondary font-bold' : 'text-primary dark:text-inverse-primary hover:text-secondary-fixed'} transition-colors`}>Construction</Link>
                        <Link to="/elevators" className={`font-label-sm ${location.pathname === '/elevators' ? 'text-secondary font-bold' : 'text-primary dark:text-inverse-primary hover:text-secondary-fixed'} transition-colors`}>Elevator Parts</Link>
                        <Link to="/projects" className={`font-label-sm ${location.pathname === '/projects' ? 'text-secondary font-bold' : 'text-primary dark:text-inverse-primary hover:text-secondary-fixed'} transition-colors`}>Projects</Link>
                        <Link to="/projects" className="font-label-sm text-secondary-fixed font-bold">Get a Quote</Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
