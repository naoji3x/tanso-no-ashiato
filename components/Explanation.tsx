import {
  AccordionButton,
  AccordionIcon,
  Box,
  Heading,
  Icon,
  Image,
  Link,
  ListIcon,
  ListItem,
  Text
} from '@chakra-ui/react'
import url from 'lib/url'
import { PropsWithChildren } from 'react'

import { FaLeaf } from 'react-icons/fa'
import { MdCheckCircle } from 'react-icons/md'
import Questionary from './Questionary'

const QuestionaryItem = ({ children }: PropsWithChildren) => {
  return (
    <ListItem>
      <ListIcon as={MdCheckCircle} color="green.500" />
      {children}
    </ListItem>
  )
}

const QuestionaryCategory = ({
  iconImage,
  description
}: {
  iconImage: string
  description: string
}) => {
  return (
    <Heading as={'h3'}>
      <AccordionButton>
        <Image src={url(iconImage)} />
        <Box
          as="span"
          flex="1"
          pl={5}
          fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}
          fontWeight={'bold'}
          textAlign={'left'}
        >
          {description}
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </Heading>
  )
}

const Explanation = () => (
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
      カーボンフットプリントの計算方法
    </Heading>
    <Text py={3} fontSize={'xl'}>
      <Link href={'https://www.jibungoto-planet.jp/'} color={'blue'}>
        じぶんごとプラネット
      </Link>
      で公開されている、Code for
      Japanと国立環境研究所が提供するアルゴリズムに基づいて計算しています。
    </Text>

    <Text py={3} fontSize={'xl'}>
      住居、移動、食、モノとサービスに関わる以下の設問への回答から、個人のカーボンフットプリントを推定しています。
    </Text>
    <Questionary allowToggle />
  </Box>
)

export default Explanation
