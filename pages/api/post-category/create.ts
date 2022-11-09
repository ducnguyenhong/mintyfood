import get from 'lodash/get';
import type { NextApiRequest, NextApiResponse } from 'next';
import { createPostCategoryFirebase } from 'services/firebase';

interface ResponseData {
  message?: string;
  error?: {
    message: string;
  };
}

const postCreate = (req: NextApiRequest, res: NextApiResponse<ResponseData>) => {
  if (req.method === 'POST') {
    const { name, value } = req.body;
    createPostCategoryFirebase(name, value)
      .then(() => {
        return res.status(201).json({
          message: 'Tạo chuyên mục thành công'
        });
      })
      .catch((error) => {
        return res.status(500).json({ error: { message: get(error, 'message') } });
      });
  }
};

export default postCreate;
