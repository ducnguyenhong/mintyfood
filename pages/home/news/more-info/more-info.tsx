import { Box, Button, Flex, FormControl, Input } from '@chakra-ui/react';
import Section from 'components/section';
import { memo } from 'react';

const MoreInfo: React.FC = () => {
  return (
    <Flex flex={1 / 3} flexDirection="column">
      <Box>
        <Section title="Liên hệ tư vấn mua hàng" />
        <FormControl mt={10}>
          <Input placeholder="Họ tên của bạn" mb={5} />
          <Input placeholder="SĐT của bạn" mb={5} />
          <Input placeholder="Nội dung cần tư vấn" />

          <Flex justifyContent="center" mt={5}>
            <Button colorScheme="blue">Gửi yêu cầu</Button>
          </Flex>
        </FormControl>
      </Box>

      <Box mt={16}>
        <iframe
          width="100%"
          height="260"
          src="https://www.youtube.com/embed/vRqxmcfaeeY"
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Box>
    </Flex>
  );
};

export default memo(MoreInfo);
