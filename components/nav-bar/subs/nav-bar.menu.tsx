import { Box, Flex, Text } from "@chakra-ui/react"
import Link from "next/link"
import { useRouter } from "next/router"
import { memo } from "react"
import { NAVBAR_DATA } from "./nav-bar.data"

const NavBarMenu: React.FC = () => {
  const router = useRouter()


  return (
    <Flex alignItems="center">
      {NAVBAR_DATA.map(item => {
        const isActive = router.pathname === item.route
        return (
          <Link href={item.route} key={item.id}>
            <a>
              <Box key={item.id} mx={3} bgColor={isActive ? '#66BC42' : 'transparent'} px={6} py={1.5} borderRadius={4}
                data-group
                transitionDuration="300ms"
                _hover={{
                  bgColor: '#66BC42'
                }}>
                <Text transitionDuration="200ms" fontSize={16} color={isActive ? '#FFF' : '#000'} _groupHover={{ color: '#FFF' }}>{item.title}</Text>
              </Box>
            </a>
          </Link>)
      })}
    </Flex >
  )
}

export default memo(NavBarMenu)