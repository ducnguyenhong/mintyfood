import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text
} from '@chakra-ui/react';
import { faEyeSlash, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ImageX from 'components/image-x';
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { SubmitHandler, useForm } from 'react-hook-form';
import { signInWithFacebook, signInWithGoogle } from 'services/firebase';

interface FormData {
  username: string;
  password: string;
}

const Login: NextPage = () => {
  const { register, handleSubmit } = useForm<FormData>({
    defaultValues: {
      username: '',
      password: ''
    }
  });
  const onSubmit: SubmitHandler<FormData> = (data) => console.log(data);

  return (
    <Box>
      <Head>
        <title>Đăng nhập | Minty Food</title>
      </Head>
      <Box>
        <Flex>
          <Flex flex={2 / 5} minH="calc(100vh - 68px)">
            <ImageX src="/images/login-intro.jpg" w="full" />
          </Flex>
          <Flex flex={3 / 5} alignItems="center">
            <Box w={{ xs: '40%', xl: '40%', '2xl': '35%' }} mx="auto">
              <Flex justifyContent="center" alignItems="center" mb={10}>
                <ImageX src="/images/minty-food-logo.png" boxSize={16} />
                <Heading as="h3" fontSize={24} color="text.1" ml={2}>
                  Đăng nhập vào MintyFood
                </Heading>
              </Flex>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Box>
                  <InputGroup>
                    <InputLeftElement pointerEvents="none" h={12}>
                      <FontAwesomeIcon icon={faUser} color="#828282" />
                    </InputLeftElement>
                    <Input
                      {...register('username', { required: true })}
                      h={12}
                      placeholder="Tài khoản"
                      _focus={{
                        outline: '2px solid #36af5c',
                        border: 'none',
                        outlineOffset: '0px'
                      }}
                    />
                  </InputGroup>
                </Box>
                <Box mt={7}>
                  <InputGroup>
                    <InputLeftElement pointerEvents="none" h={12}>
                      <FontAwesomeIcon icon={faLock} color="#828282" />
                    </InputLeftElement>
                    <Input
                      {...register('password', { required: true })}
                      h={12}
                      type="password"
                      placeholder="Mật khẩu"
                      _focus={{
                        outline: '2px solid #36af5c',
                        border: 'none',
                        outlineOffset: '0px'
                      }}
                    />
                    <InputRightElement h={12} cursor="pointer">
                      <FontAwesomeIcon icon={faEyeSlash} color="#828282" />
                    </InputRightElement>
                  </InputGroup>
                </Box>
                {/* errors will return when field validation fails  */}
                {/* {errors.exampleRequired && <span>This field is required</span>} */}

                <Button colorScheme="green" type="submit" w="full" h={12} fontSize={16} mt={8} mb={16}>
                  Đăng nhập
                </Button>
              </form>

              <Box>
                <Box position="relative" pt={3.5} h={5}>
                  <Text
                    as="h3"
                    w="fit-content"
                    px={2}
                    color="text.2"
                    fontSize={13}
                    position="absolute"
                    bgColor="#FFFAFA"
                    top="1px"
                    left={0}
                    right={0}
                    mx="auto"
                    textAlign="center"
                  >
                    hoặc
                  </Text>
                  <Box w="full" h="0.5px" bgColor="#e6e6e6" />
                </Box>

                <Button
                  type="button"
                  onClick={signInWithGoogle}
                  alignItems="center"
                  w="full"
                  bgColor="#FFF"
                  color="#505050"
                  boxShadow="base"
                  mt={5}
                  h={12}
                  _hover={{
                    bgColor: '#f7f7f7'
                  }}
                  _active={{
                    bgColor: '#f7f7f7'
                  }}
                >
                  <ImageX w={6} h={6} src="/images/logo-google.png" mr={5} />
                  <Text as="span">Đăng nhập với Google</Text>
                </Button>

                <Button
                  type="button"
                  onClick={signInWithFacebook}
                  alignItems="center"
                  w="full"
                  bgColor="#415DAE"
                  color="#FFF"
                  boxShadow="base"
                  mt={5}
                  h={12}
                  _hover={{
                    bgColor: '#4562ba'
                  }}
                  _active={{
                    bgColor: '#4562ba'
                  }}
                >
                  <ImageX w={6} h={6} src="/images/logo-facebook.png" mr={5} />
                  <Text as="span" color="#FFF">
                    Đăng nhập với Facebook
                  </Text>
                </Button>
              </Box>

              <Box mt={5}>
                <Link href="/dang-ky">
                  <a>
                    <Text
                      textDecoration="underline"
                      color="primary.1"
                      textAlign="center"
                      fontWeight={500}
                      transitionDuration="300ms"
                      _hover={{ color: 'primary.2' }}
                    >
                      Đăng ký tài khoản mới
                    </Text>
                  </a>
                </Link>
              </Box>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default Login;
