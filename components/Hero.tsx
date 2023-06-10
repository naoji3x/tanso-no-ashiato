import {
  Box,
  Flex,
  Heading,
  Stack,
  VStack,
  useBreakpointValue
} from '@chakra-ui/react'
import url from 'lib/url'

const Hero = () => {
  return (
    <>
      <Flex
        w={'full'}
        minHeight={'70vh'}
        backgroundImage={`url(${url('/images/nasa-vhSz50AaFAs-unsplash.jpg')})`}
        backgroundSize={'cover'}
        backgroundPosition={'center center'}
      >
        <VStack w={'full'} justify={'center'} bgColor={'blackAlpha.700'}>
          <Stack
            key={'stack'}
            maxW={'2xl'}
            spacing={6}
            color={'white'}
            textAlign={'center'}
          >
            <Heading key={'heading'} as={'h1'} size={'4xl'}>
              炭素の足跡
            </Heading>
            <Box
              key={'body'}
              pt={4}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: 'xl', md: '2xl' })}
            >
              <Box px={3}>
                有名なあの人の、暮らしの中で発生する温室効果ガスの排出量ってどれくらい？
              </Box>
              <Box
                py={4}
                px={3}
                fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}
              >
                カーボンフットプリント
              </Box>
              <Box px={3}>一人一人の暮らしで発生する温室効果ガスの排出量</Box>
            </Box>
          </Stack>
        </VStack>
      </Flex>
    </>
  )
}

export default Hero
