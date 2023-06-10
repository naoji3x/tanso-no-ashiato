import { Box, Center, Flex, HStack, Heading, Icon } from '@chakra-ui/react'
import PostPreview from 'components/PostPreview'
import Post from 'interfaces/post'
import { MdTravelExplore } from 'react-icons/md'
type Props = {
  allPosts: Post[]
}

const Showcase = ({ allPosts }: Props) => {
  const sortedPosts = allPosts.sort((post1, post2) =>
    post1.date > post2.date ? -1 : 1
  )

  return (
    <Box w={'full'} py={10}>
      <Center>
        <Heading
          as={'h2'}
          size={'lg'}
          py={2}
          textAlign={'center'}
          alignItems={'center'}
          display={'flex'}
        >
          <Icon as={MdTravelExplore} boxSize={45} mr={4} />
          最近の投稿
        </Heading>
      </Center>
      <Flex overflowX="auto" maxW="100%">
        <Box display="flex" minWidth="100%">
          <HStack>
            {allPosts.map((post) => (
              <PostPreview key={post.slug} post={post} showFootprint={false} />
            ))}
          </HStack>
        </Box>
      </Flex>
    </Box>
  )
}

export default Showcase
