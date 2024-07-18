import { Box, Heading, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';

const Signup = () => {
  return (
    <Box p="6">
      <Heading as="h2" size="xl" mb="4">Signup</Heading>
      <FormControl id="name" mb="4">
        <FormLabel>Name</FormLabel>
        <Input type="text" />
      </FormControl>
      <FormControl id="email" mb="4">
        <FormLabel>Email address</FormLabel>
        <Input type="email" />
      </FormControl>
      <FormControl id="password" mb="4">
        <FormLabel>Password</FormLabel>
        <Input type="password" />
      </FormControl>
      <Button colorScheme="teal" type="submit">Signup</Button>
    </Box>
  );
};

export default Signup;
