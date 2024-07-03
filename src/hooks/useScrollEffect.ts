import { useEffect } from 'react';

const useScrollEffect = () => {
  useEffect(() => {
    const toggleScrolled = () => {
      const selectBody = document.querySelector('body');
      if (window.scrollY > 100) {
        selectBody?.classList.add('scrolled');
      } else {
        selectBody?.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', toggleScrolled);
    return () => window.removeEventListener('scroll', toggleScrolled);
  }, []);
};

export default useScrollEffect;