import { Button, Flex, Heading, Text } from '@chakra-ui/react';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ImageX from 'components/image-x';
import { memo } from 'react';

const HomeIntro: React.FC = () => {
  return (
    <Flex justifyContent="space-between" alignItems="center" gap={28}>
      <Flex flex={1 / 2} direction="column" pl={40}>
        <Heading as="h1" color="#484848" fontWeight={800} fontSize={45}>
          Your Favorite Food<br />Delivered Hot &<br />Fresh
        </Heading>
        <Heading as="h4" color="#5A5A5A" fontSize={16} textAlign="justify" mt={8} fontWeight={500}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s
        </Heading>

        <Button colorScheme="green" h="48px" w={48} borderRadius="full" mt={12} fontWeight={700} fontSize={16} alignItems="center">
          <Text as="span" mr={3} mt={-0.5}>Đặt hàng ngay</Text>
          <FontAwesomeIcon icon={faArrowRight} />
        </Button>
      </Flex>

      <Flex flex={1 / 2}>
        <ImageX src="/images/img-intro.png" w="800px" h='550px' objectFit="cover" />
      </Flex>
    </Flex>
  );
}

export default memo(HomeIntro)