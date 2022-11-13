import type { NextApiRequest, NextApiResponse } from 'next';
import { uploadFile } from './upload';

interface ResponseData {
  message?: string;
  data?: any;
  error?: {
    message: string;
  };
}

const handleRequest = (req: NextApiRequest, res: NextApiResponse<ResponseData>) => {
  if (req.method === 'POST') {
    return uploadFile(req, res);
  }
};

export default handleRequest;
