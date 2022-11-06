import { Box, Input } from '@chakra-ui/react';
import '@toast-ui/editor/dist/toastui-editor.css';
import { EditorProps } from '@toast-ui/react-editor';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useRef } from 'react';
import './create-post.module.css';
import CreatePostControl from './subs/create-post.control';

const Editor = dynamic<EditorProps>(() => import('@toast-ui/react-editor').then((m) => m.Editor), { ssr: false });

const CreatePost: NextPage = () => {
  const editorRef = useRef<any>(null);

  return (
    <Box>
      <Head>
        <title>Viết bài mới | Minty Food</title>
      </Head>

      <Box bgColor="#FFF" p={6}>
        <CreatePostControl />
        <Box mt={6}>
          <Input placeholder="Tiêu đề bài viết" py={6} />
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
