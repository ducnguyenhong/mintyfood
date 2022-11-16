import {
  Box,
  Button,
  Divider,
  Flex,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Text,
  useDisclosure
} from '@chakra-ui/react';
import { faCaretDown, faInfoCircle, faSignOut } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useMutationLogout } from 'actions/mutate/logout';
import ImageX from 'components/image-x';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { memo, useCallback } from 'react';
import { useRecoilValue } from 'recoil';
import { userInfoAtom } from 'recoil/user-info';

const HeaderAuth: React.FC = () => {
  const userInfo = useRecoilValue(userInfoAtom);
  const { isOpen, onClose, onToggle } = useDisclosure();
  const router = useRouter();

  const { mutate: logoutMutate } = useMutationLogout();

  const onLogout = useCallback(() => {
    onClose();
    logoutMutate();
    router.push('/');
  }, [onClose, logoutMutate, router]);

  if (!userInfo) {
    return null;
  }

  const { fullName } = userInfo;

  return (
    <Popover isOpen={isOpen} onClose={onClose} placement="bottom-end">
      <PopoverTrigger>
        <Flex position="relative">
          <Button borderRadius={10} gap={4} alignItems="center" onClick={onToggle} h={12} px={6} bgColor="#f5f5f5">
            <ImageX w={10} h={10} borderRadius="full" src="/images/img-user-avatar.png" />
            <Text fontWeight={600} fontSize={16}>
              {fullName}
            </Text>
            <FontAwesomeIcon icon={faCaretDown} />
          </Button>
        </Flex>
      </PopoverTrigger>
      <PopoverContent w={56}>
        <PopoverArrow />
        <PopoverBody p={0}>
          <Link href="/thong-tin-ca-nhan">
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
                  <FontAwesomeIcon icon={faInfoCircle} />
                </Text>
                <Text as="span" transitionDuration="300ms" _groupHover={{ color: '#FFF' }} fontWeight={500}>
                  Thông tin cá nhân
                </Text>
              </Box>
            </a>
          </Link>
          <Divider />
          <Box
            cursor="pointer"
            borderTopStartRadius={4}
            borderTopRightRadius={4}
            onClick={onLogout}
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
              <FontAwesomeIcon icon={faSignOut} />
            </Text>
            <Text as="span" transitionDuration="300ms" _groupHover={{ color: '#FFF' }} fontWeight={500}>
              Đăng xuất
            </Text>
          </Box>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default memo(HeaderAuth);
