import { Box } from "@chakra-ui/react";
import ProductItemShow from "components/product-item-show";
import Section from "components/section";
import { ProductItem } from "models/product-item";
import { memo, useMemo } from "react";
import Carousel from "react-multi-carousel";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
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

const ProductListTop: React.FC = () => {
  const PRODUCT_DATA: ProductItem[] = useMemo(() => ([
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
    },
  ]), [])

  return (
    <Box>
      <Section title="Sản phẩm đang bán chạy" />

      <Box mt={10} px={20}>
        <Carousel responsive={responsive}>
          {PRODUCT_DATA.map(item => <ProductItemShow key={item.id} item={item} />)}
        </Carousel>
      </Box>
    </Box>
  )
}

export default memo(ProductListTop)