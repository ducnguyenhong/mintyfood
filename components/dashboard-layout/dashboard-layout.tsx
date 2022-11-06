import { Box, Flex } from '@chakra-ui/react';
import { memo, ReactNode } from 'react';
import Header from './header';
import SideBar from './sidebar';

const DashboardLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Flex>
      <SideBar />

      <Box bgColor="cmsBg.2" flex={1} ml={72}>
        <Header />

        <Box mt="64px" boxShadow="sm" borderRadius={4}>
          <Box p={8}>{children}</Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default memo(DashboardLayout);
