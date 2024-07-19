import { Box, VStack, Link } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <Box bg="gray.800" color="white" minH="100vh" p="4" w="200px">
      <VStack spacing="4" align="stretch">
        <Link as={NavLink} to="/" exact _activeLink={{ fontWeight: 'bold', color: 'teal.500' }}>Dashboard</Link>
        <Link as={NavLink} to="/courses" _activeLink={{ fontWeight: 'bold', color: 'teal.500' }}>Courses</Link>
        <Link as={NavLink} to="/login" _activeLink={{ fontWeight: 'bold', color: 'teal.500' }}>Assignments</Link>
        <Link as={NavLink} to="/profile" _activeLink={{ fontWeight: 'bold', color: 'teal.500' }}>Announcements</Link>
        <Link as={NavLink} to="/signup" _activeLink={{ fontWeight: 'bold', color: 'teal.500' }}>Practice</Link>
      </VStack>
    </Box>
  );
};

export default Sidebar;
