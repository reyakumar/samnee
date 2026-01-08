import React from 'react';
import styles from './footer.module.css';
import { companyInfo } from '../../../config/companyInfo';
import { Factory } from 'lucide-react';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                {/* Company Info Section */}
                <div className={styles.footerSection}>
                    <div className={styles.brandSection}>
                        <h3 className={styles.companyName}>{companyInfo.name}</h3>
                    </div>
                    <p className={styles.tagline}>{companyInfo.tagline}</p>
                </div>

                {/* Quick Links Section */}
                <div className={styles.footerSection}>
                    <h4 className={styles.sectionTitle}>Quick Links</h4>
                    <ul className={styles.linkList}>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#products">Products</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>

                {/* Products Section */}
                <div className={styles.footerSection}>
                    <h4 className={styles.sectionTitle}>Our Products</h4>
                    <ul className={styles.linkList}>
                        <li><a href="#aluminum">Aluminum Castings</a></li>
                        <li><a href="#zinc">Zinc Castings</a></li>
                        <li><a href="#custom">Custom Solutions</a></li>
                    </ul>
                </div>

                {/* Contact Section */}
                <div className={styles.footerSection}>
                    <h4 className={styles.sectionTitle}>Contact Us</h4>
                    <ul className={styles.contactList}>
                        <li>
                            <span className={styles.icon}>📞</span>
                            <a href={`tel:${companyInfo.phone}`}>{companyInfo.phone}</a>
                        </li>
                        <li>
                            <span className={styles.icon}>✉️</span>
                            <a href={`mailto:${companyInfo.email}`}>{companyInfo.email}</a>
                        </li>
                        <li>
                            <span className={styles.icon}>📍</span>
                            <span>
                                {companyInfo.address.street}, {companyInfo.address.city}, {companyInfo.address.state} {companyInfo.address.zip}
                            </span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className={styles.bottomBar}>
                <p className={styles.copyright}>
                    © {new Date().getFullYear()} {companyInfo.name}. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;