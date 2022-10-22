import { Box, Flex, Heading, Link, Text } from "@chakra-ui/react"
import { memo, useMemo } from "react"

const FooterAboutUs: React.FC = () => {
  const ABOUT_US_DATA = useMemo(() => ([
    {
      title: 'Giới thiệu',
      link: 'https'
    },
    {
      title: 'Điều khoản sử dụng',
      link: 'tel:0868233430'
    },
    {
      title: 'Khiếu nại',
      link: 'mailto:hayen.lalatet@gmail.com'
    },
  ]), [])

  return (
    <Flex direction="column" flex={1 / 4}>
      <Heading as="h4" fontSize={18} textTransform="uppercase" color="#FFF">Về chúng tôi</Heading>
      <Box mt={5}>
        {ABOUT_US_DATA.map(item => {
          const { title, link } = item

          return (
            <Link href={link} target="_blank" rel="noopener moreferrer" key={title} mb={1}
              _hover={{ textDecoration: "none" }}
              display="block"
            >
              <Flex>
                <Text color="#f2f2f2">• {title}</Text>
              </Flex>
            </Link>
          )
        })}
      </Box>
    </Flex >
  )
}

export default memo(FooterAboutUs)