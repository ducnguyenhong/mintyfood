import { Box, Divider, Text } from '@chakra-ui/react';
import { faSignIn, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { memo } from 'react';

interface ActionNoAuthProps {
  onClose: () => void;
}

const ActionNoAuth: React.FC<ActionNoAuthProps> = ({ onClose }) => {
  return (
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
  );
};

export default memo(ActionNoAuth);
