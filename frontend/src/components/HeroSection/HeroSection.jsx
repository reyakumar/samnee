import React from 'react';
import styles from './HeroSection.module.css';

const HeroSection = () => {
    return (
        <section className={styles.heroSection}>
            <div className={styles.heroContainer}>
                {/* Badge */}
                <div className={styles.heroBadge}>
                    <svg 
                        className={styles.badgeIcon}
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2"
                    >
                        <path d="M3 3h18v18H3V3z"/>
                        <path d="M8 8h8M8 12h8M8 16h5"/>
                    </svg>
                    <span>Industry Leading Since 1989</span>
                </div>

                {/* Main Heading */}
                <h1 className={styles.heroTitle}>
                    Precision-Engineered{' '}
                    <span className={styles.heroTitleHighlight}>
                        Aluminum & Zinc Castings
                    </span>
                </h1>

                {/* Subtitle */}
                <p className={styles.heroSubtitle}>
                    Leading manufacturer specializing in precision-engineered aluminum and zinc castings for diverse industries worldwide.
                </p>

                {/* CTA Buttons */}
                <div className={styles.heroButtons}>
                    <button className={styles.btnPrimary}>
                        Explore Products
                        <svg 
                            className={styles.btnArrow}
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="2"
                        >
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                    </button>
                    <button className={styles.btnSecondary}>
                        Get in Touch
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;