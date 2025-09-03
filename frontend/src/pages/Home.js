import React, { useState } from 'react';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import ContactForm from '../components/ContactForm';
import '../styles/Home.css';

const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      
      const result = await response.json();
      
      if (response.ok) {
        setSubmitStatus({ type: 'success', message: 'Thank you for your message! I will get back to you soon.' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus({ type: 'error', message: result.error || 'Something went wrong. Please try again.' });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({ type: 'error', message: 'Network error. Please check your connection and try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="home">
      <Hero />
      <Skills />
      <section id="contact" className="contact-section">
        <div className="container">
          <h2>Get In Touch</h2>
          <p>I'm always interested in hearing about new opportunities and exciting projects.</p>
          
          {/* Display submission status */}
          {submitStatus && (
            <div className={`alert ${submitStatus.type === 'success' ? 'alert-success' : 'alert-error'}`}>
              {submitStatus.message}
            </div>
          )}
          
          <ContactForm 
            formData={formData}
            setFormData={setFormData}
            onSubmit={handleSubmit}
            isSubmitting={isSubmitting}
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
