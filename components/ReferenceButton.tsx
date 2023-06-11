import {
  Box,
  Button,
  ButtonProps,
  Heading,
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
import parse from 'html-react-parser'

type Props = {
  readonly contentReferences: readonly string[]
  readonly imageReferences: readonly string[]
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
          <ModalBody sx={{ a: { color: 'blue' } }}>
            <Box pb={5}>以下を参考にしています。</Box>
            <Box py={2}>
              <Heading size={'md'} py={1}>
                参考文献
              </Heading>
              {contentReferences.length === 0 ? (
                'なし'
              ) : (
                <OrderedList>
                  {contentReferences.map((ref, index) => (
                    <ListItem key={index}>{parse(ref)}</ListItem>
                  ))}
                </OrderedList>
              )}
            </Box>
            <Box py={2}>
              <Heading size={'md'} py={1}>
                画像出典
              </Heading>
              {imageReferences.length === 0 ? (
                'なし'
              ) : (
                <OrderedList>
                  {imageReferences.map((ref, index) => (
                    <ListItem key={index}>{parse(ref)}</ListItem>
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
