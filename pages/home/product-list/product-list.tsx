import { Box } from "@chakra-ui/react"
import { memo } from "react"
import ProductList1 from "./product-1"
import ProductList2 from "./product-2"
import ProductListTop from "./product-top"

const ProductList: React.FC = () => {
  return (
    <Box px={32} mt={28}>
      <ProductListTop />
      <ProductList1 />
      <ProductList2 />
    </Box>
  )
}

export default memo(ProductList)