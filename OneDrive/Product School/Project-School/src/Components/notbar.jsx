// import React from 'react';
// import logoImage from '../assets/pL.png'
// import {
//   Box,
//   Flex,
//   HStack,
//   IconButton,
//   useDisclosure,
//   Stack,
//   Link,
//   Menu,
//   MenuButton,
//   MenuList,
//   MenuItem,
//   Image,
//   Heading,
// } from '@chakra-ui/react';
// import { HamburgerIcon, CloseIcon ,AddIcon} from '@chakra-ui/icons';
// import { useScroll } from 'framer-motion';

// const Links = [
//   { name: 'Certifications', submenu: [
//     { name: 'Product Manager Certification', path: '#' },
//     { name: 'Artificial Intelligence for Product Certification ', path: '#' },
//     { name: 'Product Leader Certification', path: '#' },
//     { name: 'Product Marketing Manager Certification', path: '#' },
//   ]},
//   { name: 'For Teams', submenu: [
//     { name: 'Custom Product Training', path: '#' },
//     { name: 'AI Training', path: '#' },
//   ]},
//   { name: 'Our Instructors', path: '#' },
//   { name: 'Resources', path: '#' },
//   { name: 'Events', submenu: [
//     { name: 'Free Daily Events', path: '#' },
//     { name: 'ProductCon Conferences', path: '#' },
//     { name: 'Sponsorships', path: '#' },
//   ]},
// ];

// const NavLink = ({ name, path, submenu }) => (
//     <Box>
//       {submenu ? (
//         <Menu>
//           <MenuButton
//             as={Link}
//             px={4}
//             py={2}
//             rounded={'md'}
//             fontWeight={'semibold'}
//             fontSize={'xl'}
//             color={'Black'}
//             bg={'grey.400'}
//             _hover={{ color: 'black.400' }}
//             _expanded={{ color: 'black.600' }}
//           >
//             {name}
//           </MenuButton>
//           <MenuList bg={'gray.100'} border={'1px solid'} borderColor={'gray.300'}>
//             {submenu.map((item) => (
//               <MenuItem
//                 key={item.name}
//                 _hover={{ color: 'black' }}
//                 px={4}
//                 py={2}
//                 rounded={'md'}
//               >
//                 <Link href={item.path}>{item.name}</Link>
//               </MenuItem>
//             ))}
//           </MenuList>
//         </Menu>
//       ) : (
//         <Link
//           px={4}
//           py={2}
//           rounded={'md'}
//           fontWeight={'semibold'}
//           fontSize={'xl'}
//           color={'black'}
//         //   bg={'teal.600'}
//           _hover={{ bg: 'brown.500' }}
//           href={path}
//         >
//           {name}
//         </Link>
//       )}
//     </Box>
//   );
  
//   const Navbar = () => {
//     const { isOpen, onOpen, onClose } = useDisclosure();
//     const {scrolly}=useScroll();
  
//     return (
//       <Box bg={'red'} boxShadow={'md'} py={4}>
        
//         <Flex h={16} alignItems={'center'} justifyContent={'space-between'} maxW={'1200px'} mx={'auto'}>
//           <IconButton
//             size={'md'}
//             icon={isOpen ? <CloseIcon color={'black'} /> : <HamburgerIcon color={'blue'} />}
//             aria-label={'Open Menu'}
//             display={{ md: 'none' }}
//             onClick={isOpen ? onClose : onOpen}
//           />
//           <HStack spacing={8} alignItems={'center'}>
//           {/* <Heading as={'h1'} size={'lg'} color={'green.500'}>
//             Product School
//           </Heading> */}
//          <Image src={logoImage} alt="Logo" boxSize="100px" style={{ maxWidth: '100%', height: 'auto' }} /> 
//             <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
//               {Links.map(({ name, path, submenu }) => (
//                 <NavLink key={name} name={name} path={path} submenu={submenu} />
//               ))}
//             </HStack>
//           </HStack>
//           <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
//             <NavLink name={'Sign In'} path={'#'} />
//           </HStack>
//         </Flex>


//       {isOpen ? (
//         <Box pb={4} display={{ md: 'none' }}>
//           <Stack as={'nav'} spacing={4}>
//             {Links.map(({ name, path, submenu }) => (
//               <NavLink key={name} name={name} path={path} submenu={submenu} />
//             ))}
//             <NavLink name={'Sign In'} path={'#'} />
//           </Stack>
//         </Box>
//       ) : null}
//     </Box>
//   );
// };

// export default Navbar;