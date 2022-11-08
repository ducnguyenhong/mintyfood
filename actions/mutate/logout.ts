import { useMutation } from '@tanstack/react-query';
import Cookies from 'js-cookie';
import { useSetRecoilState } from 'recoil';
import { userInfoAtom } from 'recoil/user-info';
import API from 'utils/api';
import { showToast } from 'utils/helper';

export const useMutationLogout = () => {
  const setUserInfo = useSetRecoilState(userInfoAtom);

  return useMutation(
    () =>
      API.request({
        method: 'POST',
        url: '/api/logout'
      }),
    {
      onSuccess: () => {
        showToast({
          status: 'success',
          description: 'Đăng xuất thành công'
        });
        setUserInfo(undefined);
        Cookies.remove('access-token');
        Cookies.remove('expiration-time');
      },
      onError: (e: Error) =>
        showToast({
          status: 'error',
          description: `Lỗi: ${e.message || 'Không thể đăng nhập'}`
        })
    }
  );
};
