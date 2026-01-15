import React from 'react';
import Header from '../components/Layout/Header/Header.jsx';
import Footer from '../components/Layout/Footer/Footer.jsx';

const Contact = ({ onNavigate }) => {
    return (
        <div>
            <Header onNavigate={onNavigate} />
            
            <section style={{ minHeight: 'calc(100vh - 200px)', padding: '60px 20px' }}>
                {/* Contact section content goes here */}
            </section>

            <Footer />
        </div>
    );
};

export default Contact;