import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Table,
  TableContainer,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure
} from '@chakra-ui/react';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProductItemCart from 'components/product-item-cart';
import { ProductItem } from 'models/product-item';
import Link from 'next/link';
import { memo, useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import { activeNavBarAtom } from './header.recoil';

const HeaderCart: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const activeNavBar = useRecoilValue(activeNavBarAtom);

  const PRODUCT_DATA: ProductItem[] = useMemo(
    () => [
      {
        id: 1,
        image: '/images/sp-1.png',
        name: 'Sữa chua nhà làm',
        curentPrice: 5_000,
        initPrice: 6_000,
        category: 'DRINK',
        quantity: 10
      },
      {
        id: 2,
        image: '/images/sp-2.png',
        name: 'Bánh bao',
        curentPrice: 20_000,
        initPrice: 25_000,
        category: 'FOOD',
        quantity: 5
      },
      {
        id: 3,
        image: '/images/sp-3.png',
        name: 'Sinh tố Dưa Hấu',
        curentPrice: 15_000,
        initPrice: 18_000,
        category: 'DRINK',
        quantity: 5
      },
      {
        id: 4,
        image: '/images/sp-4.png',
        name: 'Sinh tố Cam',
        curentPrice: 15_000,
        initPrice: 18_000,
        category: 'DRINK',
        quantity: 5
      },
      {
        id: 5,
        image: '/images/sp-5.png',
        name: 'Sinh tố Dâu Tây',
        curentPrice: 20_000,
        initPrice: 22_000,
        category: 'DRINK',
        quantity: 10
      }
    ],
    []
  );

  return (
    <Flex>
      <Flex
        w={10}
        h={10}
        borderRadius="full"
        bgColor={activeNavBar ? '#FFF' : 'navBar.1'}
        alignItems="center"
        justifyContent="center"
        transitionDuration="300ms"
        cursor="pointer"
        position="relative"
        onClick={onOpen}
      >
        <Text as="span" color={activeNavBar ? '#38A169' : '#FFF'} transitionDuration="300ms">
          <FontAwesomeIcon icon={faCartShopping} />
        </Text>
        <Flex
          w={5}
          h={5}
          borderRadius="full"
          bgColor="#fa3c3c"
          alignItems="center"
          justifyContent="center"
          position="absolute"
          top={-1.5}
          right={-1.5}
        >
          <Text color="#FFF" fontSize={11}>
            1
          </Text>
        </Flex>
      </Flex>

      <Drawer preserveScrollBarGap onClose={onClose} isOpen={isOpen} size="xl" autoFocus={false}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Giỏ hàng của bạn</DrawerHeader>
          <DrawerBody>
            <Box>
              <TableContainer>
                <Table variant="simple">
                  <Thead>
                    <Tr>
                      <Th>Sản phẩm</Th>
                      <Th>Đơn giá</Th>
                      <Th>Số lượng</Th>
                      <Th>Hành động</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {PRODUCT_DATA.map((item) => (
                      <ProductItemCart key={item.id} item={item} />
                    ))}
                  </Tbody>
                </Table>
              </TableContainer>

              <Link href="/gio-hang">
                <a>
                  <Button onClick={onClose} colorScheme="green">
                    Xem chi tiết & Thanh toán
                  </Button>
                </a>
              </Link>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default memo(HeaderCart);
