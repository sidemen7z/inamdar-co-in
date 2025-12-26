import React, { useState } from 'react';
import styles from './ContactForm.module.css';

const ContactForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const services = [
        'Proprietorship',
        'Partnership',
        'One Person Company',
        'Limited Liability Partnership',
        'Private Limited Company',
        'Trust Registration',
        'Society Registration',
        'Digital Signature',
        'Udyam Registration',
        'Startup India Registration',
        'FSSAI Registration',
        'Professional Tax',
        'GST Registration',
        'GST Filing',
        'ITR Filing',
        'Accounting',
        'TDS Return Filing',
        'Trademark Registration',
        'ISO 9001-2015',
        'Other'
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            // Add to localStorage (mock database)
            const existingInquiries = JSON.parse(localStorage.getItem('inquiries') || '[]');
            const newInquiry = {
                id: Date.now(),
                ...formData,
                status: 'pending',
                date: new Date().toISOString().split('T')[0],
                createdAt: new Date().toISOString()
            };

            existingInquiries.push(newInquiry);
            localStorage.setItem('inquiries', JSON.stringify(existingInquiries));

            setSubmitStatus('success');
            setFormData({
                name: '',
                email: '',
                phone: '',
                service: '',
                message: ''
            });

            // Call parent callback if provided
            if (onSubmit) {
                onSubmit(newInquiry);
            }

            // Reset success message after 5 seconds
            setTimeout(() => setSubmitStatus(null), 5000);
        } catch (error) {
            console.error('Error submitting inquiry:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className={styles.contactFormWrapper}>
            <div className={styles.formHeader}>
                <h2>Get in Touch</h2>
                <p>Fill out the form below and we'll get back to you shortly</p>
            </div>

            {submitStatus === 'success' && (
                <div className={styles.successMessage}>
                    <i className="fas fa-check-circle"></i>
                    <p>Thank you! Your inquiry has been submitted successfully. We'll contact you soon.</p>
                </div>
            )}

            {submitStatus === 'error' && (
                <div className={styles.errorMessage}>
                    <i className="fas fa-exclamation-circle"></i>
                    <p>Something went wrong. Please try again or call us directly.</p>
                </div>
            )}

            <form onSubmit={handleSubmit} className={styles.contactForm}>
                <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                        <label htmlFor="name">Full Name *</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Enter your full name"
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="email">Email Address *</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="your@email.com"
                        />
                    </div>
                </div>

                <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                        <label htmlFor="phone">Phone Number *</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            placeholder="+91 XXXXX XXXXX"
                            pattern="[+]?[0-9\s-]+"
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="service">Service Required *</label>
                        <select
                            id="service"
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select a service</option>
                            {services.map(service => (
                                <option key={service} value={service}>{service}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="5"
                        placeholder="Tell us about your requirements..."
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className={styles.submitBtn}
                    disabled={isSubmitting}
                >
                    {isSubmitting ? (
                        <>
                            <i className="fas fa-spinner fa-spin"></i>
                            Submitting...
                        </>
                    ) : (
                        <>
                            <i className="fas fa-paper-plane"></i>
                            Submit Inquiry
                        </>
                    )}
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
