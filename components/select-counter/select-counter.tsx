import { Box, Flex, Text } from "@chakra-ui/react"
import { memo, useCallback, useState } from "react"

const SelectCounter: React.FC = () => {
  const [count, setCount] = useState<number>(1)

  const onAdd = useCallback(() => setCount(prev => prev + 1), [])

  const onMinus = useCallback(() => setCount(prev => prev > 1 ? prev - 1 : prev), [])

  return (
    <Flex alignItems="center">
      <Flex
        w={8}
        h={8}
        onClick={onMinus}
        border="1px solid #ed7878"
        borderRadius="full"
        cursor="pointer"
        alignItems="center"
        justifyContent="center"
        title="Giảm số lượng"
        transitionDuration="300ms"
        data-group
        _hover={{
          bgColor: 'red.400'
        }}
      >
        <button>
          <Text color="red" fontWeight={700} fontSize={18} transitionDuration="300ms" _groupHover={{ color: '#FFF' }}>
            -
          </Text>
        </button>
      </Flex>
      <Box w={20}>
        <Text textAlign="center" fontSize={17} fontWeight={600}>{count}</Text>
      </Box>
      <Flex
        w={8}
        h={8}
        border="1px solid #38A169"
        borderRadius="full"
        onClick={onAdd}
        cursor="pointer"
        alignItems="center"
        justifyContent="center"
        title="Tăng số lượng"
        transitionDuration="300ms"
        data-group
        _hover={{
          bgColor: 'green.500'
        }}
      >
        <button>
          <Text color="green.500" fontWeight={700} fontSize={18} transitionDuration="300ms" _groupHover={{ color: '#FFF' }}>
            +
          </Text>
        </button>
      </Flex>
    </Flex>
  )
}

export default memo(SelectCounter)