import { Flex } from '@chakra-ui/react';
import { memo } from 'react';
import FooterAboutUs from './about-us';
import FooterContact from './contact';
import FooterInfo from './info';
import FooterNews from './news';

const Footer: React.FC = () => {
  return (
    <footer>
      <Flex mt={20} bgColor="gray" px={32} gap={16} py={16}>
        <FooterInfo />
        <FooterContact />
        <FooterNews />
        <FooterAboutUs />
      </Flex>
    </footer>
  );
};

export default memo(Footer);
