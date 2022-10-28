import { Box, Heading } from '@chakra-ui/react';
import { memo } from 'react';

interface SectionProps {
  title: string;
}

const Section: React.FC<SectionProps> = (props) => {
  const { title } = props;

  return (
    <Box position="relative" pt={4} h={8}>
      <Heading
        as="h3"
        w="fit-content"
        textTransform="uppercase"
        px={4}
        color="green"
        fontSize={18}
        position="absolute"
        bgColor="#FFF"
        top="1px"
        left={0}
        right={0}
        mx="auto"
        textAlign="center"
      >
        {title}
      </Heading>
      <Box w="full" h="1px" bgColor="#d9d9d9" />
    </Box>
  );
};

export default memo(Section);
