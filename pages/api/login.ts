import get from 'lodash/get';
import md5 from 'md5';
import type { NextApiRequest, NextApiResponse } from 'next';
import { logInWithEmailAndPassword } from 'services/firebase';

interface ResponseData {
  data: {
    tokens: {
      accessToken: string;
      expirationTime: number;
      refreshToken: string;
    };
    userInfo: any;
    message: string;
  } | null;
  error?: {
    message: string;
  };
}

const postLogin = async (req: NextApiRequest, res: NextApiResponse<ResponseData>) => {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    logInWithEmailAndPassword(email, md5(password))
      .then((response) => {
        if (response) {
          const { tokens, userInfo } = response;

          return res.status(200).json({
            data: {
              tokens,
              userInfo,
              message: 'Đăng nhập thành công'
            }
          });
        }
      })
      .catch((error) => {
        return res.status(500).json({ data: null, error: { message: get(error, 'message') } });
      });
  }
};

export default postLogin;
