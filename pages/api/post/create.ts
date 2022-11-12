import get from 'lodash/get';
import type { NextApiRequest, NextApiResponse } from 'next';
import { createPostFirebase } from 'services/firebase';

interface ResponseData {
  message?: string;
  error?: {
    message: string;
  };
}

export const createPost = (req: NextApiRequest, res: NextApiResponse<ResponseData>) => {
  const dataPost = req.body;
  createPostFirebase(dataPost)
    .then(() => {
      return res.status(201).json({
        message: 'Tạo bài viết thành công'
      });
    })
    .catch((error) => {
      return res.status(500).json({ error: { message: get(error, 'message') } });
    });
};
