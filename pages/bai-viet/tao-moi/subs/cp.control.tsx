import { Button, Flex } from '@chakra-ui/react';
import { memo } from 'react';

const CreatePostControl: React.FC = () => {
  return (
    <Flex justifyContent="flex-end" position="sticky" top="66px" zIndex={10}>
      <Flex bgColor="#FFF" gap={8} px={4} py={3} borderRadius={5}>
        <Button colorScheme="green" variant="outline" w={32} type="button">
          Xem trước
        </Button>

        <Button colorScheme="green" w={32} type="submit">
          Đăng bài
        </Button>
      </Flex>
    </Flex>
  );
};

export default memo(CreatePostControl);
