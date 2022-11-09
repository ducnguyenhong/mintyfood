import get from 'lodash/get';
import type { NextApiRequest, NextApiResponse } from 'next';
import { getUserInfoFirebase } from 'services/firebase';

interface ResponseData {
  data?: any;
  error?: {
    message: string;
  };
}

const getUserInfo = async (req: NextApiRequest, res: NextApiResponse<ResponseData>) => {
  if (req.method === 'GET') {
    getUserInfoFirebase()
      .then((response) => {
        return res.status(200).json({ data: response || null });
      })
      .catch((error) => {
        return res.status(500).json({ error: { message: get(error, 'message') } });
      });
  }
};

export default getUserInfo;
