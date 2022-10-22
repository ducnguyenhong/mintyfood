import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Text, useDisclosure } from "@chakra-ui/react"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { memo } from "react"

const HeaderCart: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Flex
        w={10}
        h={10}
        borderRadius="full"
        bgColor='#66BC42'
        alignItems="center"
        justifyContent="center"
        cursor="pointer"
        position="relative"
        onClick={onOpen}
      >
        <FontAwesomeIcon icon={faCartShopping} color="#FFF" />
        <Flex
          w={5}
          h={5}
          borderRadius="full"
          bgColor='red'
          alignItems="center"
          justifyContent="center"
          position="absolute"
          top={-1.5}
          right={-1.5}>
          <Text color="#FFF" fontSize={11}>1</Text>
        </Flex>
      </Flex>

      <Drawer onClose={onClose} isOpen={isOpen} size="lg" autoFocus={false}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Giỏ hàng của bạn</DrawerHeader>
          <DrawerBody>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Consequat nisl vel pretium lectus quam id. Semper quis lectus
              nulla at volutpat diam ut venenatis. Dolor morbi non arcu risus
              quis varius quam quisque. Massa ultricies mi quis hendrerit dolor
              magna eget est lorem. Erat imperdiet sed euismod nisi porta.
              Lectus vestibulum mattis ullamcorper velit.
            </p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>

  )
}

export default memo(HeaderCart)