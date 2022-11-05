import { Box, Divider, Text } from '@chakra-ui/react';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Cookies from 'js-cookie';
import Link from 'next/link';
import { memo, useCallback } from 'react';
import { useSetRecoilState } from 'recoil';
import { userInfoAtom } from 'recoil/user-info';

interface ActionAuthProps {
  onClose: () => void;
}

const ActionAuth: React.FC<ActionAuthProps> = ({ onClose }) => {
  const setUserInfo = useSetRecoilState(userInfoAtom);

  const onLogout = useCallback(() => {
    onClose();
    setUserInfo(undefined);
    Cookies.remove('access-token');
    Cookies.remove('expiration-time');
  }, [onClose, setUserInfo]);

  return (
    <Box>
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
              <FontAwesomeIcon icon={faSignOut} />
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
        <Text w={4} display="inline-block" transitionDuration="300ms" as="span" _groupHover={{ color: '#FFF' }} mr={3}>
          <FontAwesomeIcon icon={faSignOut} />
        </Text>
        <Text as="span" transitionDuration="300ms" _groupHover={{ color: '#FFF' }} fontWeight={500}>
          Đăng xuất
        </Text>
      </Box>
    </Box>
  );
};

export default memo(ActionAuth);
