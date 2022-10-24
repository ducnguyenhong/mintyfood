import { Flex, Text } from "@chakra-ui/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import { useRouter } from "next/router"
import { memo } from "react"
import { HEADER_DATA } from "./header.data"

const HeaderMenu: React.FC = () => {
  const router = useRouter()

  return (
    <Flex alignItems="center">
      {HEADER_DATA.map(item => {
        const { route, title, id, icon } = item
        const isActive = router.pathname === route
        return (
          <Link href={route} key={id}>
            <a>
              <Flex alignItems="center" key={id} mx={3} bgColor={isActive ? '#38A169' : 'transparent'} px={6} py={1.5} borderRadius={4}
                data-group
                transitionDuration="300ms"
                _hover={{
                  bgColor: '#2F855A'
                }}>
                <Text color={isActive ? '#FFF' : '#292D32'} _groupHover={{ color: '#FFF' }} transitionDuration="200ms" mt="-1px">
                  <FontAwesomeIcon icon={icon} size="1x" />
                </Text>
                <Text ml={1.5} transitionDuration="200ms" fontSize={16} color={isActive ? '#FFF' : '#292D32'} _groupHover={{ color: '#FFF' }}>{title}</Text>
              </Flex>
            </a>
          </Link>)
      })}
    </Flex >
  )
}

export default memo(HeaderMenu)