import { Box, Flex, Link } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <Box bg="blue.500" px={4} py={2}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box color="white" fontWeight="bold">Learning Management System(LMS)</Box>
        <Flex alignItems="center">
          <Link as={NavLink} to="/" p={2} color="white" _hover={{ textDecoration: 'none' }}>
            Home
          </Link>
          <Link as={NavLink} to="/courses" p={2} color="white" _hover={{ textDecoration: 'none' }}>
            Courses
          </Link>
          <Link as={NavLink} to="/login" p={2} color="white" _hover={{ textDecoration: 'none' }}>
            Login
          </Link>
          <Link as={NavLink} to="/profile" p={2} color="white" _hover={{ textDecoration: 'none' }}>
            Profile
          </Link>
          <Link as={NavLink} to="/signup" p={2} color="white" _hover={{ textDecoration: 'none' }}>
            Signup
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
