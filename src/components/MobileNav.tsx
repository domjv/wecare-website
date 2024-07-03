// components/MobileNav.tsx
import { useState } from 'react';

const MobileNav = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleNav = () => {
    setIsActive(!isActive);
  };

  return (
    <button onClick={toggleNav} className={`mobile-nav-toggle ${isActive ? 'bi-x' : 'bi-list'}`}>
      {isActive ? 'Close' : 'Menu'}
    </button>
  );
};

export default MobileNav;
