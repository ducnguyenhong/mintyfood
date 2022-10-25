import { Button, Flex, Heading, Text } from '@chakra-ui/react';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ImageX from 'components/image-x';
import { memo } from 'react';

const HomeIntro: React.FC = () => {
  return (
    <Flex justifyContent="space-between" alignItems="center" gap={{ xs: 10, '2xl': 28 }}>
      <Flex w="50%" direction="column" pl={{ xs: 32, '2xl': 52 }}>
        <Heading as="h1" color="primary.2" fontWeight={800} fontSize={{ xs: 40, '2xl': 45 }} pt={20} lineHeight={{ xs: '55px', '2xl': '60px' }}>
          Đồ Ăn, Thức Uống &<br />Thực Phẩm Dinh Dưỡng<br />Cho Sức Khoẻ
        </Heading>
        <Heading as="h4" color="#5A5A5A" fontSize={16} textAlign="justify" mt={12} fontWeight={500} lineHeight="24px" pr={{ xs: 32, '2xl': 60 }}>
          Ăn uống hợp khoa học dinh dưỡng ngoài giúp chúng ta thỏa mãn nhu cầu đầu tiên của “tứ khoái”, mà còn đảm bảo năng lượng, sức khỏe để có cuộc sống vui tươi, tích cực.
        </Heading>

        <Button colorScheme="green" h="48px" w={48} borderRadius="full" mt={12} fontWeight={700} fontSize={16} alignItems="center">
          <Text as="span" mr={3} mt={-0.5}>Đặt hàng ngay</Text>
          <FontAwesomeIcon icon={faArrowRight} />
        </Button>
      </Flex>

      <Flex w="50%">
        <ImageX src="/images/img-intro.png" w="full" h={{ xs: '500px', '2xl': '600px' }} objectFit="fill" />
      </Flex>
    </Flex>
  );
}

export default memo(HomeIntro)