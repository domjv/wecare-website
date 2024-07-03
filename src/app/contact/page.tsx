import AddressSection from '@/components/AddressSection';
import ContactForm from '@/components/ContactForm';
import SubPageHeader from '@/components/SubPageHeader';
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact section">
      <SubPageHeader
        title="Contact"
        subtitle="Dedicated to high-quality, culturally inclusive care across a diverse range of services and programs."
      />
      <div className="container contact-container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          <AddressSection streetAddress="Street name" suburb="Suburb" state="QLD" postcode="4000" />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
