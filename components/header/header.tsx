import { Flex, Heading, Text } from '@chakra-ui/react';
import ImageX from 'components/image-x';
import Link from 'next/link';
import { memo, useCallback, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import HeaderAuth from './subs/header.auth';
import HeaderCart from './subs/header.cart';
import HeaderMenu from './subs/header.menu';
import { activeNavBarAtom } from './subs/header.recoil';
import HeaderSearch from './subs/header.search';

const Header: React.FC = () => {
  const [activeNavBar, setActiveNabBar] = useRecoilState(activeNavBarAtom);
  const handleScroll = useCallback(() => setActiveNabBar(window.pageYOffset > 50), [setActiveNabBar]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <Flex
      transitionDuration="500ms"
      bgColor={activeNavBar ? 'primary.1' : '#FFF'}
      boxShadow="sm"
      borderBottomWidth={1}
      h="68px"
      position="sticky"
      top={0}
      left={0}
      w="full"
      alignItems="center"
      px={32}
      justifyContent="space-between"
      zIndex={500}
    >
      <Flex alignItems="center">
        <Flex>
          <Link href="/">
            <a>
              <Flex alignItems="center">
                <ImageX src="/images/minty-food-logo.png" alt="logo" boxSize={12} />
                <Heading as="h3" fontSize={20} color={activeNavBar ? '#FFF' : '#e3594a'} ml={4}>
                  Minty{' '}
                  <Text as="span" fontSize={20} fontWeight={400} color={activeNavBar ? '#FFF' : 'primary.1'}>
                    Food
                  </Text>
                </Heading>
              </Flex>
            </a>
          </Link>
        </Flex>
        <HeaderSearch />
      </Flex>

      <Flex alignItems="center">
        <HeaderMenu />
        <HeaderCart />
        <HeaderAuth />
      </Flex>
    </Flex>
  );
};

export default memo(Header);
