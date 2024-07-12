import ServiceCard from '@/components/ServiceCard';
import SubPageHeader from '@/components/SubPageHeader';
import React from 'react';

const Services: React.FC = () => {
  return (
    <div>
      <SubPageHeader
        title="Services"
        subtitle="Our Services list is not limited to following ask us if you have any
            question regards to our services."
      />
      <section id="events" className="events section">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <ServiceCard
              title="Support with Community Participation"
              description="Enhances social engagement through participation in local
                    events and community activities."
              imageUrl="/img/events-item-1.jpg"
              link="/services/community-participation"
            />
            <ServiceCard
              title="Support with Development-Life Skills"
              description="Offers guidance in essential life skills, promoting
                    independence and personal growth."
              imageUrl="/img/events-item-2.jpg"
              link="/services/development-life-skills"
            />
          </div>
          <div className="row">
            <ServiceCard
              title="Support with Household Tasks"
              description="Provides assistance with daily domestic chores to maintain a
                    clean and organized living environment."
              imageUrl="/img/events-item-1.jpg"
            />
            <ServiceCard
              title="Help with Daily Tasks / Shared Living"
              description="Aids in routine tasks and shared living arrangements for
                    better daily life management."
              imageUrl="/img/events-item-2.jpg"
            />
          </div>
          <div className="row">
            <ServiceCard
              title="Assist with Travel/Transport"
              description="Facilitates safe and accessible transportation solutions for
                    increased mobility and independence."
              imageUrl="/img/events-item-1.jpg"
            />
            <ServiceCard
              title="Assist with Personal Activities (High)"
              description="Supports high-need personal activities, ensuring dignity and
                    well-being in personal care."
              imageUrl="/img/events-item-2.jpg"
              link="/services/personal-care-tasks"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
