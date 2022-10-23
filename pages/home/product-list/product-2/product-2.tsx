import { AspectRatio, Badge, Box, Flex, Text } from "@chakra-ui/react";
import { faCartPlus, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ImageX from "components/image-x";
import Section from "components/section";
import { memo, useMemo } from "react";
import Carousel from "react-multi-carousel";
import { formatPrice } from "utils/helper";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2
  }
};

const ProductList2: React.FC = () => {
  const PRODUCT_DATA = useMemo(() => ([
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
  ]), [])

  return (
    <Box mt={28}>
      <Section title="Thức uống" />

      <Box mt={10}>
        <Carousel responsive={responsive}>
          {PRODUCT_DATA.map(item => {
            const { id, image, name, curentPrice, initPrice, category } = item
            return (
              <Flex
                direction="column"
                alignItems="center"
                key={id}
                px={5}
                py={4}
                mx={4}
                mb={4}
                borderRadius={10}
                border="1px solid #e6e6e6"
                cursor="pointer"
                _hover={{
                  boxShadow: 'lg'
                }}>
                <Flex justifyContent="space-between" w="full">
                  <Flex w={8} h={8} bgColor="purple" borderRadius="full" alignItems="center" justifyContent="center">
                    <Text fontSize={10} color="#FFF">-5%</Text>
                  </Flex>
                  <Badge>{category}</Badge>
                </Flex>
                <AspectRatio w="full" ratio={5 / 4}>
                  <ImageX src={image} h={4} />
                </AspectRatio>
                <Text color="#66BC42" fontWeight={700} fontSize={16}>{name}</Text>
                <Flex mt={1} gap={2} alignItems="center">
                  <Text color="#828282" textDecoration="line-through" fontSize={13}>{formatPrice(initPrice)}</Text>
                  <Text color="red" fontWeight={600} fontSize={16}>{formatPrice(curentPrice)}</Text>
                </Flex>
                <Flex mt={2} gap={8}>
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
            )
          })}
        </Carousel>
      </Box>
    </Box>
  )
}

export default memo(ProductList2)