import { ChakraProvider } from '@chakra-ui/react'
import '@fortawesome/fontawesome-free/css/all.min.css'
import { AppProps } from 'next/app'
import { chakraTheme } from 'utils/chakratheme'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={chakraTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
