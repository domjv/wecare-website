import ImageHeadingDescription from '@/components/ImageHeadingDescription';
import PageRightPanel from '@/components/PageRightPanel';
import SubPageHeader from '@/components/SubPageHeader';
import React from 'react';

const PersonalCareTasks: React.FC = () => {
  return (
    <div>
      <SubPageHeader
        title="Community Participation"
        parentTitle="Services"
        parentLink="/services"
        subtitle="Supports community engagement through social activities,
                    events, and programs, enhancing interaction, skill learning,
                    and bonding."
      />
      <section id="courses-course-details" className="courses-course-details section">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <ImageHeadingDescription
              imageUrl="/img/course-details.jpg"
              heading="Support with Community Participation"
              description1="Providing Support to Individuals in Engaging with their
                Communities and participating in social activities, events, and
                recreational programs. Participants encourage to interact with
                others, learn new skills, and create bond by engaging in social
                activities, events, and recreational programs."
              featureArray={[
                'Learning Skills (participating into educational programs or activities)',
                'Assisting in transportation',
                'Volunteer Program',
                'Community event program many more',
              ]}
            />
            <div className="col-lg-4">
              <PageRightPanel
                subText="Support with Community Participation"
                subTextLink="/services/community-participation"
              />
              <PageRightPanel
                subText="Support with Development-Life Skills"
                subTextLink="/services/development-life-skills"
              />
              <PageRightPanel
                subText="Assist with Personal Activities/(high)"
                subTextLink="/services/personal-care-tasks"
                className="active"
              />
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

export default PersonalCareTasks;
