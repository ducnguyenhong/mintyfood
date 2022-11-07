import { Button, Flex } from '@chakra-ui/react';
import { memo } from 'react';

const CreatePostControl: React.FC = () => {
  return (
    <Flex gap={8} justifyContent="flex-end">
      <Button colorScheme="green" variant="outline" w={32}>
        Xem trước
      </Button>

      <Button colorScheme="green" w={32}>
        Đăng bài
      </Button>
    </Flex>
  );
};

export default memo(CreatePostControl);
