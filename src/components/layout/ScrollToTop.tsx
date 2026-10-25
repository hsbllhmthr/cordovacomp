import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 left-5 sm:left-6 z-40 w-11 h-11 rounded-full bg-white text-navy border border-gray-200 shadow-md hover:shadow-lg hover:bg-soft hover:text-primary transition-all duration-200 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary"
      aria-label="Gulir ke atas"
    >
      <ArrowUp size={20} />
    </button>
  );
};

