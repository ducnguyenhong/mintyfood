import { IncomingForm } from 'formidable';
import get from 'lodash/get';
import type { NextApiRequest, NextApiResponse } from 'next';
import { uploadFileFirebase } from 'services/firebase';

interface ResponseData {
  data?: string;
  message?: string;
  error?: {
    message: string;
  };
}

export const uploadFile = async (req: NextApiRequest, res: NextApiResponse<ResponseData>) => {
  const file = req.body;

  const form = new IncomingForm();

  form.parse(req, (err, fields, files) => {
    console.log('ducnh123 files', files);

    if (err) {
      console.log('ducnh err', err);
    }
    console.log('ducnh data', files);

    uploadFileFirebase(file)
      .then((response) => {
        return res.status(201).json({
          message: 'Upload file thành công',
          data: get(response, 'metadata')
        });
      })
      .catch((error) => {
        return res.status(500).json({ error: { message: get(error, 'message') } });
      });
  });
};
