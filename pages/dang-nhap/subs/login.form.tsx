import { Box, Button, Flex, Heading, Input, InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/react';
import { faEnvelope, faEye, faEyeSlash, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useMutationLogin } from 'actions/mutate/login';
import ImageX from 'components/image-x';
import { LoginFormData } from 'models/login';
import { memo, useCallback, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

const LoginForm: React.FC = () => {
  const [showPass, setShowPass] = useState<boolean>(false);
  const { register, handleSubmit } = useForm<LoginFormData>({
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const { mutate: loginMutate } = useMutationLogin();

  const onSubmit: SubmitHandler<LoginFormData> = useCallback(
    (data) => {
      loginMutate(data);
    },
    [loginMutate]
  );

  const onChangeShowPass = useCallback(() => {
    setShowPass((prev) => !prev);
  }, []);

  return (
    <Box>
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
              <FontAwesomeIcon icon={faEnvelope} color="#828282" />
            </InputLeftElement>
            <Input
              {...register('email', { required: true })}
              h={12}
              placeholder="Email"
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
              type={showPass ? 'text' : 'password'}
              placeholder="Mật khẩu"
              _focus={{
                outline: '2px solid #36af5c',
                border: 'none',
                outlineOffset: '0px'
              }}
            />
            <InputRightElement h={12} cursor="pointer" onClick={onChangeShowPass}>
              <FontAwesomeIcon icon={showPass ? faEye : faEyeSlash} color="#828282" />
            </InputRightElement>
          </InputGroup>
        </Box>
        {/* errors will return when field validation fails  */}
        {/* {errors.exampleRequired && <span>This field is required</span>} */}

        <Button colorScheme="green" type="submit" w="full" h={12} fontSize={16} mt={8} mb={16}>
          Đăng nhập
        </Button>
      </form>
    </Box>
  );
};

export default memo(LoginForm);
