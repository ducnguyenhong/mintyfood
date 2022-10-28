import { Flex, Text } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { memo, useCallback, useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import { HEADER_DATA } from './header.data';
import { activeNavBarAtom } from './header.recoil';

const HeaderMenu: React.FC = () => {
  const activeNavBar = useRecoilValue(activeNavBarAtom);
  const router = useRouter();

  const navColor = useMemo(() => (activeNavBar ? '#FFF' : 'navBar.1'), [activeNavBar]);
  const textColor = useMemo(() => (activeNavBar ? '#FFF' : 'primary.1'), [activeNavBar]);
  const activeTextColor = useMemo(() => (activeNavBar ? 'primary.1' : '#FFF'), [activeNavBar]);

  const getNavBgColor = useCallback((isActive: boolean) => (isActive ? navColor : 'transparent'), [navColor]);

  const getTextColor = useCallback(
    (isActive: boolean) => (isActive ? activeTextColor : textColor),
    [activeTextColor, textColor]
  );

  return (
    <Flex alignItems="center">
      {HEADER_DATA.map((item) => {
        const { route, title, id, icon } = item;
        const isActive = router.pathname === route;
        const textColor = getTextColor(isActive);

        return (
          <Link href={route} key={id}>
            <a>
              <Flex
                alignItems="center"
                mx={3}
                bgColor={getNavBgColor(isActive)}
                px={6}
                py="6px"
                borderRadius={4}
                data-group
                transitionDuration="300ms"
                _hover={{
                  bgColor: navColor
                }}
              >
                <Text color={textColor} _groupHover={{ color: activeTextColor }} transitionDuration="200ms" mt="-1px">
                  <FontAwesomeIcon icon={icon} size="1x" />
                </Text>
                <Text
                  ml={1.5}
                  transitionDuration="200ms"
                  fontWeight={500}
                  fontSize={16}
                  color={textColor}
                  _groupHover={{ color: activeTextColor }}
                >
                  {title}
                </Text>
              </Flex>
            </a>
          </Link>
        );
      })}
    </Flex>
  );
};

export default memo(HeaderMenu);
