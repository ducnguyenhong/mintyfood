import { Box, BoxProps } from '@chakra-ui/react';
import NextImage, { ImageProps } from 'next/image';
import { memo } from 'react';

type ImageXProps = Omit<BoxProps, 'as'> & ImageProps;

const ImageX: React.FC<ImageXProps> = (props) => {
  const { src, alt = 'image', objectFit = 'cover', ...rest } = props;
  return (
    <Box position="relative" {...rest}>
      <NextImage objectFit={objectFit} layout="fill" src={src} alt={alt} />
    </Box>
  );
};

export default memo(ImageX);
