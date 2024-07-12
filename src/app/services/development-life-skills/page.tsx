import ImageHeadingDescription from '@/components/ImageHeadingDescription';
import PageRightPanel from '@/components/PageRightPanel';
import SubPageHeader from '@/components/SubPageHeader';
import React from 'react';

const DevelopmentLifeSkills: React.FC = () => {
    return (
        <div>
      <SubPageHeader
        title="Development-Life Skills"
        parentTitle='Services'
        parentLink='/services'
        subtitle="Supports community engagement through social activities,
                    events, and programs, enhancing interaction, skill learning,
                    and bonding."
      />
      <section id="courses-course-details" className="courses-course-details section">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <ImageHeadingDescription
              imageUrl="/img/course-details.jpg"
              heading="Support with Development-Life Skills"
              description1="By offering assistance and guidance in developing life skills
                and giving participants Choice and Control can empower
                individuals with disabilities to become more independent,
                confident, and active community participants. It's important to
                support the participants in their specific needs and goals.
                Providing them regular reinforcement as they progress in their
                Daily skill development."
              featureArray={[
                'Understanding personal hygiene',
                'Communication skills',
                'Money management',
                'Prioritise tasks',
                'Set goals',
                'Organise schedules',
                'Develop and practise appropriate responses to unsafe situations',
                'Cooking and nutrition',
                'Basic cooking skills',
                'Healthy eating habits',

              ]}
            />
            <div className="col-lg-4">
              <PageRightPanel subText="Support with Community Participation" subTextLink='/services/community-participation' />
              <PageRightPanel subText="Support with Development-Life Skills" subTextLink='/services/development-life-skills' className='active' />
              <PageRightPanel subText="Assist with Personal Activities/(high)" subTextLink='/services/personal-care-tasks' />
              <PageRightPanel subText="Help with Daily Tasks / shared living" />
              <PageRightPanel subText="Assist with Travel/transport" />
              <PageRightPanel subText="Assist with life stage, transition" />
            </div>
          </div>
        </div>
      </section>
    </div>
    );
};

export default DevelopmentLifeSkills;