import {
  Box,
  Button,
  ButtonProps,
  Heading,
  Link,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  OrderedList,
  useDisclosure
} from '@chakra-ui/react'

type Reference = {
  title: string
  url: string
}

type Props = {
  readonly contentReferences: readonly Reference[]
  readonly imageReferences: readonly Reference[]
}

const ReferenceButton = ({
  contentReferences,
  imageReferences,
  ...rest
}: Props & ButtonProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button {...rest} onClick={onOpen}>
        出典
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>情報の出典元</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box pb={5}>以下の出典元を参考にしています。</Box>
            <Box py={2}>
              <Heading size={'md'} py={1}>
                参考文献
              </Heading>
              {contentReferences.length === 0 ? (
                'なし'
              ) : (
                <OrderedList>
                  {contentReferences.map((ref) => (
                    <ListItem key={ref.url}>
                      <Link href={ref.url} color={'blue'}>
                        {ref.title}
                      </Link>
                    </ListItem>
                  ))}
                </OrderedList>
              )}
            </Box>
            <Box py={2}>
              <Heading size={'md'} py={1}>
                画像引用
              </Heading>
              {imageReferences.length === 0 ? (
                'なし'
              ) : (
                <OrderedList>
                  {imageReferences.map((ref) => (
                    <ListItem key={ref.url}>
                      <Link href={ref.url} color={'blue'}>
                        {ref.title}
                      </Link>
                    </ListItem>
                  ))}
                </OrderedList>
              )}
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              閉じる
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ReferenceButton
