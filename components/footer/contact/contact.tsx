import { Box, Flex, Heading, Link, Text } from '@chakra-ui/react';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { memo, useMemo } from 'react';

const FooterContact: React.FC = () => {
  const CONTACT_DATA = useMemo(
    () => [
      {
        icon: faLocationDot,
        title: 'Ngõ 20, Hồ Tùng Mậu, Hà Nội',
        link: 'https'
      },
      {
        icon: faPhone,
        title: '0868233430',
        link: 'tel:0868233430'
      },
      {
        icon: faEnvelope,
        title: 'hayen.lalatet@gmail.com',
        link: 'mailto:hayen.lalatet@gmail.com'
      },
      {
        icon: faFacebook,
        title: 'Minty Food',
        link: 'https'
      }
    ],
    []
  );

  return (
    <Flex direction="column" flex={1 / 4}>
      <Heading as="h4" fontSize={18} textTransform="uppercase" color="#FFF">
        Liên hệ
      </Heading>
      <Box mt={5}>
        {CONTACT_DATA.map((item) => {
          const { icon, title, link } = item;

          return (
            <Link
              href={link}
              target="_blank"
              rel="noopener moreferrer"
              key={title}
              mb={1}
              _hover={{ textDecoration: 'none' }}
              display="block"
            >
              <Flex alignItems="center">
                <FontAwesomeIcon icon={icon} />
                <Text color="#F2F2F2">{title}</Text>
              </Flex>
            </Link>
          );
        })}
      </Box>
    </Flex>
  );
};

export default memo(FooterContact);
