import React from 'react';

interface HeadingDescriptionProps {
  heading?: string;
  descriptions?: string[];
  bulletPoints?: string[];
  conclusionDescriptions?: string[];
}

const HeadingDescription: React.FC<HeadingDescriptionProps> = ({
  heading,
  descriptions,
  bulletPoints,
  conclusionDescriptions,
}) => {
  return (
    <div className="container">
      <div className="row gy-4">
        <div className="col-lg-12 order-2 order-lg-1 content" data-aos="fade-up" data-aos-delay="200">
          {heading && <h3>{heading}</h3>}
          {descriptions && descriptions.map((description, index) => <p key={index}>{description}</p>)}
          {bulletPoints && (
            <ul>
              {/* {bulletPoints?.map((bulletPoint, index) => (
                <li key={index}>
                  <i className="bi bi-check-circle"></i> <span>{bulletPoint}</span>
                </li>
              ))} */}
              {bulletPoints?.map((bulletPoint, index) => (
              <li key={index}>{bulletPoint}</li>
            ))}
            </ul>
          )}
          {conclusionDescriptions &&
            conclusionDescriptions.map((description, index) => <p key={index}>{description}</p>)}
        </div>
      </div>
    </div>
  );
};

export default HeadingDescription;
