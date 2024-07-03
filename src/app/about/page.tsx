import AboutSection from '@/components/AboutSection';
import SubPageHeader from '@/components/SubPageHeader';
import React from 'react';

const About: React.FC = () => {
  return (
    <div>
      <SubPageHeader
        title="About"
        subtitle="Dedicated to high-quality, culturally inclusive care across a diverse range of services and programs."
      />
      <AboutSection
        title="Who We Are"
        description1="At We Care Support, we offer high-quality care through a diverse, multilingual team, ensuring all participants feel supported regardless of background. Our services include In-Home, Community, and Domestic Assistance, complemented by group activities and day programs that boost well-being, skills development, and confidence for our participants."
        description2="Our Services list is not limited to following ask us if you have any question regards to our services."
        image="/img/about.jpg"
        features={[
          'Support with Community Participation',
          'Support with Development-Life Skills',
          'Assistance With Personal Care Tasks',
          'Support with Household Tasks',
          'Help with Daily Tasks / shared living',
          'Assist with Travel/transport',
          'Assist with life stage, transition',
        ]}
      />
    </div>
  );
};

export default About;
