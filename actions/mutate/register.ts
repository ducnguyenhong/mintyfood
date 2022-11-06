import { useMutation } from '@tanstack/react-query';
import { RegisterFormData } from 'models/register';
import API from 'utils/api';
import { showToast } from 'utils/helper';
import { useMutationLogin } from './login';

export const useMutationRegister = () => {
  const { mutate: loginMutate } = useMutationLogin();

  return useMutation(
    (params: RegisterFormData) => {
      const { email, password, fullName } = params;
      return API.request({
        method: 'POST',
        url: '/api/register',
        params: { email, password, fullName }
      });
    },
    {
      onSuccess: (_, values) => {
        const { email, password } = values;
        loginMutate({ email, password });
      },
      onError: (e: Error) =>
        showToast({
          status: 'error',
          description: `Lỗi: ${e.message || 'Không thể đăng ký tài khoản'}`
        })
    }
  );
};
