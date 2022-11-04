import { Box, ChakraProvider } from '@chakra-ui/react';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Footer from 'components/footer';
import Header from 'components/header';
import { chakraTheme } from 'configs/chakra-theme';
import type { AppProps } from 'next/app';
import 'react-multi-carousel/lib/styles.css';
import { RecoilRoot } from 'recoil';
import '../styles/globals.css';

config.autoAddCss = false;

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <ChakraProvider theme={chakraTheme}>
          <Box>
            <Header />
            <Component {...pageProps} />
            <Footer />
          </Box>
        </ChakraProvider>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default MyApp;
