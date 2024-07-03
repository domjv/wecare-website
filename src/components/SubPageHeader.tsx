'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';

interface SubPageHeaderProps {
    title: string;
    subtitle: string;
    parentTitle?: string;
    parentLink?: string;
}

const SubPageHeader: React.FC<SubPageHeaderProps> = ({ title="Title", subtitle="Subtitle example", parentTitle, parentLink }) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);
    return (
        <div className="page-title" data-aos="fade">
      <div className="heading">
        <div className="container">
          <div className="row d-flex justify-content-center text-center">
            <div className="col-lg-8">
              <h1>{title}<br/></h1>
              <p className="mb-0">{subtitle}</p>
            </div>
          </div>
        </div>
      </div>
      <nav className="breadcrumbs">
        <div className="container">
          <ol>
            <li><a href="/">Home</a></li>
            {parentTitle && parentLink ? <li><a href={parentLink}>{parentTitle}</a></li> : null}
            <li className="current">{title}<br /></li>
          </ol>
        </div>
      </nav>
    </div>
    );
};

export default SubPageHeader;