import {
  Box,
  Button,
  Divider,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Text,
  useDisclosure
} from '@chakra-ui/react';
import { faSignIn, faUserAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { memo } from 'react';
import { useRecoilValue } from 'recoil';
import { activeNavBarAtom } from './header.recoil';

const HeaderAuth: React.FC = () => {
  const activeNavBar = useRecoilValue(activeNavBarAtom);
  const { isOpen, onClose, onToggle } = useDisclosure();

  return (
    <Popover isOpen={isOpen} onClose={onClose}>
      <PopoverTrigger>
        <Button
          w={10}
          h={10}
          borderRadius="full"
          bgColor={activeNavBar ? 'primary.1' : '#FFF'}
          border={activeNavBar ? '1.5px solid #FFF' : '1.5px solid #38A169'}
          ml={5}
          data-group
          transitionDuration="300ms"
          _hover={{
            bgColor: 'primary.1'
          }}
          _active={{
            bgColor: 'primary.1'
          }}
          onClick={onToggle}
        >
          <Text
            color={activeNavBar ? '#FFF' : '#38A169'}
            transitionDuration="300ms"
            _groupHover={{
              color: '#FFF'
            }}
          >
            <FontAwesomeIcon icon={faUserAlt} />
          </Text>
        </Button>
      </PopoverTrigger>
      <PopoverContent w={56}>
        <PopoverArrow />
        <PopoverBody p={0}>
          <Box>
            <Link href="/dang-nhap">
              <a>
                <Box
                  borderTopStartRadius={4}
                  borderTopRightRadius={4}
                  onClick={onClose}
                  transitionDuration="300ms"
                  py={2.5}
                  px={5}
                  _hover={{ bgColor: 'primary.1' }}
                  data-group
                >
                  <Text
                    w={4}
                    display="inline-block"
                    transitionDuration="300ms"
                    as="span"
                    _groupHover={{ color: '#FFF' }}
                    mr={3}
                  >
                    <FontAwesomeIcon icon={faSignIn} />
                  </Text>
                  <Text as="span" transitionDuration="300ms" _groupHover={{ color: '#FFF' }} fontWeight={500}>
                    Đăng nhập
                  </Text>
                </Box>
              </a>
            </Link>
            <Divider />
            <Link href="/dang-ky">
              <a>
                <Box
                  borderBottomStartRadius={4}
                  borderBottomEndRadius={4}
                  onClick={onClose}
                  transitionDuration="300ms"
                  py={2.5}
                  px={5}
                  _hover={{ bgColor: 'primary.1' }}
                  data-group
                >
                  <Text
                    w={4}
                    display="inline-block"
                    transitionDuration="300ms"
                    as="span"
                    _groupHover={{ color: '#FFF' }}
                    mr={3}
                  >
                    <FontAwesomeIcon icon={faUserPlus} />
                  </Text>
                  <Text as="span" transitionDuration="300ms" _groupHover={{ color: '#FFF' }} fontWeight={500}>
                    Đăng ký tài khoản
                  </Text>
                </Box>
              </a>
            </Link>
          </Box>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default memo(HeaderAuth);
