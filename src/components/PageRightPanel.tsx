import React from 'react';

export interface PageRightPanelProps {
  subHeading?: string;
  subText?: string;
  subTextLink?: string;
}

const PageRightPanel: React.FC<PageRightPanelProps> = ({ subHeading, subText, subTextLink }) => {
  return (
    <div className="course-info d-flex justify-content-between align-items-center">
      {subTextLink ? <h5><a href={subTextLink}>{subHeading}</a></h5> : <h5>{subHeading}</h5>}
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
