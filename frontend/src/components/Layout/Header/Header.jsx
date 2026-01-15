import React from 'react';
import styles from './header.module.css';
import logo from '../../../assets/images/logo.png';
import { companyInfo } from '../../../config/companyInfo';

const Header = ({ onNavigate }) => {
    const handleNavClick = (page) => {
        if (onNavigate) {
            onNavigate(page);
        }
    };

    return (
        <header className={styles.header}>
            <div className={styles['header-container']}>
                {/* Logo Section */}
                <div 
                    className={styles['logo-section']}
                    onClick={() => handleNavClick('home')}
                    style={{ cursor: 'pointer' }}
                >
                    <img src={logo} alt="Samnee Auto OPC" className={styles.logo} />
                    <span className={styles['company-name']}>{companyInfo.name}</span>
                </div>

                {/* Navigation Menu */}
                <nav className={styles.navbar}>
                    <ul className={styles['nav-menu']}>
                        <li><a onClick={() => handleNavClick('home')}>Home</a></li>
                        <li><a onClick={() => handleNavClick('products')}>Products</a></li>
                        <li><a onClick={() => handleNavClick('contact')}>Contact</a></li>
                    </ul>
                </nav>

                {/* Get Quote Button */}
                <div className={styles['quote-section']}>
                    <button className={styles['get-quote-btn']}>Get Quote</button>
                </div>
            </div>
        </header>
    );
};

export default Header;