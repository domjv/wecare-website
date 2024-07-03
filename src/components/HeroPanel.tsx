'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';

const HeroPanel: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);
  return (
    <section id="hero" className="hero section">
      <div data-aos="fade-in"></div>
      <Image src="/img/hero-bg.jpg" layout="fill" alt="" />

      <div className="container">
        <h2 data-aos="fade-up" data-aos-delay="100">
          We Care Support
        </h2>
        <p data-aos="fade-up" data-aos-delay="200">
        Enhancing Well-being and Independence Through Compassionate, Personalised Support
        </p>
        <div className="d-flex mt-4" data-aos="fade-up" data-aos-delay="300">
          <a href="courses.html" className="btn-get-started">
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroPanel;
