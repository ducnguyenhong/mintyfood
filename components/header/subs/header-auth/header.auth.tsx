import {
  Button,
  Flex,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Text,
  useDisclosure
} from '@chakra-ui/react';
import { faCheck, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { memo } from 'react';
import { useRecoilValue } from 'recoil';
import { userInfoAtom } from 'recoil/user-info';
import { activeNavBarAtom } from '../header.recoil';
import ActionAuth from './action-auth';
import ActionNoAuth from './action-no-auth';

const HeaderAuth: React.FC = () => {
  const activeNavBar = useRecoilValue(activeNavBarAtom);
  const userInfo = useRecoilValue(userInfoAtom);
  const { isOpen, onClose, onToggle } = useDisclosure();

  return (
    <Popover isOpen={isOpen} onClose={onClose}>
      <PopoverTrigger>
        <Flex position="relative">
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
          {!!userInfo && (
            <Flex
              w={5}
              h={5}
              borderRadius="full"
              alignItems="center"
              bgColor="#0e70f1"
              justifyContent="center"
              position="absolute"
              top={-1.5}
              right={-1.5}
            >
              <FontAwesomeIcon icon={faCheck} color="#FFF" size="xs" />
            </Flex>
          )}
        </Flex>
      </PopoverTrigger>
      <PopoverContent w={56}>
        <PopoverArrow />
        <PopoverBody p={0}>
          {userInfo ? <ActionAuth onClose={onClose} /> : <ActionNoAuth onClose={onClose} />}
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default memo(HeaderAuth);
