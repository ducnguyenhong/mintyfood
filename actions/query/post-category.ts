import { useQuery } from '@tanstack/react-query';
import API from 'utils/api';

export const useQueryPostCategory = () => {
  return useQuery(['QUERY_POST_CATEGORY'], () =>
    API.request({
      url: '/api/post-category/list'
    })
  );
};
