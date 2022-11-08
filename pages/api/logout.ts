import get from 'lodash/get';
import type { NextApiRequest, NextApiResponse } from 'next';
import { logoutFirebase } from 'services/firebase';

interface ResponseData {
  message?: string;
  error?: {
    message: string;
  };
}

const postLogout = async (req: NextApiRequest, res: NextApiResponse<ResponseData>) => {
  if (req.method === 'POST') {
    logoutFirebase()
      .then(() => {
        return res.status(200).json({
          message: 'Đăng xuất thành công'
        });
      })
      .catch((error) => {
        return res.status(500).json({ error: { message: get(error, 'message') } });
      });
  }
};

export default postLogout;
