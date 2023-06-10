import {
  Box,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import ReferenceButton from 'components/ReferenceButton'
import Post from 'interfaces/post'
import url from 'lib/url'
import Link from 'next/link'

type Props = {
  post: Post
}

const FeaturedPostPreview = ({ post }: Props) => {
  return (
    <Box
      position={'relative'}
      maxW={'3xl'}
      w={{ base: 'full', lg: 1 / 3 }}
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: 'center', lg: 'flex-start' }}
      borderColor={useColorModeValue('gray.200', 'gray.500')}
      borderRadius={'3xl'}
      background={'white'}
    >
      <Box key={'reference'} position="absolute" top={2} right={2}>
        <ReferenceButton
          contentReferences={post.contentReferences}
          imageReferences={post.imageReferences}
        />
      </Box>

      <Stack align={'center'} w={'full'}>
        <Flex key={'image'} mt={'-50px'}>
          <Link href={`/posts/${post.slug}`}>
            <Image
              h={'auto'}
              borderRadius={'full'}
              alt="Image"
              objectFit="cover"
              boxShadow={'md'}
              boxSize={'200px'}
              src={url(post.iconImage)}
            />
          </Link>
        </Flex>
        <Box key={'body'} px={'20px'} pb={'10px'} textAlign={'center'}>
          <Heading as={'h2'} size={'lg'} pt={2} pb={3}>
            <Link href={`/posts/${post.slug}`}>{post.title}</Link>
          </Heading>
          <Link href={`/posts/${post.slug}`}>
            <Text h={{ base: 16, lg: 20, xl: 16 }} color={'gray.600'}>
              {post.tagline}
            </Text>
          </Link>
        </Box>
      </Stack>
    </Box>
  )
}

export default FeaturedPostPreview
