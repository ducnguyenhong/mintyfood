import type { NextApiRequest, NextApiResponse } from 'next';
import { createPost } from './create';

interface ResponseData {
  message?: string;
  data?: any;
  error?: {
    message: string;
  };
}

const handleRequest = (req: NextApiRequest, res: NextApiResponse<ResponseData>) => {
  if (req.method === 'POST') {
    return createPost(req, res);
  }
};

export default handleRequest;
