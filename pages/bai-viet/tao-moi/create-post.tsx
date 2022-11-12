import { Box, Flex, FormLabel, Input, Switch, Text, Textarea } from '@chakra-ui/react';
import '@toast-ui/editor/dist/toastui-editor.css';
import { useMutationCreatePost } from 'actions/mutate/post';
import { useQueryPostCategory } from 'actions/query/post-category';
import DashboardSection from 'components/dashboard-layout/section';
import { CategoryItem } from 'models/category';
import { CreatePostFormData } from 'models/post';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useCallback, useRef } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import Select, { MultiValue } from 'react-select';
import './create-post.module.css';
import CreatePostControl from './subs/cp.control';

const CreatePostContent = dynamic(() => import('./subs/cp.content'), { ssr: false });

const CreatePost: NextPage = () => {
  const editorRef = useRef<any>(null);
  const methods = useForm<CreatePostFormData>({
    defaultValues: {
      title: '',
      description: '',
      status: 'PUBLIC',
      content: '',
      createBy: {
        uid: '',
        fullName: 'Hà Yến'
      },
      category: []
    }
  });
  const { register, handleSubmit, reset, setValue, watch } = methods;
  const { data: categoryList } = useQueryPostCategory();

  const resetForm = useCallback(() => {
    reset();
    editorRef.current?.getInstance()?.setHTML(' ');
    window.scrollTo(0, 0);
  }, [reset]);

  const { mutate: createPostMutate } = useMutationCreatePost(resetForm);

  const onChangeCategory = useCallback((data: MultiValue<CategoryItem>) => setValue('category', data), [setValue]);

  const onSubmit: SubmitHandler<CreatePostFormData> = useCallback(
    (data) => {
      createPostMutate({
        ...data,
        content: editorRef.current?.getInstance()?.getHTML()
      });
    },
    [createPostMutate]
  );

  return (
    <Box>
      <Head>
        <title>Viết bài mới | Minty Food</title>
      </Head>

      <Box bgColor="#FFF" p={6} position="relative">
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <DashboardSection title="Tạo bài viết mới" />
            <Box px={4} mt={4}>
              <CreatePostControl />
              <Box>
                <FormLabel fontWeight={700}>Tiêu đề</FormLabel>
                <Input h="40px" {...register('title', { required: true })} borderColor="#CCC" />
              </Box>
              <Box mt={8}>
                <FormLabel fontWeight={700}>Chuyên mục</FormLabel>
                <Select
                  value={watch('category')}
                  onChange={onChangeCategory}
                  placeholder="Chọn..."
                  options={categoryList}
                  isMulti
                />
              </Box>
              <Box mt={8}>
                <FormLabel fontWeight={700}>Trạng thái</FormLabel>
                <Flex alignItems="center" gap={4} mt={2}>
                  <Switch
                    size="lg"
                    isChecked={watch('status') === 'PUBLIC'}
                    onChange={(e) => setValue('status', e.target.checked ? 'PUBLIC' : 'PRIVATE')}
                  />
                  <Text as="span">{watch('status') === 'PUBLIC' ? 'Công khai' : 'Riêng tư'}</Text>
                </Flex>
              </Box>
              <Box mt={8}>
                <FormLabel fontWeight={700}>Mô tả</FormLabel>
                <Textarea {...register('description', { required: true })} borderColor="#CCC" />
              </Box>
              <CreatePostContent editorRef={editorRef} />
            </Box>
          </form>
        </FormProvider>
      </Box>
    </Box>
  );
};

export default CreatePost;
