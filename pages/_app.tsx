import { ChakraProvider } from '@chakra-ui/react'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import type { AppProps } from 'next/app'
import '../styles/globals.css'

config.autoAddCss = false

function MyApp({ Component, pageProps }: AppProps) {
  return <ChakraProvider><Component {...pageProps} /></ChakraProvider>
}

export default MyApp
