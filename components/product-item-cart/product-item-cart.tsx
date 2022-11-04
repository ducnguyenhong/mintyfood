import { AspectRatio, Flex, Td, Text, Tr } from '@chakra-ui/react';
import ImageX from 'components/image-x';
import SelectCounter from 'components/select-counter';
import { ProductItem } from 'models/product-item';
import { memo } from 'react';
import { formatPrice } from 'utils/helper';

interface ProductItemProps {
  item: ProductItem;
}

const ProductItemCart: React.FC<ProductItemProps> = ({ item }) => {
  const { id, image, name, curentPrice, initPrice, category } = item;

  return (
    <Tr>
      <Td>
        <Flex gap={2} flexDirection="column">
          <AspectRatio ratio={4 / 3} w={20} boxShadow="xs" borderRadius={4}>
            <ImageX src={image} />
          </AspectRatio>
          <Text as="span" fontWeight={600}>
            {name}
          </Text>
        </Flex>
      </Td>
      <Td>
        <Flex gap={2} alignItems="center">
          <Text color="#828282" textDecoration="line-through" fontSize={13}>
            {formatPrice(initPrice)}
          </Text>
          <Text color="#1c78ce" fontWeight={600} fontSize={16}>
            {formatPrice(curentPrice)}
          </Text>
        </Flex>
      </Td>
      <Td>
        <SelectCounter />
      </Td>
      <Td>
        <button>Xoá</button>
      </Td>
    </Tr>
  );
};

export default memo(ProductItemCart);
