import { Flex, Text } from "@chakra-ui/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import { useRouter } from "next/router"
import { memo, useCallback, useMemo } from "react"
import { useRecoilValue } from "recoil"
import { HEADER_DATA } from "./header.data"
import { activeNavBarAtom } from "./header.recoil"

const HeaderMenu: React.FC = () => {
  const activeNavBar = useRecoilValue(activeNavBarAtom)
  const router = useRouter()
  const activeBgColor = useMemo(() => activeNavBar ? '#FFF' : '#36af5c', [activeNavBar])
  const inActiveBgColor = useMemo(() => activeNavBar ? '#36af5c' : '#FFF', [activeNavBar])
  const groupHoverColor = useMemo(() => activeBgColor ? 'primary.2' : '#FFF', [activeBgColor])

  const getBgColorNav = useCallback((isActive: boolean) => isActive ? activeBgColor : inActiveBgColor, [activeBgColor, inActiveBgColor])

  const getColorNav = useCallback((isActive: boolean) => isActive ? inActiveBgColor : activeBgColor, [activeBgColor, inActiveBgColor])

  return (
    <Flex alignItems="center">
      {HEADER_DATA.map(item => {
        const { route, title, id, icon } = item
        const isActive = router.pathname === route

        return (
          <Link href={route} key={id}>
            <a>
              <Flex alignItems="center" mx={3} bgColor={getBgColorNav(isActive)} px={6} py='6px' borderRadius={4}
                data-group
                transitionDuration={activeNavBar ? '0ms' : "300ms"}
                _hover={{
                  bgColor: activeNavBar ? '#FFF' : 'primary.2'
                }}>
                <Text color={getColorNav(isActive)} _groupHover={{ color: groupHoverColor }} transitionDuration="200ms" mt="-1px">
                  <FontAwesomeIcon icon={icon} size="1x" />
                </Text>
                <Text ml={1.5} transitionDuration="200ms" fontSize={16} color={isActive ? (activeNavBar ? 'primary.1' : '#FFF') : (activeNavBar ? '#FFF' : 'primary.1')} _groupHover={{ color: groupHoverColor }}>{title}</Text>
              </Flex>
            </a>
          </Link>)
      })}
    </Flex >
  )
}

export default memo(HeaderMenu)