import React from 'react';
import styles from './header.module.css';
import logo from '../../../assets/images/logo.png';
import { companyInfo } from '../../../config/companyInfo';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles['header-container']}>
                {/* Logo Section */}
                <div className={styles['logo-section']}>
                    <img src={logo} alt="Samnee Auto OPC" className={styles.logo} />
                    <span className={styles['company-name']}>{companyInfo.name}</span>
                </div>

                {/* Navigation Menu */}
                <nav className={styles.navbar}>
                    <ul className={styles['nav-menu']}>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#products">Products</a></li>
                        <li><a href="#contact">Contact</a></li>
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