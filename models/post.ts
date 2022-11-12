import { MultiValue } from 'react-select';
import { CategoryItem } from './category';

export interface CreatePostFormData {
  title: string;
  description: string;
  status: string;
  content: string;
  createBy: {
    uid: string;
    fullName: string;
  };
  category: MultiValue<CategoryItem>;
}

export interface PostItem {
  title: string;
  description: string;
  status: string;
  content: string;
  createBy: {
    uid: string;
    fullName: string;
  };
  category: MultiValue<CategoryItem>;
}
