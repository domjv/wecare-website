// components/Animations.tsx
import { useEffect } from 'react';

const Animations = () => {
  useEffect(() => {
    const AOS = require('aos');
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  return null;
};

export default Animations;
