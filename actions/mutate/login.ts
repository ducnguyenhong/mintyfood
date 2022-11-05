import { useMutation } from '@tanstack/react-query';
import { LoginFormData } from 'models/login';
import API from 'utils/api';

export const useMutationLogin = () =>
  useMutation((params: LoginFormData) =>
    API.request({
      method: 'POST',
      url: '/api/login',
      params
    })
  );
