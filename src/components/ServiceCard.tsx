import Image from 'next/image';
import React from 'react';

interface ServiceCardProps {
  title: string;
  subTitle?: string;
  description: string;
  imageUrl: string;
  link?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, subTitle, description, link = '#', imageUrl }) => {
  return (
    <div className="col-md-6 d-flex align-items-stretch">
      <div className="card">
        <div className="card-img">
        <img src={imageUrl} alt={title} />
          {/* <Image src={imageUrl} alt={title} layout={'fill'} objectFit={'contain'} className='img' /> */}
        </div>
        <div className="card-body">
          <h5 className="card-title">
            <a href={link}>{title}</a>
          </h5>
          {subTitle ? <p className="fst-italic text-center">{subTitle}</p> : null}
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
