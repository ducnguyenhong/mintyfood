import { useMutation } from '@tanstack/react-query';
import API from 'utils/api';
import { LoginFormData } from './login.type';

export const useMutationLogin = () =>
  useMutation((params: LoginFormData) =>
    API.request({
      method: 'POST',
      url: '/api/login',
      params
    })
  );
