'use client';
import React from 'react';
import CountItem from './CountItem';

const CountSection: React.FC = () => {
  return (
    <section id="counts" className="section counts">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          <CountItem itemCount={1232} name="Students" />
          <CountItem itemCount={64} name="Courses" />
          <CountItem itemCount={42} name="Events" />
          <CountItem itemCount={24} name="Trainers" />
        </div>
      </div>
    </section>
  );
};

export default CountSection;
