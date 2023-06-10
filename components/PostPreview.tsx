import {
  Box,
  BoxProps,
  Center,
  Heading,
  Image,
  Stack,
  VStack,
  useColorModeValue
} from '@chakra-ui/react'
import Cloud from 'components/Cloud'
import ReferenceButton from 'components/ReferenceButton'
import Post from 'interfaces/post'
import url from 'lib/url'
import Link from 'next/link'

type Props = {
  post: Post
  showFootprint?: boolean
}

const IMAGE =
  'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'

const PostPreview = ({
  post,
  showFootprint = true,
  ...rest
}: Props & BoxProps) => {
  return (
    <Box {...rest}>
      <Center py={12}>
        <VStack>
          <Box
            position="relative"
            top={0}
            role={'group'}
            p={6}
            maxW={'330px'}
            w={'full'}
            bg={useColorModeValue('white', 'gray.800')}
            boxShadow={'lg'}
            rounded={'lg'}
            borderWidth="1px"
            borderColor={useColorModeValue('gray.200', 'gray.500')}
          >
            <Box key={'reference'} position="absolute" top={2} right={2}>
              <ReferenceButton
                contentReferences={post.contentReferences}
                imageReferences={post.imageReferences}
              />
            </Box>

            <VStack>
              <Link href={`/posts/${post.slug}`} key={'link'}>
                <Center>
                  <Image
                    key={'image'}
                    h={'auto'}
                    borderRadius={'full'}
                    alt="Image"
                    objectFit="cover"
                    boxShadow={'md'}
                    boxSize={'150px'}
                    src={url(post.iconImage)}
                  />
                </Center>
                <Stack key={'stack'} pt={3} align={'center'}>
                  <Heading
                    key={'heading'}
                    fontSize={'2xl'}
                    fontFamily={'body'}
                    fontWeight={'bold'}
                  >
                    {post.title}
                  </Heading>
                  <Cloud
                    key={'cloud'}
                    value={showFootprint ? post.totalEstimation : NaN}
                  />
                </Stack>
              </Link>
            </VStack>
          </Box>
        </VStack>
      </Center>
    </Box>
  )
}

export default PostPreview
