'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';

interface ImageHeadingDescriptionProps {
  imageUrl: string;
  heading: string;
  description1?: string;
  description2?: string;
  description3?: string;
  featureArray?: string[];
}

const ImageHeadingDescription: React.FC<ImageHeadingDescriptionProps> = ({
  imageUrl,
  heading,
  description1,
  description2,
  description3,
  featureArray,
}) => {
    useEffect(() => {
        AOS.init({
          duration: 800,
          once: false,
        });
      }, []);
  return (
    <div className="col-lg-8">
      <img src={imageUrl} className="img-fluid" alt={heading} />
      <h3>{heading}</h3>
      <p>{description1}</p>
      {description2 ? <p>{description2}</p> : ''}
      {description3 ? <p>{description3}</p> : ''}
      {featureArray ? <ul>{featureArray?.map((feature, index) => <li key={index}>{feature}</li>)}</ul> : ''}
    </div>
  );
};

export default ImageHeadingDescription;
