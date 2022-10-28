import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Text,
  useDisclosure
} from '@chakra-ui/react';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { memo } from 'react';
import { useRecoilValue } from 'recoil';
import { activeNavBarAtom } from './header.recoil';

const HeaderCart: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const activeNavBar = useRecoilValue(activeNavBarAtom);

  return (
    <Flex>
      <Flex
        w={10}
        h={10}
        borderRadius="full"
        bgColor={activeNavBar ? '#FFF' : 'navBar.1'}
        alignItems="center"
        justifyContent="center"
        transitionDuration="300ms"
        cursor="pointer"
        position="relative"
        onClick={onOpen}
      >
        <Text as="span" color={activeNavBar ? '#38A169' : '#FFF'} transitionDuration="300ms">
          <FontAwesomeIcon icon={faCartShopping} />
        </Text>
        <Flex
          w={5}
          h={5}
          borderRadius="full"
          bgColor="#fa3c3c"
          alignItems="center"
          justifyContent="center"
          position="absolute"
          top={-1.5}
          right={-1.5}
        >
          <Text color="#FFF" fontSize={11}>
            1
          </Text>
        </Flex>
      </Flex>

      <Drawer preserveScrollBarGap onClose={onClose} isOpen={isOpen} size="lg" autoFocus={false}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Giỏ hàng của bạn</DrawerHeader>
          <DrawerBody>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Consequat nisl vel pretium lectus quam id. Semper quis lectus nulla at volutpat diam
              ut venenatis. Dolor morbi non arcu risus quis varius quam quisque. Massa ultricies mi quis hendrerit dolor
              magna eget est lorem. Erat imperdiet sed euismod nisi porta. Lectus vestibulum mattis ullamcorper velit.
            </p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default memo(HeaderCart);
