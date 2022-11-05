import { Box, Flex, Heading } from '@chakra-ui/react';
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
        <div
          className="fb-page"
          data-href="https://www.facebook.com/profile.php?id=100087440323791"
          data-width="400"
          data-height="200"
          data-small-header="true"
          data-adapt-container-width="true"
          data-hide-cover="false"
          data-show-facepile="true"
        >
          <blockquote cite="https://www.facebook.com/profile.php?id=100087440323791" className="fb-xfbml-parse-ignore">
            <a href="https://www.facebook.com/profile.php?id=100087440323791">Minty Food</a>
          </blockquote>
        </div>
      </Box>
    </Flex>
  );
};

export default memo(FooterNews);
