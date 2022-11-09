import { Box, Divider, Flex, Heading, Text } from '@chakra-ui/react';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { memo } from 'react';
import { SIDE_BAR_DATA } from './sidebar.data';

const SideBar: React.FC = () => {
  const router = useRouter();

  return (
    <Box bgColor="cmsBg.1" h="100vh" w={72} position="fixed" top={0} left={0}>
      <Box p={6}>
        <Heading as="h3" fontWeight={600} fontSize={18} color="#FFF" textAlign="center" textTransform="uppercase">
          Bảng điều khiển
        </Heading>

        <Box p={2} mt={4} borderRadius={3} transitionDuration="300ms" data-group>
          <Link href="/">
            <a target="_blank">
              <Flex gap={3} justifyContent="center">
                <Text as="span" color="cmsText.1" w={4} transitionDuration="300ms" _groupHover={{ color: 'cmsText.3' }}>
                  <FontAwesomeIcon icon={faEye} />
                </Text>
                <Text
                  as="span"
                  color="cmsText.1"
                  fontWeight={600}
                  transitionDuration="300ms"
                  _groupHover={{ color: 'cmsText.3' }}
                >
                  Xem trang web
                </Text>
              </Flex>
            </a>
          </Link>
        </Box>
      </Box>
      <Divider />
      <Box px={6} mt={4}>
        {SIDE_BAR_DATA.map((item) => {
          const { title: blockTitle, routes } = item;
          return (
            <Box mt={8} key={blockTitle}>
              <Text color="cmsText.2" mb={2} textTransform="uppercase" fontSize={12}>
                {blockTitle}
              </Text>
              {routes.map((routeItem) => {
                const { title, icon, route } = routeItem;
                return (
                  <Box
                    key={title}
                    p={3}
                    mt={1}
                    borderRadius={3}
                    bgColor={route === router.pathname ? 'cmsBg.3' : 'transparent'}
                    transitionDuration="300ms"
                    data-group
                    _hover={{
                      bgColor: 'cmsBg.3'
                    }}
                  >
                    <Link href={route}>
                      <a>
                        <Flex gap={3}>
                          <Text
                            as="span"
                            color={route === router.pathname ? 'cmsText.3' : 'cmsText.1'}
                            w={4}
                            transitionDuration="300ms"
                            _groupHover={{ color: 'cmsText.3' }}
                          >
                            <FontAwesomeIcon icon={icon} />
                          </Text>
                          <Text
                            as="span"
                            color={route === router.pathname ? 'cmsText.3' : 'cmsText.1'}
                            fontWeight={600}
                            transitionDuration="300ms"
                            _groupHover={{ color: 'cmsText.3' }}
                          >
                            {title}
                          </Text>
                        </Flex>
                      </a>
                    </Link>
                  </Box>
                );
              })}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default memo(SideBar);
