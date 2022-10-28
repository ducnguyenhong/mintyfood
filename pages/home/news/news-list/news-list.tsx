import { AspectRatio, Badge, Box, Flex, Text } from '@chakra-ui/react';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ImageX from 'components/image-x';
import Section from 'components/section';
import dayjs from 'dayjs';
import Link from 'next/link';
import { memo, useMemo } from 'react';

const NewsList: React.FC = () => {
  const NEWS_DATA = useMemo(
    () => [
      {
        id: 1,
        thumbnail: 'http://freshfoods.vn/images/cam-nang-nau-an-freshfoods.jpg',
        title: 'Cách làm sữa chua tại nhà',
        description: 'Cách làm sữa chua tại nhà làm sữa chua tại nhà làm sữa chua tại nhà làm sữa chua tại nhà',
        createdAt: 1666504846000
      },
      {
        id: 2,
        thumbnail: 'http://freshfoods.vn/images/cam-nang-nau-an-freshfoods.jpg',
        title: 'Cách làm sữa chua tại nhà',
        description:
          'Cách làm sữa chua tại nhà làm sữa chua tại nhà làm sữa chua tại nhà làm sữa chua tại nhà Cách làm sữa chua tại nhà làm sữa chua tại nhà làm sữa chua tại nhà làm sữa chua tại nhà',
        createdAt: 1666504846000
      },
      {
        id: 3,
        thumbnail: 'http://freshfoods.vn/images/cam-nang-nau-an-freshfoods.jpg',
        title: 'Cách làm sữa chua tại nhà',
        description: 'Cách làm sữa chua tại nhà làm sữa chua tại nhà làm sữa chua tại nhà làm sữa chua tại nhà',
        createdAt: 1666504846000
      },
      {
        id: 4,
        thumbnail: 'http://freshfoods.vn/images/cam-nang-nau-an-freshfoods.jpg',
        title: 'Cách làm sữa chua tại nhà',
        description: 'Cách làm sữa chua tại nhà làm sữa chua tại nhà làm sữa chua tại nhà làm sữa chua tại nhà',
        createdAt: 1666504846000
      }
    ],
    []
  );

  return (
    <Flex direction="column" flex={2 / 3}>
      <Section title="Tin tức" />
      <Box mt={10}>
        {NEWS_DATA.map((item) => {
          const { id, title, thumbnail, createdAt, description } = item;
          return (
            <Flex key={id} mb={10} boxShadow="base" borderRadius={3} overflow="hidden" bgColor="#FFF">
              <Link href={`${id}`}>
                <a>
                  <AspectRatio ratio={4 / 3} w={40}>
                    <ImageX src={thumbnail} h={5} />
                  </AspectRatio>
                </a>
              </Link>

              <Flex direction="column" flex={1} px={5} justifyContent="space-between" pb={3}>
                <Box>
                  <Link href={`${id}`}>
                    <a>
                      <Text color="#66BC42" fontWeight={700} fontSize={17}>
                        {title}
                      </Text>
                    </a>
                  </Link>
                  <Text noOfLines={2} mt={0.5} lineHeight="18px" fontSize={13}>
                    {description}
                  </Text>
                </Box>
                <Flex alignItems="center" mt={1}>
                  <Flex alignItems="center">
                    <FontAwesomeIcon icon={faClock} color="#828282" size="sm" />
                    <Text fontSize={12} color="#828282" ml={1} mt={0.5}>
                      {dayjs(createdAt).format('DD/MM/YYYY')}
                    </Text>
                  </Flex>
                  <Flex alignItems="center" mt={-1}>
                    <Link href="/">
                      <a>
                        <Badge ml={4} colorScheme="green" variant="solid" pt={0.5}>
                          Thức uống
                        </Badge>
                      </a>
                    </Link>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          );
        })}
      </Box>
    </Flex>
  );
};

export default memo(NewsList);
