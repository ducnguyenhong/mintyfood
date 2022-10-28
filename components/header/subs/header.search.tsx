import { Flex, Input, Text } from '@chakra-ui/react';
import { memo } from 'react';
import { useRecoilValue } from 'recoil';
import { activeNavBarAtom } from './header.recoil';

const HeaderSearch: React.FC = () => {
  const activeNavBar = useRecoilValue(activeNavBarAtom);

  return (
    <Flex position="relative" ml={20}>
      <Input
        placeholder="Tìm kiếm"
        w={{ xs: 72, '2xl': '300px' }}
        pr={10}
        py="18px"
        bgColor={activeNavBar ? '#f2f2f2' : '#fff'}
      />
      <button>
        <Text position="absolute" top={0.5} right={0} px={2.5} py={2}>
          <svg
            width="20px"
            height="20px"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#38A169"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </Text>
      </button>
    </Flex>
  );
};

export default memo(HeaderSearch);
