import {
  Box,
  Container,
  Flex,
  Stack,
  Text,
  VStack,
  useBreakpointValue
} from '@chakra-ui/react'
import Explanation from 'components/Explanation'
import FeaturedPostPreview from 'components/FeaturedPostPreview'
import Hero from 'components/Hero'
import Layout from 'components/Layout'
import Showcase from 'components/Showcase'
import Post from 'interfaces/post'
import { getAllPosts } from '../lib/api'

type Props = {
  allPosts: Post[]
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts()
  return {
    props: { allPosts }
  }
}

const Index = ({ allPosts }: Props) => (
  <Layout title="炭素の足跡">
    <Hero />
    <Flex>
      <Container maxW={'7xl'} px={{ base: '10px', sm: 4 }}>
        <Box p={{ base: 2, md: 5 }} mb={4} mx={{ base: 0, md: 4 }} bg={'white'}>
          <VStack>
            <Featured allPosts={allPosts} />
            <Explanation />
            <Showcase allPosts={allPosts} />
          </VStack>
        </Box>
      </Container>
    </Flex>
  </Layout>
)

export default Index

const Featured = ({ allPosts }: Props) => {
  const firstThree = allPosts.slice(0, 3)
  return (
    <VStack>
      <Flex mt={{ base: '-50px', md: '-100px', lg: '-150px' }} w={'full'}>
        <Stack
          direction={{ base: 'column', lg: 'row' }}
          align={'center'}
          w={'full'}
          spacing={{ base: '55px', lg: '20px' }}
        >
          {firstThree.map((post: Post) => (
            <FeaturedPostPreview key={post.slug} post={post} />
          ))}
        </Stack>
      </Flex>
      <Box py={1} fontSize={'2xl'} textAlign={'center'}>
        現在、日本人1人あたりのカーボンフットプリント量は平均
        <Text as="span" decoration={'underline'} fontWeight={'bold'}>
          約7トン
        </Text>
        、{useBreakpointValue({ base: '', lg: <br /> })}
        2030年までに
        <Text as="span" decoration={'underline'} fontWeight={'bold'}>
          約3トン
        </Text>
        に減らす必要があります。
      </Box>
      <Box pb={'10'} textAlign={'center'}></Box>
    </VStack>
  )
}
