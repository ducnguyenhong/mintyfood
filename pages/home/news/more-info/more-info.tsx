import { Box, Flex, FormControl, Heading, Input } from "@chakra-ui/react"
import { memo } from "react"

const MoreInfo: React.FC = () => {
  return (
    <Flex flex={1 / 3} flexDirection="column">
      <Box>
        <Heading as="h3" fontSize={18}>Liên hệ tư vấn mua hàng</Heading>
        <FormControl>
          <Input placeholder="Họ tên của bạn" />
          <Input placeholder="SĐT của bạn" />
          <Input placeholder="Nội dung cần tư vấn" />
        </FormControl>
      </Box>

      <Box mt={10}>
        <iframe width="100%" height="260" src="https://www.youtube.com/embed/vRqxmcfaeeY" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </Box>
    </Flex>
  )
}

export default memo(MoreInfo)