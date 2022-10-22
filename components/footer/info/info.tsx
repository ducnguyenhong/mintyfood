import { Flex, Heading, Text } from "@chakra-ui/react"
import ImageX from "components/image-x"
import { memo } from "react"

const FooterInfo: React.FC = () => {
  return (
    <Flex direction="column" flex={1 / 4}>
      <Flex alignItems="center">
        <ImageX src='/images/minty-food-logo.png' alt="logo" boxSize={20} />
        <Heading as="h3" fontSize={22} color="#e3594a" ml={2} >Minty <Text as="span" fontSize={20} fontWeight={400} color="#66BC42">Food</Text></Heading>
      </Flex>
      <Text color="#F2F2F2" mt={2}>Cung cấp đồ ăn & thức uống dinh dưỡng cho sức khoẻ.</Text>
    </Flex>
  )
}

export default memo(FooterInfo)