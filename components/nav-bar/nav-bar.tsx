import { Flex, Heading, Text } from "@chakra-ui/react"
import ImageX from "components/image-x"
import Link from "next/link"
import { memo } from "react"
import ImgLogo from './images/media-site-logo.png'
import NavBarMenu from "./subs/nav-bar.menu"

const NavBar: React.FC = () => {
  return (
    <Flex bgColor="#FFF" boxShadow="sm" borderBottomWidth={1} h="65px" position="fixed" top={0} left={0} w="full" alignItems="center" px={16} justifyContent="space-between">
      <Flex>
        <Link href="/">
          <a>
            <Flex alignItems="center">
              <ImageX src={ImgLogo} alt="logo" boxSize={12} />
              <Heading as="h3" fontSize={20} color="#e3594a" ml={4} >Media <Text as="span" fontSize={20} fontWeight={400} color="#66BC42">Site</Text></Heading>
            </Flex>
          </a>
        </Link>
      </Flex>

      <NavBarMenu />
    </Flex>
  )
}

export default memo(NavBar)