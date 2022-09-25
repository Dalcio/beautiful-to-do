import { useState, useEffect } from 'react';

const useDocumentIsReady = () => {
  const [isReady, setIsReady] = useState<boolean>(false);

  useEffect(() => {
    if (!isReady) {
      setIsReady(true);
    }
  }, []);

  return isReady;
};

export default useDocumentIsReady;
