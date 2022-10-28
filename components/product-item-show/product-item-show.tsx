import {
  AspectRatio,
  Badge,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Text,
  useDisclosure
} from '@chakra-ui/react';
import { faCartPlus, faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ImageX from 'components/image-x';
import ProductItemPreview from 'components/product-item-preview';
import { ProductItem } from 'models/product-item';
import { memo } from 'react';
import { formatPrice } from 'utils/helper';

interface ProductItemProps {
  item: ProductItem;
}

const ProductItemShow: React.FC<ProductItemProps> = ({ item }) => {
  const { id, image, name, curentPrice, initPrice, category } = item;
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex
        direction="column"
        alignItems="center"
        key={id}
        px={5}
        py={4}
        mx={6}
        mb={5}
        borderRadius={15}
        bg="#FFF"
        border="1px solid #e6e6e6"
        cursor="pointer"
        onClick={onOpen}
        boxShadow="base"
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

      <Drawer preserveScrollBarGap onClose={onClose} isOpen={isOpen} size="lg" autoFocus={false} placement="left">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Text color="#38A169" fontWeight={700} fontSize={19}>
              {name}
            </Text>
            <Divider mt={4} />
          </DrawerHeader>
          <DrawerBody>
            <ProductItemPreview item={item} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default memo(ProductItemShow);
