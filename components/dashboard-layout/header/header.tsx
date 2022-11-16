import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Flex } from '@chakra-ui/react';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { memo } from 'react';
import HeaderAuth from './header-auth';

const Header: React.FC = () => {
  return (
    <Flex
      position="fixed"
      zIndex={10}
      alignItems="center"
      justifyContent="space-between"
      top={0}
      left={72}
      bgColor="#FFF"
      px={8}
      h="64px"
      boxShadow="sm"
      w="calc(100vw - 18rem)"
    >
      <Flex>
        <Breadcrumb spacing="8px" separator={<FontAwesomeIcon icon={faChevronRight} />}>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#">About</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Flex>

      <HeaderAuth />
    </Flex>
  );
};

export default memo(Header);
