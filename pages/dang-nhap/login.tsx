import { Box, Flex, Text } from '@chakra-ui/react';
import ImageX from 'components/image-x';
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import LoginFacebook from './subs/login.facebook';
import LoginForm from './subs/login.form';
import LoginGoogle from './subs/login.google';

const Login: NextPage = () => {
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
              <LoginForm />

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
                    hoặc đăng nhập với
                  </Text>
                  <Box w="full" h="0.5px" bgColor="#e6e6e6" />
                </Box>

                <Flex alignItems="center" justifyContent="space-evenly">
                  <LoginGoogle />
                  <LoginFacebook />
                </Flex>
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
