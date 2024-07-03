'use client';

import React, { useState } from 'react';
import PureCounter from '@srexi/purecounterjs';
interface CountItemProps {
  itemCount: number;
  name: string;
}
const counter = new PureCounter();
const CountItem: React.FC<CountItemProps> = ({ itemCount, name }) => {

  return (
    <div className="col-lg-3 col-md-6">
      <div className="stats-item text-center w-100 h-100">
        <span
          data-purecounter-start="0"
          data-purecounter-end={itemCount}
          data-purecounter-duration="1"
          className="purecounter"
        >{itemCount}</span>
        <p>{name}</p>
      </div>
    </div>
  );
};

export default CountItem;
