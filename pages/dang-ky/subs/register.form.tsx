import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Tooltip
} from '@chakra-ui/react';
import { faEnvelope, faEye, faEyeSlash, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useMutationRegister } from 'actions/mutate/register';
import ImageX from 'components/image-x';
import { RegisterFormData } from 'models/register';
import { memo, useCallback, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

const RegisterForm: React.FC = () => {
  const [showPass, setShowPass] = useState<boolean>(false);
  const { register, handleSubmit } = useForm<RegisterFormData>({
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
      fullName: ''
    }
  });

  const { mutate: registerMutate } = useMutationRegister();

  const onSubmit: SubmitHandler<RegisterFormData> = useCallback(
    (data) => {
      registerMutate(data);
    },
    [registerMutate]
  );

  const onChangeShowPass = useCallback(() => {
    setShowPass((prev) => !prev);
  }, []);

  return (
    <Box>
      <Flex justifyContent="center" alignItems="center" mb={10}>
        <ImageX src="/images/minty-food-logo.png" boxSize={16} />
        <Heading as="h3" fontSize={24} color="text.1" ml={2}>
          Đăng ký tài khoản
        </Heading>
      </Flex>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Box>
          <Tooltip label="Hãy nhập chính xác email của bạn nhé">
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
          </Tooltip>
        </Box>
        <Box mt={7}>
          <Tooltip label="Nhập mật khẩu mà bạn muốn đặt">
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
          </Tooltip>
        </Box>

        <Box mt={7}>
          <Tooltip label="Xác nhận mật khẩu một lần nữa">
            <InputGroup>
              <InputLeftElement pointerEvents="none" h={12}>
                <FontAwesomeIcon icon={faLock} color="#828282" />
              </InputLeftElement>
              <Input
                {...register('confirmPassword', { required: true })}
                h={12}
                type={showPass ? 'text' : 'password'}
                placeholder="Nhập lại mật khẩu"
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
          </Tooltip>
        </Box>

        <Box mt={7}>
          <Tooltip label="Họ tên mà bạn muốn hiển thị">
            <InputGroup>
              <InputLeftElement pointerEvents="none" h={12}>
                <FontAwesomeIcon icon={faUser} color="#828282" />
              </InputLeftElement>
              <Input
                {...register('fullName', { required: true })}
                h={12}
                placeholder="Họ và tên của bạn"
                _focus={{
                  outline: '2px solid #36af5c',
                  border: 'none',
                  outlineOffset: '0px'
                }}
              />
            </InputGroup>
          </Tooltip>
        </Box>

        <Button colorScheme="green" type="submit" w="full" h={12} fontSize={16} mt={8} mb={16}>
          Đăng ký
        </Button>
      </form>
    </Box>
  );
};

export default memo(RegisterForm);
