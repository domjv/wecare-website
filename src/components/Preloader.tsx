// components/Preloader.tsx
import { useEffect } from 'react';

const Preloader = () => {
  useEffect(() => {
    const preloader = document.getElementById('preloader');
    window.addEventListener('load', () => preloader?.remove());

    return () => window.removeEventListener('load', () => preloader?.remove());
  }, []);

  return (
    <div id="preloader">Loading...</div>
  );
};

export default Preloader;
