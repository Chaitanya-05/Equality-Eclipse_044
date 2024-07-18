import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Courses from './pages/Courses';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import { Box, Flex } from '@chakra-ui/react';
import './App.css';

function App() {
  return (
    <Router>
      <Flex direction="column" minH="100vh">
        <Navbar />
        <Flex flex="1">
          <Sidebar />
          <Box flex="1" p={4}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </Box>
        </Flex>
      </Flex>
    </Router>
  );
}

export default App;
