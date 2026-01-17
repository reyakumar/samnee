import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './header.module.css';
import logo from '../../../assets/images/logo.png';
import { companyInfo } from '../../../config/companyInfo';

const Header = () => {
    const navigate = useNavigate();

    return (
        <header className={styles.header}>
            <div className={styles['header-container']}>
                {/* Logo Section */}
                <div 
                    className={styles['logo-section']}
                    onClick={() => navigate('/')}
                    style={{ cursor: 'pointer' }}
                >
                    <img src={logo} alt="Samnee Auto OPC" className={styles.logo} />
                    <span className={styles['company-name']}>{companyInfo.name}</span>
                </div>

                {/* Navigation Menu */}
                <nav className={styles.navbar}>
                    <ul className={styles['nav-menu']}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/products">Products</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>

                {/* Get Quote Button */}
                <div className={styles['quote-section']}>
                    <button 
                        className={styles['get-quote-btn']}
                        onClick={() => navigate('/contact')}
                    >
                        Get Quote
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;