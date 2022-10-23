import { Flex } from "@chakra-ui/react"
import { memo } from "react"
import MoreInfo from "./more-info"
import NewsList from "./news-list"

const HomeNews: React.FC = () => {
  return (
    <Flex mt={20} px={32} gap={20}>
      <NewsList />
      <MoreInfo />
    </Flex>
  )
}

export default memo(HomeNews)