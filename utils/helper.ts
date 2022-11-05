import { createStandaloneToast, UseToastOptions } from '@chakra-ui/react';

export const formatPrice = (price: number): string =>
  new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);

export const showToast = (options?: UseToastOptions) => {
  const { toast } = createStandaloneToast();

  return toast({
    position: 'top-right',
    isClosable: true,
    duration: 4000,
    ...options
  });
};
