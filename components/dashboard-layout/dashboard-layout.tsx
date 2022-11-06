import { Box, Divider, Flex, Heading, Text } from '@chakra-ui/react';
import { faList, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { memo, ReactNode } from 'react';

const DashboardLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Flex>
      <Box bgColor="cmsBg.1" h="100vh" w={72}>
        <Box p={6}>
          <Heading as="h3" fontWeight={600} fontSize={18} color="#FFF" textAlign="center" textTransform="uppercase">
            Bảng điều khiển
          </Heading>
        </Box>
        <Divider />
        <Box px={6} mt={4}>
          <Text color="cmsText.2" mb={2} textTransform="uppercase" fontSize={12}>
            Blog
          </Text>
          <Box>
            <Link href="/viet-bai">
              <a>
                <Flex gap={3}>
                  <Text as="span" color="cmsText.1" w={4}>
                    <FontAwesomeIcon icon={faPlusCircle} />
                  </Text>
                  <Text as="span" color="cmsText.1" fontWeight={600}>
                    Viết bài mới
                  </Text>
                </Flex>
              </a>
            </Link>
          </Box>
          <Box mt={4}>
            <Link href="/viet-bai">
              <a>
                <Flex gap={3}>
                  <Text as="span" color="cmsText.1" w={4}>
                    <FontAwesomeIcon icon={faList} />
                  </Text>
                  <Text as="span" color="cmsText.1" fontWeight={600}>
                    Danh sách bài viết
                  </Text>
                </Flex>
              </a>
            </Link>
          </Box>
        </Box>
      </Box>

      <Box>aaa</Box>
    </Flex>
  );
};

export default memo(DashboardLayout);
