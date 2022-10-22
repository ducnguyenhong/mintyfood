import { Box, ChakraProvider } from '@chakra-ui/react'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Footer from 'components/footer'
import Header from 'components/header'
import type { AppProps } from 'next/app'
import 'react-multi-carousel/lib/styles.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import '../styles/globals.css'

config.autoAddCss = false

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Box>
        <Header />
        <Box mt="65px">
          <Component {...pageProps} />
        </Box>
        <Footer />
      </Box>
    </ChakraProvider>
  )
}

export default MyApp
