import { Box, FormLabel, Input } from '@chakra-ui/react';
import '@toast-ui/editor/dist/toastui-editor.css';
import { EditorProps } from '@toast-ui/react-editor';
import DashboardSection from 'components/dashboard-layout/section';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useRef } from 'react';
import './create-post.module.css';
import CreatePostControl from './subs/create-post.control';
// import Select from 'react-select';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];

const Editor = dynamic<EditorProps>(() => import('@toast-ui/react-editor').then((m) => m.Editor), { ssr: false });

const CreatePost: NextPage = () => {
  const editorRef = useRef<any>(null);

  return (
    <Box>
      <Head>
        <title>Viết bài mới | Minty Food</title>
      </Head>

      <Box bgColor="#FFF" p={6}>
        <DashboardSection title="Tạo bài viết mới" />
        <CreatePostControl />
        <Box mt={6}>
          <FormLabel>Tiêu đề</FormLabel>
          <Input h={12} />
        </Box>
        <Box mt={6}>
          <FormLabel>Chuyên mục</FormLabel>
          {/* <Select
        // value={selectedOption}
        // onChange={this.handleChange}
        options={options}
      /> */}
        </Box>
        <Box mt={6}>
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
    </Box>
  );
};

export default CreatePost;
