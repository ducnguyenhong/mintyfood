import { Box } from '@chakra-ui/react';
import DashboardSection from 'components/dashboard-layout/section';
import DashboardTable from 'components/dashboard-table';
import { NextPage } from 'next';
import Head from 'next/head';

const CategoryList: NextPage = () => {
  return (
    <Box>
      <Head>
        <title>Danh sách chuyên mục | MintyFood</title>
      </Head>
      <Box bgColor="#FFF" p={6} minH="calc(100vh - 124px)">
        <DashboardSection title="Danh sách chuyên mục" />
        <DashboardTable />
      </Box>
    </Box>
  );
};

export default CategoryList;
