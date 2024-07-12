import React from 'react';

export interface PageRightPanelProps {
  subHeading?: string;
  subText?: string;
  subTextLink?: string;
  className?: string;
}

const PageRightPanel: React.FC<PageRightPanelProps> = ({ subText, subTextLink, className }) => {
  return (
    <div className={`course-info d-flex justify-content-between align-items-center ${className}`}>
      {subTextLink ? (
        <p>
          <a href={subTextLink}>{subText}</a>
        </p>
      ) : (
        <p>{subText}</p>
      )}
    </div>
  );
};

export default PageRightPanel;
