import { Box, BoxProps, Container, Flex } from '@chakra-ui/react'
import Link from 'next/link'

export default function Navbar(props: BoxProps) {
  return (
    <Box {...props} p={2} position={'absolute'} top={0} w={'full'}>
      <Container maxW={'6xl'}>
        <Flex alignItems={'center'} justifyContent={'space-between'}>
          <Link href={'/'} color={'white'}>
            <Box color={'white'} fontWeight={'bold'} fontSize={'2xl'}>
              炭素の足跡
            </Box>
          </Link>
        </Flex>
      </Container>
    </Box>
  )
}
