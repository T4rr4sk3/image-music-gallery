import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { BreakpointContextProvider } from '../components/contexts/BreakpointContext'

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <ChakraProvider>
      <BreakpointContextProvider>
        <Component {...pageProps} />
      </BreakpointContextProvider>
    </ChakraProvider>
  )
}

export default MyApp
