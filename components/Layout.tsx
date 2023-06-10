import { Box } from '@chakra-ui/react'
import Footer from 'components/Footer'
import Navbar from 'components/Navbar'
import Head from 'next/head'
import { PropsWithChildren } from 'react'

interface Props {
  title?: string
  transparent?: boolean
}

const Layout = (props: PropsWithChildren<Props>) => {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Box as="header">
        <Navbar />
      </Box>
      <Box as="main">{props.children}</Box>
      <Footer />
    </>
  )
}

export default Layout
