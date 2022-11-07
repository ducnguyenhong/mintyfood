import { Box, Button, FormLabel, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { faTh } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CategoryFormData } from 'models/category';
import { memo, useCallback } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

const CreateCategoryForm: React.FC = () => {
  const { register, handleSubmit } = useForm<CategoryFormData>({
    defaultValues: {
      name: '',
      value: ''
    }
  });

  const onSubmit: SubmitHandler<CategoryFormData> = useCallback((data) => {}, []);

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box>
          <FormLabel>Tên chuyên mục</FormLabel>
          <InputGroup>
            <InputLeftElement pointerEvents="none" h={12}>
              <FontAwesomeIcon icon={faTh} color="#828282" />
            </InputLeftElement>
            <Input
              {...register('name', { required: true })}
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
        <Button colorScheme="green" type="submit" w="full" h={12} fontSize={16} mt={8} mb={16}>
          Tạo chuyên mục
        </Button>
      </form>
    </Box>
  );
};

export default memo(CreateCategoryForm);
