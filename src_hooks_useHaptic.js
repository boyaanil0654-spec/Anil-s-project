import { useCallback } from 'react';

export const useHaptic = () => {
  const triggerHaptic = useCallback((type) => {
    if (navigator.vibrate) {
      navigator.vibrate(type === 'spin' ? 200 : 100);
    }
  }, []);

  return { triggerHaptic };
};