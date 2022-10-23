import { AspectRatio, Box, Flex, Heading, Text } from "@chakra-ui/react"
import ImageX from "components/image-x"
import dayjs from 'dayjs'
import Link from "next/link"
import { memo, useMemo } from "react"

const NewsList: React.FC = () => {
  const NEWS_DATA = useMemo(() => ([
    {
      id: 1,
      thumbnail: 'http://freshfoods.vn/images/cam-nang-nau-an-freshfoods.jpg',
      title: 'Cách làm sữa chua tại nhà',
      description: 'Cách làm sữa chua tại nhà làm sữa chua tại nhà làm sữa chua tại nhà làm sữa chua tại nhà',
      createdAt: 1666504846
    },
    {
      id: 2,
      thumbnail: 'http://freshfoods.vn/images/cam-nang-nau-an-freshfoods.jpg',
      title: 'Cách làm sữa chua tại nhà',
      description: 'Cách làm sữa chua tại nhà làm sữa chua tại nhà làm sữa chua tại nhà làm sữa chua tại nhà',
      createdAt: 1666504846
    },
    {
      id: 3,
      thumbnail: 'http://freshfoods.vn/images/cam-nang-nau-an-freshfoods.jpg',
      title: 'Cách làm sữa chua tại nhà',
      description: 'Cách làm sữa chua tại nhà làm sữa chua tại nhà làm sữa chua tại nhà làm sữa chua tại nhà',
      createdAt: 1666504846
    },
  ]), [])

  return (
    <Flex direction="column" flex={2 / 3}>
      <Box position="relative" pt={4} h={8}>
        <Heading
          as="h3"
          w="fit-content"
          textTransform="uppercase"
          px={4}
          color="green"
          fontSize={18}
          position="absolute"
          bgColor="#FFF"
          top="1px"
          left={0}
          right={0}
          mx="auto"
          textAlign="center"
        >Tin tức</Heading>
        <Box w="full" h="1px" bgColor="#d9d9d9" />
      </Box>
      <Box mt={10}>
        {NEWS_DATA.map(item => {
          const { id, title, thumbnail, createdAt, description } = item
          return (
            <Box key={id} mb={10}>
              <Link href={`${id}`} >
                <a>
                  <Flex>
                    <AspectRatio ratio={4 / 3} w="30%">
                      <ImageX src={thumbnail} h={5} />
                    </AspectRatio>
                    <Box>
                      <Text>{title}</Text>
                      <Text>{dayjs(createdAt).format('DD/MM/YYYY')}</Text>
                      <Box />
                      <Text>
                        {description}
                      </Text>
                    </Box>
                  </Flex>
                </a>
              </Link>
            </Box>
          )
        })}
      </Box>
    </Flex>
  )
}

export default memo(NewsList)