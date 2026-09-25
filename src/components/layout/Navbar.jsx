import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            <div className={`container ${styles.navInner}`}>
                <Link to="/" className={styles.brand}>
                    Mama Engineering
                </Link>

                <div className={`${styles.navLinks} ${isOpen ? styles.open : ''}`}>
                    <Link to="/" className={styles.navLink}>Home</Link>
                    <Link to="/about" className={styles.navLink}>About</Link>
                    <Link to="/solar-energy" className={styles.navLink}>Solar Energy</Link>
                    <Link to="/construction" className={styles.navLink}>Construction</Link>
                    <Link to="/elevators" className={styles.navLink}>Elevator Parts</Link>
                </div>

                <div className={styles.navActions}>
                    <button className={`btn btn-primary ${styles.quoteBtn}`}>Get a Quote</button>
                    <button className={styles.mobileToggle} onClick={() => setIsOpen(!isOpen)}>
                        <span className="material-symbols-outlined">menu</span>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
