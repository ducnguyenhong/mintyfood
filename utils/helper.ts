import { createStandaloneToast, UseToastOptions } from '@chakra-ui/react';
import dayjs from 'dayjs';
import Cookies from 'js-cookie';

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

export const checkIsLogin = () =>
  !!(Cookies.get('access-token') && Number(Cookies.get('expiration-time') || 0) > dayjs().valueOf());
