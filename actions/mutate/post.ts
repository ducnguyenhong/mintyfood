import { useMutation } from '@tanstack/react-query';
import { CreatePostFormData } from 'models/post';
import API from 'utils/api';
import { showToast } from 'utils/helper';

export const useMutationCreatePost = (resetForm: () => void) => {
  return useMutation(
    (params: CreatePostFormData) => {
      return API.request({
        method: 'POST',
        url: '/api/post',
        params
      });
    },
    {
      onSuccess: () => {
        resetForm();
        showToast({
          status: 'success',
          description: 'Tạo bài viết thành công'
        });
      },
      onError: (e: Error) =>
        showToast({
          status: 'error',
          description: `Lỗi: ${e.message || 'Không thể tạo mới bài viết'}`
        })
    }
  );
};
