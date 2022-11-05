import { Button, Text } from '@chakra-ui/react';
import ImageX from 'components/image-x';
import { memo } from 'react';
import { signInWithGoogle } from 'services/firebase';

const LoginGoogle: React.FC = () => {
  return (
    <Button
      type="button"
      onClick={signInWithGoogle}
      alignItems="center"
      w={40}
      bgColor="#FFF"
      color="text.1"
      border="1px solid #e6e6e6"
      mt={5}
      h={12}
      _hover={{
        bgColor: '#f7f7f7'
      }}
      _active={{
        bgColor: '#f7f7f7'
      }}
    >
      <ImageX w={6} h={6} src="/images/logo-google.png" mr={3} />
      <Text as="span">Google</Text>
    </Button>
  );
};

export default memo(LoginGoogle);
