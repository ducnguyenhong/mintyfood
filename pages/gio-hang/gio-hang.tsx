import { Box, Button, Flex, Table, TableContainer, Tbody, Text, Th, Thead, Tr } from '@chakra-ui/react';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProductItemCart from 'components/product-item-cart';
import { ProductItem } from 'models/product-item';
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useMemo } from 'react';
import { formatPrice } from 'utils/helper';

const CartPage: NextPage = () => {
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
    <Box>
      <Head>
        <title>Giỏ hàng | Minty Food</title>
      </Head>
      <Box w="full" h="full" bgColor="#f2f2f2">
        <Box w="70%" mx="auto">
          <Box bgColor="#FFF" mt={36} boxShadow="base">
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
          </Box>

          <Flex alignItems="center" flexDirection="column" bgColor="#FFF" mt={14} boxShadow="base" px={4} py={8}>
            <Flex gap={4} alignItems="center">
              <Text fontSize={16}>
                Tổng thanh toán (
                <Text as="span" fontWeight={600} fontSize={16}>
                  5{' '}
                </Text>
                sản phẩm):
              </Text>
              <Text color="primary.1" fontWeight={700} fontSize={18}>
                {formatPrice(100000)}
              </Text>
            </Flex>

            <Link href="/thanh-toan">
              <a>
                <Button colorScheme="green" gap={3} alignItems="center" mt={5} px={14} py={6}>
                  <FontAwesomeIcon icon={faCreditCard} />
                  <Text as="span" fontSize={15} fontWeight={600}>
                    Thanh toán
                  </Text>
                </Button>
              </a>
            </Link>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default CartPage;
