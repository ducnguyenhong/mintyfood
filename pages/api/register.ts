import get from 'lodash/get';
import type { NextApiRequest, NextApiResponse } from 'next';
import { registerWithEmailAndPassword } from 'services/firebase';

interface ResponseData {
  data: {
    userInfo: any;
    message: string;
  } | null;
  error?: {
    message: string;
  };
}

const postRegister = (req: NextApiRequest, res: NextApiResponse<ResponseData>) => {
  if (req.method === 'POST') {
    const { email, password, fullName } = req.body;

    registerWithEmailAndPassword(fullName, email, password)
      .then((response) => {
        if (response) {
          const { data } = response;

          return res.status(201).json({
            data: {
              userInfo: data,
              message: 'Đăng ký thành công'
            }
          });
        }
      })
      .catch((error) => {
        return res.status(500).json({ data: null, error: { message: get(error, 'message') } });
      });
  }
};

export default postRegister;
