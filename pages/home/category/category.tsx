import { Box, Flex, Text } from '@chakra-ui/react';
import ImageX from 'components/image-x';
import Link from 'next/link';
import { memo, useMemo } from 'react';

const HomeCategory: React.FC = () => {
  const CATEGORY_DATA = useMemo(
    () => [
      {
        title: 'Đồ ăn',
        description: 'Phong phú & đa dạng',
        route: '/do-an1',
        bgImg: '/images/category-1.png'
      },
      {
        title: 'Thức uống',
        description: 'Phong phú & đa dạng',
        route: '/do-an2',
        bgImg: '/images/category-2.png'
      },
      {
        title: 'Thực phẩm',
        description: 'Phong phú & đa dạng',
        route: '/do-an3',
        bgImg: '/images/category-3.png'
      }
    ],
    []
  );

  return (
    <Flex w="full" alignItems="center" justifyContent="center" mt={20}>
      {CATEGORY_DATA.map((item) => {
        const { title, description, route, bgImg } = item;
        return (
          <Box mx={20} key={route}>
            <Link href={route}>
              <a>
                <Flex
                  direction="column"
                  mx="auto"
                  alignItems="center"
                  w={{ xs: '140px', '2xl': 52 }}
                  h={{ xs: '140px', '2xl': 52 }}
                  borderRadius="full"
                  bgColor="#FFF"
                  border="2px solid #38A169"
                  transitionDuration="300ms"
                  _hover={{
                    borderColor: 'primary.3',
                    transform: 'scale(1.05)'
                  }}
                >
                  <ImageX src={bgImg} w="full" h="full" />
                </Flex>
              </a>
            </Link>

            <Flex direction="column" alignItems="center" p={4} mt={0.5}>
              <Link href={route}>
                <a>
                  <Text
                    textTransform="uppercase"
                    fontSize={{ xs: 18, '2xl': 20 }}
                    fontWeight={600}
                    color="primary.2"
                    transitionDuration="300ms"
                    _hover={{
                      color: 'primary.3'
                    }}
                  >
                    {title}
                  </Text>
                </a>
              </Link>
              <Text color="#828282" fontStyle="italic" fontSize={{ xs: 14, '2xl': 16 }} mt={0.5}>
                {description}
              </Text>
            </Flex>
          </Box>
        );
      })}
    </Flex>
  );
};

export default memo(HomeCategory);
