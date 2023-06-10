import { Box, BoxProps } from '@chakra-ui/react'
import markdownStyles from 'styles/markdown-styles.module.css'

type Props = {
  content: string
}

const PostBody = ({ content, ...rest }: Props & BoxProps) => {
  return (
    <Box {...rest} maxW={'4xl'} mx={'auto'} px={2}>
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </Box>
  )
}

export default PostBody
