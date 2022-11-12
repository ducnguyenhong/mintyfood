import { useQuery } from '@tanstack/react-query';
import API from 'utils/api';

export const useQueryUserInfo = (isLogged: boolean) => {
  return useQuery(
    ['QUERY_USER_INFO'],
    () =>
      API.request({
        url: '/api/user/info'
      }),
    { enabled: isLogged, onSuccess: (response) => response?.data || null }
  );
};
