import { Box, ChakraProvider } from '@chakra-ui/react';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import DashboardLayout from 'components/dashboard-layout';
import FacebookChat from 'components/facebook-chat';
import Footer from 'components/footer';
import Header from 'components/header';
import { chakraTheme } from 'configs/chakra-theme';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import 'react-multi-carousel/lib/styles.css';
import { RecoilRoot } from 'recoil';
import '../services/firebase';
import '../styles/globals.css';

config.autoAddCss = false;

const queryClient = new QueryClient();

const CMS_ROUTES = ['/bang-dieu-khien', '/viet-bai-moi'];

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const isCMS = useMemo(() => CMS_ROUTES.includes(router.pathname), [router.pathname]);

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <ChakraProvider theme={chakraTheme}>
          {isCMS ? (
            <DashboardLayout>
              <Component {...pageProps} />
            </DashboardLayout>
          ) : (
            <Box>
              <Header />
              <Component {...pageProps} />
              <Footer />
              <FacebookChat />
            </Box>
          )}
        </ChakraProvider>
      </RecoilRoot>
    </QueryClientProvider>
  );
};

export default MyApp;
