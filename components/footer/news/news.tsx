import { Box, Flex, Heading, Link, Text } from '@chakra-ui/react';
import { memo, useMemo } from 'react';

const FooterNews: React.FC = () => {
  const NEWS_DATA = useMemo(
    () => [
      {
        title: 'Cách làm sữa chua',
        link: 'https'
      },
      {
        title: 'Cách làm sữa chua',
        link: 'tel:0868233430'
      },
      {
        title: 'Cách làm sữa chua',
        link: 'mailto:hayen.lalatet@gmail.com'
      },
      {
        title: 'Cách làm sữa chua',
        link: 'https'
      }
    ],
    []
  );

  return (
    <Flex direction="column" flex={1 / 4}>
      <Heading as="h4" fontSize={18} textTransform="uppercase" color="#FFF">
        Tin tức
      </Heading>
      <Box mt={5}>
        {NEWS_DATA.map((item) => {
          const { title, link } = item;

          return (
            <Link href={link} key={title} mb={1} _hover={{ textDecoration: 'none' }} display="block">
              <Flex>
                <Text color="#f2f2f2">• {title}</Text>
              </Flex>
            </Link>
          );
        })}
      </Box>
    </Flex>
  );
};

export default memo(FooterNews);
