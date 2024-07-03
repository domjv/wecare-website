'use client';
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '', subject: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="col-lg-8">
      <form
        name="contact"
        method="POST"
        className="php-email-form"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        data-aos="fade-up"
        data-aos-delay="200"
        onSubmit={(e) => {
          e.preventDefault();
          const form = e.target as HTMLFormElement;
          fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams(new FormData(form) as any).toString(),
          })
            .then(() => alert('Success!'))
            .catch((error) => alert(error));
        }}
      >
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don&apos;t fill this out: <input name="bot-field" onChange={handleChange} />
          </label>
        </p>
        <div className="row gy-4">
          <div className="col-md-6">
            <input type="text" name="name" className="form-control" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
          </div>

          <div className="col-md-6 ">
            <input type="email" className="form-control" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
          </div>

          <div className="col-md-12">
            <input type="text" className="form-control" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
          </div>

          <div className="col-md-12">
            <textarea className="form-control" name="message" rows={6} placeholder="Message" value={formData.message} onChange={handleChange} required></textarea>
          </div>

          <div className="col-md-12 text-center">
            <div className="loading">Loading</div>
            <div className="error-message"></div>
            <div className="sent-message">Your message has been sent. Thank you!</div>

            <button type="submit">Send Message</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
