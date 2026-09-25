import React from 'react';
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.footerGrid}`}>
                <div className={styles.brandCol}>
                    <div className={styles.brandTitle}>Mama Engineering</div>
                    <p className={styles.brandDesc}>
                        Engineering Excellence for a Sustainable Future.
                    </p>
                </div>

                <div>
                    <h4 className={styles.colTitle}>Solutions</h4>
                    <ul className={styles.linkList}>
                        <li><Link to="/solar-energy" className={styles.link}>Solar Solutions</Link></li>
                        <li><Link to="/construction" className={styles.link}>Civil Construction</Link></li>
                        <li><Link to="/elevators" className={styles.link}>Vertical Mobility</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className={styles.colTitle}>Legal</h4>
                    <ul className={styles.linkList}>
                        <li><Link to="#" className={styles.link}>Privacy Policy</Link></li>
                        <li><Link to="#" className={styles.link}>Terms of Service</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className={styles.colTitle}>Contact</h4>
                    <ul className={styles.linkList}>
                        <li><Link to="#" className={styles.link}>Contact Support</Link></li>
                    </ul>
                </div>
            </div>

            <div className={`container ${styles.footerBottom}`}>
                <p>© 2024 Mama Engineering Collective. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
