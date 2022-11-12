import get from 'lodash/get';
import { CategoryItem } from 'models/category';
import type { NextApiRequest, NextApiResponse } from 'next';
import { getPostCategoryFirebase } from 'services/firebase';

interface ResponseData {
  message?: string;
  error?: {
    message: string;
  };
}

const getList = (req: NextApiRequest, res: NextApiResponse<ResponseData | CategoryItem[]>) => {
  if (req.method === 'GET') {
    getPostCategoryFirebase()
      .then((response) => {
        const categoryList = response as CategoryItem[];
        return res.status(201).send(categoryList);
      })
      .catch((error) => {
        return res.status(500).json({ error: { message: get(error, 'message') } });
      });
  }
};

export default getList;
