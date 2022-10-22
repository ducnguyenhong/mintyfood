import { Box, ChakraProvider } from '@chakra-ui/react'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import NavBar from 'components/nav-bar'
import type { AppProps } from 'next/app'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import '../styles/globals.css'

config.autoAddCss = false

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Box>
        <NavBar />
        <Box mt="65px">
          <Component {...pageProps} />
        </Box>
      </Box>
    </ChakraProvider>
  )
}

export default MyApp
