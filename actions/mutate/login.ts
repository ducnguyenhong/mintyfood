import { useMutation } from '@tanstack/react-query';
import Cookies from 'js-cookie';
import { LoginFormData } from 'models/login';
import { useRouter } from 'next/router';
import { useSetRecoilState } from 'recoil';
import { userInfoAtom } from 'recoil/user-info';
import API from 'utils/api';
import { showToast } from 'utils/helper';

export const useMutationLogin = () => {
  const router = useRouter();
  const setUserInfo = useSetRecoilState(userInfoAtom);

  return useMutation(
    (params: LoginFormData) =>
      API.request({
        method: 'POST',
        url: '/api/login',
        params
      }),
    {
      onSuccess: (response) => {
        const { tokens, userInfo } = response.data;
        const { accessToken, expirationTime } = tokens;
        const { type } = userInfo;
        showToast({
          status: 'success',
          description: 'Đăng nhập thành công'
        });
        setUserInfo(userInfo);
        Cookies.set('access-token', accessToken);
        Cookies.set('expiration-time', expirationTime);

        router.push(type === 'ADMIN' ? '/bang-dieu-khien' : '/');
      },
      onError: (e: Error) =>
        showToast({
          status: 'error',
          description: `Lỗi: ${e.message || 'Không thể đăng nhập'}`
        })
    }
  );
};
