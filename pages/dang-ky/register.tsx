import { Box, Flex, Text } from '@chakra-ui/react';
import ImageX from 'components/image-x';
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import RegisterForm from './subs/register.form';

const Register: NextPage = () => {
  return (
    <Box>
      <Head>
        <title>Đăng ký tài khoản | Minty Food</title>
      </Head>
      <Box>
        <Flex>
          <Flex flex={2 / 5} minH="calc(100vh - 68px)">
            <ImageX src="/images/login-intro.jpg" w="full" />
          </Flex>
          <Flex flex={3 / 5} alignItems="center">
            <Box w={{ xs: '40%', xl: '40%', '2xl': '35%' }} mx="auto">
              <RegisterForm />
              <Box>
                <Link href="/dang-nhap">
                  <a>
                    <Text
                      textDecoration="underline"
                      color="primary.1"
                      textAlign="center"
                      fontWeight={500}
                      transitionDuration="300ms"
                      _hover={{ color: 'primary.2' }}
                    >
                      Đăng nhập ngay
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

export default Register;
