import { useState, useEffect } from 'react';

const useScreenWidth = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array to run the effect only once

  const getBreakpoint = () => {
    if (screenWidth >= 2560) return 'xxl';
    if (screenWidth >= 1440) return 'xl';
    if (screenWidth >= 1024) return 'lg';
    if (screenWidth >= 768) return 'md';
    if (screenWidth >= 425) return 'sm';
    return 'xs';
  };

  return { screenWidth, getBreakpoint };
};

export default useScreenWidth;