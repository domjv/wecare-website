import Image from 'next/image';
import React from 'react';

interface AboutSectionProps {
  title: string;
  description1: string;
  description2: string;
  image: string;
  features?: string[]; // optional
  readMoreText?: string; // optional
  readMoreLink?: string; // optional
}

const AboutSection: React.FC<AboutSectionProps> = ({
  title = 'Who We Are',
  description1 = 'At We Care Support, we offer high-quality care through a diverse, multilingual team, ensuring all participants feel supported regardless of background. Our services include In-Home, Community, and Domestic Assistance, complemented by group activities and day programs that boost well-being, skills development, and confidence for our participants.',
  description2 = 'Our Services list is not limited to following ask us if you have any question regards to our services.',
  image = '/img/about.jpg',
  features = [
    'Support with Community Participation',
    'Support with Development-Life Skills',
    'Assistance With Personal Care Tasks',
  ],
  readMoreText,
  readMoreLink,
}) => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-up" data-aos-delay="100">
            <Image src={image} layout="fill" className="img-fluid" alt={title} />
          </div>

          <div className="col-lg-6 order-2 order-lg-1 content" data-aos="fade-up" data-aos-delay="200">
            <h3>{title}</h3>
            <p className="fst-italic">
              {description1}
              <br />
              {description2}
            </p>
            <ul>
              {features?.map((feature, index) => (
                <li key={index}>
                  <i className="bi bi-check-circle"></i> <span>{feature}</span>
                </li>
              ))}
            </ul>
            {readMoreLink && readMoreText ? (
              <a href={readMoreLink} className="read-more">
                <span>{readMoreText}</span>
                <i className="bi bi-arrow-right"></i>
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
