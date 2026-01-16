import React, { useState } from 'react';
import Header from '../components/Layout/Header/Header.jsx';
import Footer from '../components/Layout/Footer/Footer.jsx';
import styles from './Product.module.css';

const aluminumProducts = [
    {
        id: 1,
        title: 'High-Pressure Die Castings',
        description: 'Precision aluminum castings for automotive and industrial applications',
        image: '/api/placeholder/400/300'
    },
    {
        id: 2,
        title: 'Gravity Die Castings',
        description: 'Superior quality castings for aerospace and defense industries',
        image: '/api/placeholder/400/300'
    },
    {
        id: 3,
        title: 'Sand Castings',
        description: 'Large-scale aluminum castings for heavy machinery components',
        image: '/api/placeholder/400/300'
    },
    {
        id: 4,
        title: 'Investment Castings',
        description: 'Complex geometries with excellent surface finish',
        image: '/api/placeholder/400/300'
    }
];

const zincProducts = [
    {
        id: 1,
        title: 'Zinc Die Castings',
        description: 'High-precision zinc castings for electronics and consumer goods',
        image: '/api/placeholder/400/300'
    },
    {
        id: 2,
        title: 'Zinc Alloy Castings',
        description: 'Durable zinc alloy solutions for automotive components',
        image: '/api/placeholder/400/300'
    },
    {
        id: 3,
        title: 'Custom Zinc Castings',
        description: 'Tailored zinc casting solutions for specialized applications',
        image: '/api/placeholder/400/300'
    },
    {
        id: 4,
        title: 'Precision Zinc Castings',
        description: 'Fine-tolerance zinc castings with superior dimensional accuracy',
        image: '/api/placeholder/400/300'
    }
];

export default function Product({ onNavigate }) {
    const [activeTab, setActiveTab] = useState('aluminum');
    const currentProducts = activeTab === 'aluminum' ? aluminumProducts : zincProducts;

    return (
        <div className={styles.productPage}>
            <Header onNavigate={onNavigate} />
            
            <section className={styles.productSection}>
                <div className={styles.container}>
                    {/* Header */}
                    <div className={styles.header}>
                        <h1 className={styles.title}>Our Products</h1>
                        <p className={styles.subtitle}>
                            Explore our range of high-quality casting solutions
                        </p>
                    </div>

                    {/* Tab Navigation */}
                    <div className={styles.tabContainer}>
                        <button
                            className={`${styles.tab} ${activeTab === 'aluminum' ? styles.activeTab : ''}`}
                            onClick={() => setActiveTab('aluminum')}
                        >
                            Aluminum Castings
                        </button>
                        <button
                            className={`${styles.tab} ${activeTab === 'zinc' ? styles.activeTab : ''}`}
                            onClick={() => setActiveTab('zinc')}
                        >
                            Zinc Castings
                        </button>
                    </div>

                    {/* Product Cards Grid */}
                    <div className={styles.productsGrid}>
                        {currentProducts.map((product) => (
                            <div key={product.id} className={styles.productCard}>
                                <div className={styles.cardImageContainer}>
                                    <div className={styles.cardImagePlaceholder}>
                                        <span className={styles.imageTitle}>{product.title}</span>
                                    </div>
                                </div>
                                <div className={styles.cardContent}>
                                    <h3 className={styles.cardTitle}>{product.title}</h3>
                                    <p className={styles.cardDescription}>{product.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
