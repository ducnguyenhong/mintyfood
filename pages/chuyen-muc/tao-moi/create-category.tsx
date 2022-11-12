import { Box, Button, Flex, FormLabel, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { faTh } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useMutationCreatePostCategory } from 'actions/mutate/post-category';
import DashboardSection from 'components/dashboard-layout/section';
import { PostCategoryFormData } from 'models/category';
import { NextPage } from 'next';
import Head from 'next/head';
import { useCallback } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { slugURL } from 'utils/helper';

const CreateCategory: NextPage = () => {
  const { register, handleSubmit, reset } = useForm<PostCategoryFormData>({
    defaultValues: {
      label: '',
      value: ''
    }
  });

  const { mutate: createMutate } = useMutationCreatePostCategory(reset);

  const onSubmit: SubmitHandler<PostCategoryFormData> = useCallback(
    (data) => {
      const { label } = data;
      const value = slugURL(label).replaceAll('-', '_').toUpperCase();
      createMutate({ label, value });
    },
    [createMutate]
  );

  return (
    <Box>
      <Head>
        <title>Tạo chuyên mục | Minty Food</title>
      </Head>
      <Box bgColor="#FFF" p={6} minH="calc(100vh - 124px)">
        <DashboardSection title="Tạo chuyên mục mới" />
        <Box w="40%" mx="auto" mt={20}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box>
              <FormLabel>Tên chuyên mục</FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none" h={12}>
                  <FontAwesomeIcon icon={faTh} color="#828282" />
                </InputLeftElement>
                <Input
                  {...register('label', { required: true })}
                  h={12}
                  _focus={{
                    outline: '2px solid #36af5c',
                    border: 'none',
                    outlineOffset: '0px'
                  }}
                />
              </InputGroup>
            </Box>
            <Flex justifyContent="center">
              <Button colorScheme="green" type="submit" w={60} h={12} fontSize={16} mt={8} mb={16}>
                Tạo chuyên mục
              </Button>
            </Flex>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default CreateCategory;
