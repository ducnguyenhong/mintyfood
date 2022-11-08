import { Box, Divider, Text } from '@chakra-ui/react';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useMutationLogout } from 'actions/mutate/logout';
import Link from 'next/link';
import { memo, useCallback } from 'react';

interface ActionAuthProps {
  onClose: () => void;
}

const ActionAuth: React.FC<ActionAuthProps> = ({ onClose }) => {
  const { mutate: logoutMutate } = useMutationLogout();

  const onLogout = useCallback(() => {
    onClose();
    logoutMutate();
  }, [onClose, logoutMutate]);

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
