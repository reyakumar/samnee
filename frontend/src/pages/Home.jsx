import React from 'react';
import Header from '../components/Layout/Header/Header.jsx';
import HeroSection from '../components/HeroSection/HeroSection.jsx';
import Footer from '../components/Layout/Footer/Footer.jsx';

export default function Home({ onNavigate }) {
    return (
        <div>
            <Header onNavigate={onNavigate} />
            <HeroSection />
            {/* Your content here */}
            <div className="content-wrapper">
                {/* Additional sections can be added here */}
            </div>

            <Footer />
        </div>
    );
}