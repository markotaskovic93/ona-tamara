import { useEffect, useState } from 'react';

const useScreenOrientation = () => {
  const [orientation, setOrientation] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      const { clientWidth, clientHeight } = document.documentElement
      let orientation = clientWidth > clientHeight ? 'landscape' : 'portrait'
      setOrientation(orientation)
    };
    handleResize()
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return orientation
}

export default useScreenOrientation
