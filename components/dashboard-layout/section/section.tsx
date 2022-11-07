import { Box, Divider, Heading } from '@chakra-ui/react';
import { memo } from 'react';

interface SectionProps {
  title: string;
}

const DashboardSection: React.FC<SectionProps> = (props) => {
  const { title } = props;

  return (
    <Box>
      <Heading as="h4" fontSize={16} fontWeight={700} textTransform="uppercase">
        {title}
      </Heading>
      <Divider pt={3} />
    </Box>
  );
};

export default memo(DashboardSection);
