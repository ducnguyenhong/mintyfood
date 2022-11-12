export interface CreatePostFormData {
  title: string;
  description: string;
  status: string;
  content: string;
  createBy: {
    uid: string;
    fullName: string;
  };
  category: {
    value: string;
    label: string;
  };
}
