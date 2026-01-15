import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import Header from '../components/Layout/Header/Header.jsx';
import Footer from '../components/Layout/Footer/Footer.jsx';
import styles from './Contact.module.css';

const Contact = ({ onNavigate }) => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        company: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
    };

    return (
        <div className={styles.contactPage}>
            <Header onNavigate={onNavigate} />
            
            <section className={styles.contactSection}>
                <div className={styles.container}>
                    {/* Header */}
                    <div className={styles.header}>
                        <h1 className={styles.title}>Contact Us</h1>
                        <p className={styles.subtitle}>
                            Get in touch with our team to discuss your casting requirements
                        </p>
                    </div>

                    {/* Main Content - Two Column Layout */}
                    <div className={styles.content}>
                        {/* Left Column - Contact Form */}
                        <div className={styles.formContainer}>
                            <h2 className={styles.formTitle}>Send us a Message</h2>
                            <form onSubmit={handleSubmit} className={styles.form}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="fullName" className={styles.label}>
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="fullName"
                                        name="fullName"
                                        placeholder="John Smith"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        required
                                        className={styles.input}
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="email" className={styles.label}>
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="john@company.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className={styles.input}
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="phone" className={styles.label}>
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        placeholder="+1 (555) 123-4567"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className={styles.input}
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="company" className={styles.label}>
                                        Company Name
                                    </label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        placeholder="Your Company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        className={styles.input}
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="message" className={styles.label}>
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        placeholder="Tell us about your project requirements..."
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={6}
                                        className={styles.textarea}
                                    />
                                </div>

                                <button type="submit" className={styles.submitButton}>
                                    Send Message
                                </button>
                            </form>
                        </div>

                        {/* Right Column - Contact Information Cards */}
                        <div className={styles.infoContainer}>
                            {/* Phone Card */}
                            <div className={styles.infoCard}>
                                <div className={styles.iconWrapper}>
                                    <Phone className={styles.icon} />
                                </div>
                                <h3 className={styles.cardTitle}>Phone</h3>
                                <p className={styles.cardText}>+1 (555) 123-4567</p>
                                <p className={styles.cardText}>Mon-Fri 8:00 AM - 6:00 PM</p>
                            </div>

                            {/* Email Card */}
                            <div className={styles.infoCard}>
                                <div className={styles.iconWrapper}>
                                    <Mail className={styles.icon} />
                                </div>
                                <h3 className={styles.cardTitle}>Email</h3>
                                <p className={styles.cardText}>info@precisioncast.com</p>
                                <p className={styles.cardText}>We'll respond within 24 hours</p>
                            </div>

                            {/* Location Card */}
                            <div className={styles.infoCard}>
                                <div className={styles.iconWrapper}>
                                    <MapPin className={styles.icon} />
                                </div>
                                <h3 className={styles.cardTitle}>Location</h3>
                                <p className={styles.cardText}>
                                    1234 Industrial Parkway, Manufacturing District, IN 46250
                                </p>
                                <p className={styles.cardText}>Visit us by appointment</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Contact;
