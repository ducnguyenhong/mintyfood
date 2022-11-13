import { Box, FormLabel } from '@chakra-ui/react';
import { Editor } from '@toast-ui/react-editor';
import { memo, MutableRefObject, useCallback } from 'react';
import API from 'utils/api';
import { showToast } from 'utils/helper';

interface ContentProps {
  editorRef: MutableRefObject<any>;
}

const CreatePostContent: React.FC<ContentProps> = ({ editorRef }) => {
  const onUploadImage = useCallback((blob: Blob | File, callback: any) => {
    API.upload(blob)
      .then((response) => {
        callback(response.medium, 'image');
      })
      .catch((e) => {
        showToast({
          status: 'error',
          description: `Lỗi: ${e.message || 'Không thể tải ảnh lên'}`
        });
      });
    return false;
  }, []);

  return (
    <Box mt={8}>
      <FormLabel fontWeight={700}>Nội dung</FormLabel>
      <Editor
        height="600px"
        usageStatistics={false}
        initialEditType="wysiwyg"
        autofocus={false}
        ref={editorRef}
        hooks={{ addImageBlobHook: onUploadImage }}
        initialValue=" "
        toolbarItems={[['heading', 'bold', 'italic', 'ul', 'ol', 'image', 'link']]}
      />
    </Box>
  );
};

export default memo(CreatePostContent);
