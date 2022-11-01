import { Box, Button, Flex, Heading, Input } from '@chakra-ui/react';
import ImageX from 'components/image-x';
import { NextPage } from 'next';
import Head from 'next/head';
import { SubmitHandler, useForm } from 'react-hook-form';

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
          <Flex flex={2 / 5} minH="100vh">
            <ImageX src="/images/login-intro.jpg" w="full" />
          </Flex>
          <Flex flex={3 / 5} alignItems="center">
            <Box w="35%" mx="auto">
              <Flex justifyContent="center" alignItems="center">
                <ImageX src="/images/minty-food-logo.png" boxSize={20} />
                <Heading as="h3" fontSize={26}>
                  Đăng nhập vào MintyFood
                </Heading>
              </Flex>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Box mt={5}>
                  <Input {...register('username', { required: true })} />
                </Box>
                <Box mt={5}>
                  <Input {...register('password', { required: true })} />
                </Box>
                {/* errors will return when field validation fails  */}
                {/* {errors.exampleRequired && <span>This field is required</span>} */}

                <Button colorScheme="green" type="submit" w="full" py={6} fontSize={16} mt={10}>
                  Đăng nhập
                </Button>
              </form>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default Login;
