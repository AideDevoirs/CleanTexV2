import { useCallback } from 'react';
import { toast } from '../components/ui/toaster';

export function useToast() {
  const showToast = useCallback(
    (options) => {
      const { title, description, variant = 'default' } = options;
      toast({
        title,
        description,
        variant,
      });
    },
    []
  );

  return {
    toast: showToast,
  };
}

