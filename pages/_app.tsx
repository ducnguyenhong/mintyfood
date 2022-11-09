import { Box, ChakraProvider } from '@chakra-ui/react';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useQueryUserInfo } from 'actions/query/user-info';
import DashboardLayout from 'components/dashboard-layout';
import { SIDE_BAR_ROUTES } from 'components/dashboard-layout/sidebar/sidebar.data';
import FacebookChat from 'components/facebook-chat';
import Footer from 'components/footer';
import Header from 'components/header';
import { chakraTheme } from 'configs/chakra-theme';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { memo, useMemo } from 'react';
import 'react-multi-carousel/lib/styles.css';
import { RecoilRoot, useSetRecoilState } from 'recoil';
import { userInfoAtom } from 'recoil/user-info';
import { checkIsLogin } from 'utils/helper';
import '../services/firebase';
import '../styles/globals.css';

config.autoAddCss = false;

const queryClient = new QueryClient();

const MainLayout: React.FC<any> = memo(({ children }) => {
  const isLogged = checkIsLogin();
  const { data: userInfo, isLoading } = useQueryUserInfo(isLogged);
  const setUserInfo = useSetRecoilState(userInfoAtom);

  // useEffect(() => userInfo && setUserInfo(userInfo), [setUserInfo, userInfo]);

  console.log('ducnh isLoading', isLoading);

  // if (isLogged && isLoading) {
  //   return <div>Loading</div>;
  // }

  return <Box>{children}</Box>;
});

MainLayout.displayName = 'MainLayout';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const isCMS = useMemo(() => SIDE_BAR_ROUTES.includes(router.pathname), [router.pathname]);

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <ChakraProvider theme={chakraTheme}>
          <MainLayout>
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
          </MainLayout>
        </ChakraProvider>
      </RecoilRoot>
    </QueryClientProvider>
  );
};

export default MyApp;
