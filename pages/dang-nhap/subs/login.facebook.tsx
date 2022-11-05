import { Button, Text } from '@chakra-ui/react';
import ImageX from 'components/image-x';
import { memo } from 'react';
import { signInWithFacebook } from 'services/firebase';

const LoginFacebook: React.FC = () => {
  return (
    <Button
      type="button"
      onClick={signInWithFacebook}
      alignItems="center"
      w={40}
      bgColor="#FFF"
      color="text.1"
      mt={5}
      h={12}
      border="1px solid #e6e6e6"
      _hover={{
        bgColor: '#f7f7f7'
      }}
      _active={{
        bgColor: '#f7f7f7'
      }}
    >
      <ImageX w={6} h={6} src="/images/logo-facebook.png" mr={3} />
      <Text as="span">Facebook</Text>
    </Button>
  );
};

export default memo(LoginFacebook);
