import React from 'react';
import { Box, Heading, Text, Button, Image, Flex,useBreakpointValue } from '@chakra-ui/react';
 import { Link as RouterLink } from 'react-router-dom';
 import { Link } from 'react-router-dom';


 const CardComponent = () => {
  const cardMaxWidth = useBreakpointValue({ base: '100%', md: '300px' });
  const cardBoxHeight = useBreakpointValue({ base: '100px', md: '500px' });

  return (
    <Flex justify="center" flexWrap="wrap" gap={6}>
      {/* Card 1 */}
      <Box
        maxW={cardMaxWidth}
        // maxH={cardBoxHeight}
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        bg="gray.50"
        _hover={{
          transform: 'scale(1.05)',
          bg: '#00d3ad'
          
        }}
      >
        <Image src="https://images.ctfassets.net/6nwv0fapso8r/1pHE5BNEvvicBF61Y5dROJ/dcc7c1946dbe2e32b5c39e008119a33a/PMC-shield-large.svg" alt="Card Image" boxSize={{ base: '150px', md: '200px' }} mt={4}/>
        <Box p="6" >
          <Heading as="h3" size="md" mb={2}>
            Product Manager Certification (PMC)
          </Heading>
          <Text mb={4}>
          ✓Land your first Product Management job
          ✓Build the skills you need
          ✓Get hired and succeed
          </Text>
          <Link to="/link1">
            <Button color={'white'}
              bg='#103869'
              _hover={{ transform: 'scale(1.05)' }}>
              Learn More</Button>
          </Link>
        </Box>
      </Box>

      {/* Card 2 */}
      <Box
        maxW={cardMaxWidth}
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        bg="gray.50"
        _hover={{
          transform: 'scale(1.05)',
          bg: '#8686ff'
          
        }}
      >
        <Image src="https://images.ctfassets.net/6nwv0fapso8r/6L4vJsdEWTBK1vKNvyr0E8/0a6da7c8b8c0aced98ad11aaecea8d5e/AIPC.svg" alt="Card Image"  boxSize={{ base: '150px', md: '200px' }} mt={4}/>
        <Box p="6">
          <Heading as="h3" size="md" mb={2}>
             Artificial Intelligence for Product Certification (AIPC)
          </Heading>
          <Text mb={4}>
          ✓Build successful AI-powered products
          ✓Learn best practices, prompts, and more 
          ✓Enhance your current workflow
          </Text>
          <Link to="/link2">
          <Button color={'white'}
              bg='#103869'
              _hover={{ transform: 'scale(1.05)' }}>
              Learn More</Button>
          </Link>
        </Box>
      </Box>

      {/* Card 3 */}
      <Box
        maxW={cardMaxWidth}
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        bg="gray.50"
        _hover={{
          transform: 'scale(1.05)',
          bg: '#e46eb5'
          
        }}
      >
        <Image src="https://images.ctfassets.net/6nwv0fapso8r/2YWSMYH6dE5FnmJfbgwDQA/ece67dc157d05d186ffb0466646ca5f9/PLC-shield-large.svg" alt="Card Image" boxSize={{ base: '150px', md: '200px' }} mt={4} />
        <Box p="6">
          <Heading as="h3" size="md" mb={2}>
            Product Leader Certification (PLC)
          </Heading>
          <Text mb={4}>
          ✓Get your next Product Management promotion 
          ✓Enchance your leadership skills
          ✓Own product strategy
          </Text>
          <Link to="/link3">
          <Button color={'white'}
              bg='#103869'
              _hover={{ transform: 'scale(1.05)' }}>
              Learn More</Button>
          </Link>
        </Box>
      </Box>

      {/* Card 4 */}
      <Box
        maxW={cardMaxWidth}
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        bg="gray.50"
        _hover={{
          transform: 'scale(1.05)',
          bg: '#18c1d7'
          
        }}
      >
        <Image src="https://images.ctfassets.net/6nwv0fapso8r/5vUwEQRNWUeLuiPsWXu4Kw/790f4de71de35d823ff92a68280bcb3b/PMMC.svg" alt="Card Image" boxSize={{ base: '150px', md: '200px' }} mt={4} />
        <Box p="6">
          <Heading as="h3" size="md" mb={2}>
            Product Marketing Manager Certification (PMMC)
          </Heading>
          <Text mb={4}>
          ✓Bring your products to market successfully 
          ✓Develop critical skills ✓Land a role and thrive
          </Text>
          <Link to="/link4">
          <Button color={'white'}
              bg='#103869'
              _hover={{ transform: 'scale(1.05)' }}>
              Learn More</Button>
          </Link>
        </Box>
      </Box>
    </Flex>
  );
};


export default CardComponent;