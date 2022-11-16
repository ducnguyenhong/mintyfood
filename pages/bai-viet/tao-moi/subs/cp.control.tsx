import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure
} from '@chakra-ui/react';
import { memo, MutableRefObject } from 'react';
import { useFormContext } from 'react-hook-form';

interface ControlProps {
  editorRef: MutableRefObject<any>;
}

const CreatePostControl: React.FC<ControlProps> = ({ editorRef }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { watch } = useFormContext();

  return (
    <Flex justifyContent="flex-end" position="sticky" top="66px" zIndex={10}>
      <Flex bgColor="#FFF" gap={8} px={4} py={3} borderRadius={5}>
        <Button colorScheme="green" variant="outline" w={32} type="button" onClick={onOpen}>
          Xem trước
        </Button>

        <Button colorScheme="green" w={32} type="submit">
          Đăng bài
        </Button>
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose} size="4xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Xem trước bài viết</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>{watch('title')}</Text>
            <div dangerouslySetInnerHTML={{ __html: editorRef.current?.getInstance()?.getHTML() }} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default memo(CreatePostControl);
