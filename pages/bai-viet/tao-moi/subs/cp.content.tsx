import { Box, FormLabel } from '@chakra-ui/react';
import { Editor } from '@toast-ui/react-editor';
import { memo, MutableRefObject } from 'react';

interface ContentProps {
  editorRef: MutableRefObject<any>;
}

const CreatePostContent: React.FC<ContentProps> = ({ editorRef }) => {
  return (
    <Box mt={8}>
      <FormLabel fontWeight={700}>Nội dung</FormLabel>
      <Editor
        height="600px"
        usageStatistics={false}
        initialEditType="wysiwyg"
        autofocus={false}
        ref={editorRef}
        // hooks={{ addImageBlobHook: onUploadImage }}
        initialValue=" "
        toolbarItems={[['heading', 'bold', 'italic', 'ul', 'ol', 'image', 'link']]}
      />
    </Box>
  );
};

export default memo(CreatePostContent);
