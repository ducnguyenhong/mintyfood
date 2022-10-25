import { Box, Flex, Text } from "@chakra-ui/react"
import ImageX from "components/image-x"
import Link from "next/link"
import { memo, useMemo } from "react"

const HomeCategory: React.FC = () => {
  const CATEGORY_DATA = useMemo(() => (
    [
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
    ]
  ), [])

  return (
    <Flex w="full" alignItems="center" justifyContent="center" mt={24}>
      {CATEGORY_DATA.map(item => {
        const { title, description, route, bgImg } = item
        return (
          <Link href={route} key={route}>
            <a>
              <Box mx={20}>
                <Box w={52} h={52} borderRadius="full" overflow="hidden" bgColor="#FFF" border="2px solid #38A169">
                  <ImageX src={bgImg} w="full" h="full" />
                </Box>
                <Flex direction="column" alignItems="center" p={4}>
                  <Text textTransform="uppercase">{title}</Text>
                  <Text color="#828282" fontStyle="italic">{description}</Text>
                </Flex>
              </Box>
            </a>
          </Link>
        )
      })}
    </Flex >
  )
}

export default memo(HomeCategory)