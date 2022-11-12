import { Box, FormLabel, Input, Textarea } from '@chakra-ui/react';
import '@toast-ui/editor/dist/toastui-editor.css';
import { EditorProps } from '@toast-ui/react-editor';
import { useQueryPostCategory } from 'actions/query/post-category';
import DashboardSection from 'components/dashboard-layout/section';
import { CreatePostFormData } from 'models/post';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useCallback, useRef } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Select from 'react-select';
import './create-post.module.css';
import CreatePostControl from './subs/create-post.control';

const Editor = dynamic<EditorProps>(() => import('@toast-ui/react-editor').then((m) => m.Editor), { ssr: false });

const CreatePost: NextPage = () => {
  const editorRef = useRef<any>(null);
  const { register, handleSubmit } = useForm<CreatePostFormData>({
    defaultValues: {
      title: '',
      description: '',
      status: '',
      content: '',
      createBy: {
        uid: '',
        fullName: 'Hà Yến'
      },
      category: {
        value: '',
        label: ''
      }
    }
  });

  const { data: categoryList } = useQueryPostCategory();

  const onSubmit: SubmitHandler<CreatePostFormData> = useCallback((data) => {}, []);

  return (
    <Box>
      <Head>
        <title>Viết bài mới | Minty Food</title>
      </Head>

      <Box bgColor="#FFF" p={6} position="relative">
        <form onSubmit={handleSubmit(onSubmit)}>
          <DashboardSection title="Tạo bài viết mới" />
          <Box px={4} mt={4}>
            <CreatePostControl />
            <Box>
              <FormLabel>Tiêu đề</FormLabel>
              <Input h="40px" {...register('title', { required: true })} borderColor="#CCC" />
            </Box>
            <Box mt={8}>
              <FormLabel>Chuyên mục</FormLabel>
              <Select
                // value={selectedOption}
                // onChange={this.handleChange}
                placeholder="Chọn..."
                options={categoryList}
                isMulti
              />
            </Box>
            <Box mt={8}>
              <FormLabel>Mô tả</FormLabel>
              <Textarea {...register('description', { required: true })} borderColor="#CCC" />
            </Box>
            <Box mt={8}>
              <FormLabel>Nội dung</FormLabel>
              <Editor
                height="550px"
                usageStatistics={false}
                initialEditType="wysiwyg"
                placeholder=""
                // hooks={{ addImageBlobHook: onUploadImage }}
                // initialValue={html}
                // ref={editorRef}
                toolbarItems={[['heading', 'bold', 'italic', 'ul', 'ol', 'image', 'link']]}
                onChange={() => {
                  // setValue('html', editorRef.current?.getInstance()?.getHTML());
                  // const temp = document.createElement('div');
                  // temp.innerHTML = editorRef.current?.getInstance()?.getHTML();
                  // setTextContent(temp.textContent);
                }}
              />
            </Box>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default CreatePost;
