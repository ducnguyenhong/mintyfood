import { useMutation } from '@tanstack/react-query';
import { PostCategoryFormData } from 'models/category';
import { UseFormReset } from 'react-hook-form';
import API from 'utils/api';
import { showToast } from 'utils/helper';

export const useMutationCreatePostCategory = (reset: UseFormReset<PostCategoryFormData>) => {
  return useMutation(
    (params: PostCategoryFormData) => {
      return API.request({
        method: 'POST',
        url: '/api/post-category/create',
        params
      });
    },
    {
      onSuccess: () => {
        reset();
        showToast({
          status: 'success',
          description: 'Tạo chuyên mục thành công'
        });
      },
      onError: (e: Error) =>
        showToast({
          status: 'error',
          description: `Lỗi: ${e.message || 'Không thể tạo mới chuyên mục'}`
        })
    }
  );
};
