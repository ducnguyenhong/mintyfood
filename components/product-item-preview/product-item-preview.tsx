import { AspectRatio, Badge, Box, Button, Flex, Text } from '@chakra-ui/react';
import { faCartPlus, faEye, faFeather, faListUl, faSackDollar, faShareNodes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ImageX from 'components/image-x';
import SelectCounter from 'components/select-counter';
import { ProductItem } from 'models/product-item';
import { memo } from 'react';
import { formatPrice } from 'utils/helper';

interface ProductItemProps {
  item: ProductItem;
}

const ProductItemPreview: React.FC<ProductItemProps> = ({ item }) => {
  const { id, image, name, curentPrice, initPrice, category } = item;

  return (
    <Box>
      <Flex justifyContent="center">
        <AspectRatio w={60} ratio={5 / 4}>
          <ImageX src={image} h={4} />
        </AspectRatio>
      </Flex>

      <Box px={10} mt={5}>
        <Flex alignItems="flex-start">
          <Flex alignItems="center" w={40}>
            <Box w={5} h={5}>
              <FontAwesomeIcon icon={faSackDollar} />
            </Box>
            <Text ml={1}>Giá tiền:</Text>
          </Flex>
          <Flex gap={2} alignItems="center">
            <Text color="#828282" textDecoration="line-through" fontSize={15}>
              {formatPrice(initPrice)}
            </Text>
            <Text color="red" fontWeight={600} fontSize={18}>
              {formatPrice(curentPrice)}
            </Text>
          </Flex>
        </Flex>

        <Flex mt={3} alignItems="flex-start">
          <Flex alignItems="center" w={40}>
            <Box w={5} h={5}>
              <FontAwesomeIcon icon={faShareNodes} />
            </Box>
            <Text ml={1}>Danh mục:</Text>
          </Flex>
          <Badge colorScheme="green" variant="solid" pt={0.5}>
            Thức uống
          </Badge>
        </Flex>

        <Flex mt={3} alignItems="flex-start">
          <Flex alignItems="center" w={40}>
            <Box w={5} h={5}>
              <FontAwesomeIcon icon={faListUl} />
            </Box>
            <Text ml={1}>Thành phần:</Text>
          </Flex>
          <Text fontSize={13}>Sữa chua, sữa đặc, nước, sữa tươi</Text>
        </Flex>

        <Flex mt={3} alignItems="flex-start">
          <Flex alignItems="center" w={40}>
            <Box w={5} h={5}>
              <FontAwesomeIcon icon={faFeather} />
            </Box>
            <Text ml={1}>Mô tả:</Text>
          </Flex>
          <Flex flex={1}>
            <Text fontSize={13}>
              Sữa chua từ lâu đã là món ăn vặt, tráng miệng được rất nhiều người ưa thích, thường xuyên sử dụng trong
              các buổi tiệc sinh nhật hoặc sau các bữa cơm gia đình ngồi tráng miệng thư giãn bên nhau.
            </Text>
          </Flex>
        </Flex>
      </Box>

      <Flex px={10} mt={8}>
        <Text fontWeight={600} fontSize={15} w={40}>
          • Chọn số lượng
        </Text>

        <Flex>
          <SelectCounter />
        </Flex>
      </Flex>

      <Flex justifyContent="center" mt={10}>
        <Button colorScheme="green" w={60}>
          <Flex alignItems="center" justifyContent="center" w={14} h={10} borderRadius={3}>
            <FontAwesomeIcon icon={faCartPlus} color="#FFF" />
            <Text as="span" ml={3}>
              Thêm vào giỏ hàng
            </Text>
          </Flex>
        </Button>
      </Flex>
    </Box>
  );

  return (
    <Flex
      direction="column"
      alignItems="center"
      key={id}
      px={5}
      py={4}
      mx={6}
      mb={4}
      borderRadius={10}
      border="1px solid #e6e6e6"
      transitionDuration="300ms"
      _hover={{
        boxShadow: 'lg'
      }}
    >
      <Flex justifyContent="space-between" w="full">
        <Flex w={8} h={8} bgColor="purple" borderRadius="full" alignItems="center" justifyContent="center">
          <Text fontSize={10} color="#FFF">
            -5%
          </Text>
        </Flex>
        <Badge>{category}</Badge>
      </Flex>
      <AspectRatio w="full" ratio={5 / 4}>
        <ImageX src={image} h={4} />
      </AspectRatio>
      <Text color="#66BC42" fontWeight={700} fontSize={16}>
        {name}
      </Text>
      <Flex mt={1} gap={2} alignItems="center">
        <Text color="#828282" textDecoration="line-through" fontSize={13}>
          {formatPrice(initPrice)}
        </Text>
        <Text color="red" fontWeight={600} fontSize={16}>
          {formatPrice(curentPrice)}
        </Text>
      </Flex>
      <Flex mt={2} gap={8} display="none">
        <button>
          <Flex alignItems="center" justifyContent="center" bgColor="purple.500" w={12} h={10} borderRadius={20}>
            <FontAwesomeIcon icon={faEye} color="#FFF" />
          </Flex>
        </button>
        <button>
          <Flex alignItems="center" justifyContent="center" bgColor="green.500" w={14} h={10} borderRadius={3}>
            <FontAwesomeIcon icon={faCartPlus} color="#FFF" />
          </Flex>
        </button>
      </Flex>
    </Flex>
  );
};

export default memo(ProductItemPreview);
