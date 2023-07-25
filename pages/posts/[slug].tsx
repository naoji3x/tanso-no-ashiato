import { Box, Container, Flex, Heading, Icon, VStack } from '@chakra-ui/react'

import Layout from 'components/Layout'
import PostBody from 'components/PostBody'
import PostHeader from 'components/PostHeader'
import Questionary from 'components/Questionary'
import { contentToHtml, getAllPosts, getPostBySlug } from 'lib/api'
import url from 'lib/url'
import ErrorPage from 'next/error'
import { useRouter } from 'next/router'
import { FaLeaf } from 'react-icons/fa'
import type PostType from '../../interfaces/post'
import { CMS_NAME } from '../../lib/constants'

type Props = {
  post: PostType
  morePosts: PostType[]
  preview?: boolean
}

export default function Post({ post, morePosts, preview }: Props) {
  const router = useRouter()
  const title = `${post.title} | Next.js Blog Example with ${CMS_NAME}`
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout>
      <Flex
        w={'full'}
        minHeight={'50vh'}
        backgroundImage={`url(${url(post.backgroundImage)})`}
        backgroundSize={'cover'}
        backgroundPosition={'center center'}
      >
        <Box w={'full'} bgColor={'blackAlpha.500'} />
      </Flex>

      <Flex bg={'gray.200'}>
        <Container maxW={'7xl'} px={{ base: '10px', sm: 4 }}>
          <Box
            p={{ base: 2, md: 5 }}
            mb={4}
            mx={{ base: 0, md: 4 }}
            mt={'-25vh'}
            bg={'white'}
            color={'black'}
            shadow={'base'}
            borderWidth={'1px'}
            borderRadius={'3xl'}
          >
            <VStack mb={10}>
              <PostHeader key={'header'} post={post} />
              <PostBody key={'body'} content={post.content} />
              <Box
                w={'full'}
                maxW={'5xl'}
                boxShadow={'lg'}
                borderWidth="1px"
                borderRadius={'2xl'}
                px={{ base: 3, sm: 5, md: 10 }}
                pt={6}
                pb={10}
                backgroundColor={'gray.50'}
              >
                <Heading as={'h3'} textAlign={'center'} py={2}>
                  <Icon as={FaLeaf} color="green.500" mr={2} />
                  質問に対する解答
                </Heading>
                <Questionary
                  allowToggle
                  housing={post.housing}
                  mobility={post.mobility}
                  food={post.food}
                  other={post.other}
                />
              </Box>
            </VStack>
          </Box>
        </Container>
      </Flex>
    </Layout>
  )
}

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug)
  // const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: await contentToHtml(post)
    }
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts()

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug
        }
      }
    }),
    fallback: false
  }
}
