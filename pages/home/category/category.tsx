import { AspectRatio, Flex, Text } from "@chakra-ui/react"
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
        bgImg: '/images/category-1.png'
      },
      {
        title: 'Thực phẩm',
        description: 'Phong phú & đa dạng',
        route: '/do-an3',
        bgImg: '/images/category-1.png'
      }
    ]
  ), [])

  return (
    <Flex w="full" alignItems="center" justifyContent="center" mt={10}>
      {CATEGORY_DATA.map(item => {
        const { title, description, route, bgImg } = item
        return (
          <Link href={route} key={route}>
            <a>
              <AspectRatio w={80} ratio={20 / 9} mx={8}>
                <Flex bgImage={bgImg} bgSize="cover" w="full" h="full">
                  <Flex direction="column" alignItems="center" bgColor="green" p={4}>
                    <Text color="#FFF" textTransform="uppercase">{title}</Text>
                    <Text color="#FFF" fontStyle="italic">{description}</Text>
                  </Flex>
                </Flex>
              </AspectRatio>
            </a>
          </Link>
        )
      })}
    </Flex>
  )
}

export default memo(HomeCategory)