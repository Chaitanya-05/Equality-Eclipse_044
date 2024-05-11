

import {
    Avatar,
    Box,
    chakra,
    Container,
    Flex,
    Icon,
    SimpleGrid,
    useColorModeValue,
  } from '@chakra-ui/react';
  
  const testimonials = [
    {
      name: 'Yuchi Hsieh',
      role: 'Working in META',
      content:
        'The Product Manager Certification led us through all the useful tools for different product phase and helped me land my product job.PMC is definitely a certification every product manager should get.',
      avatar:
        'https://productschool.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F6nwv0fapso8r%2FO29UAuMtvJKJeHma8U06v%2Fd8d7cad0f4a2afb6dd315ecdc4692c1c%2Fyuchi-primary.jpg&w=1920&q=75',
    },
    {
        name: 'Darcy L.',
        role: 'Digital Marketer',
        content:
          'I have been in the tech industry for years, and the insights I gained from the Product Manager Certification were invaluable. It helped me refine my strategies and make informed decisions. Highly recommended.',
      avatar:
        'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
    },
    {
      name: 'Natasha J',
      role: 'Senior Product Manager',
      content:
        "Product School was a great investment in my future as a PM. I joined Product School to learn how product management is done correctly and to learn best practices. I got everything I signed up for and more.",
      avatar:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80',
    },
    {
      name: 'Jhone Rowwet',
      role: 'Software Developer',
      content:
        'The combination of experienced faculty members (Working Product Managers) and enthusiastic peers makes learning a lot more fun. The curriculum provides you a well rounded knowledge of both theoretical and hand-on knowledge',
      avatar:
        'https://productschool.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F6nwv0fapso8r%2F23Zt3fLhiV6mGoJh4nqDPu%2F44ab828e910956712f53dd8510e45b5e%2Fps-Quote-Nikhil_Atkuri.jpg&w=1080&q=75',
    },
  ];
  
  const backgrounds = [
    `url("data:image/svg+xml, %3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'560\' height=\'185\' viewBox=\'0 0 560 185\' fill=\'none\'%3E%3Cellipse cx=\'102.633\' cy=\'61.0737\' rx=\'102.633\' ry=\'61.0737\' fill=\'%23ED64A6\' /%3E%3Cellipse cx=\'399.573\' cy=\'123.926\' rx=\'102.633\' ry=\'61.0737\' fill=\'%23F56565\' /%3E%3Cellipse cx=\'366.192\' cy=\'73.2292\' rx=\'193.808\' ry=\'73.2292\' fill=\'%2338B2AC\' /%3E%3Cellipse cx=\'222.705\' cy=\'110.585\' rx=\'193.808\' ry=\'73.2292\' fill=\'%23ED8936\' /%3E%3C/svg%3E")`,
    `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='457.367' cy='123.926' rx='102.633' ry='61.0737' transform='rotate(-180 457.367 123.926)' fill='%23ED8936'/%3E%3Cellipse cx='160.427' cy='61.0737' rx='102.633' ry='61.0737' transform='rotate(-180 160.427 61.0737)' fill='%2348BB78'/%3E%3Cellipse cx='193.808' cy='111.771' rx='193.808' ry='73.2292' transform='rotate(-180 193.808 111.771)' fill='%230BC5EA'/%3E%3Cellipse cx='337.295' cy='74.415' rx='193.808' ry='73.2292' transform='rotate(-180 337.295 74.415)' fill='%23ED64A6'/%3E%3C/svg%3E")`,
    `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='102.633' cy='61.0737' rx='102.633' ry='61.0737' fill='%23ED8936'/%3E%3Cellipse cx='399.573' cy='123.926' rx='102.633' ry='61.0737' fill='%2348BB78'/%3E%3Cellipse cx='366.192' cy='73.2292' rx='193.808' ry='73.2292' fill='%230BC5EA'/%3E%3Cellipse cx='222.705' cy='110.585' rx='193.808' ry='73.2292' fill='%23ED64A6'/%3E%3C/svg%3E")`,
    `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='457.367' cy='123.926' rx='102.633' ry='61.0737' transform='rotate(-180 457.367 123.926)' fill='%23ECC94B'/%3E%3Cellipse cx='160.427' cy='61.0737' rx='102.633' ry='61.0737' transform='rotate(-180 160.427 61.0737)' fill='%239F7AEA'/%3E%3Cellipse cx='193.808' cy='111.771' rx='193.808' ry='73.2292' transform='rotate(-180 193.808 111.771)' fill='%234299E1'/%3E%3Cellipse cx='337.295' cy='74.415' rx='193.808' ry='73.2292' transform='rotate(-180 337.295 74.415)' fill='%2348BB78'/%3E%3C/svg%3E")`,
  ];
  
  
  
  function TestimonialCard(props) {
    const { name, role, content, avatar, index } = props;
    return (
      <Flex
        boxShadow={'lg'}
        maxW={'640px'}
        direction={{ base: 'column-reverse', md: 'row' }}
        width={'full'}
        rounded={'xl'}
        p={15}
        justifyContent={'space-between'}
        position={'relative'}
        bg={useColorModeValue('#81d4fa', 'gray.800')}
        _hover={{ transform: 'scale(1.05)' }}
        _after={{
          content: '""',
          position: 'absolute',
          height: '21px',
          width: '29px',
          left: '35px',
          top: '-10px',
          backgroundSize: 'cover',
          backgroundImage: `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='29' height='21' viewBox='0 0 29 21' fill='none'%3E%3Cpath d='M6.91391 21C4.56659 21 2.81678 20.2152 1.66446 18.6455C0.55482 17.0758 0 15.2515 0 13.1727C0 11.2636 0.405445 9.43939 1.21634 7.7C2.0699 5.91818 3.15821 4.3697 4.48124 3.05454C5.84695 1.69697 7.31935 0.678787 8.89845 0L13.3157 3.24545C11.5659 3.96667 9.98676 4.94242 8.57837 6.17273C7.21266 7.36061 6.25239 8.63333 5.69757 9.99091L6.01766 10.1818C6.27373 10.0121 6.55114 9.88485 6.84989 9.8C7.19132 9.71515 7.63944 9.67273 8.19426 9.67273C9.34658 9.67273 10.4776 10.097 11.5872 10.9455C12.7395 11.7939 13.3157 13.1091 13.3157 14.8909C13.3157 16.8848 12.6542 18.4121 11.3311 19.4727C10.0508 20.4909 8.57837 21 6.91391 21ZM22.5982 21C20.2509 21 18.5011 20.2152 17.3488 18.6455C16.2391 17.0758 15.6843 15.2515 15.6843 13.1727C15.6843 11.2636 16.0898 9.43939 16.9007 7.7C17.7542 5.91818 18.8425 4.3697 20.1656 3.05454C21.5313 1.69697 23.0037 0.678787 24.5828 0L29 3.24545C27.2502 3.96667 25.6711 4.94242 24.2627 6.17273C22.897 7.36061 21.9367 8.63333 21.3819 9.99091L21.702 10.1818C21.9581 10.0121 22.2355 9.88485 22.5342 9.8C22.8756 9.71515 23.3238 9.67273 23.8786 9.67273C25.0309 9.67273 26.1619 10.097 27.2715 10.9455C28.4238 11.7939 29 13.1091 29 14.8909C29 16.8848 28.3385 18.4121 27.0155 19.4727C25.7351 20.4909 24.2627 21 22.5982 21Z' fill='%239F7AEA'/%3E%3C/svg%3E")`,
        }}
        _before={{
          content: '""',
          position: 'absolute',
          zIndex: '-1',
          height: 'full',
          maxW: '640px',
          width: 'full',
          filter: 'blur(40px)',
          transform: 'scale(0.98)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          top: 0,
          left: 0,
          backgroundImage: backgrounds[index % 4],
        }}>
        <Flex
          direction={'column'}
          textAlign={'left'}
          justifyContent={'space-between'}>
          <chakra.p
            fontFamily={'Inter'}
            fontWeight={'medium'}
            fontSize={'15px'}
            pb={4}>
            {content}
          </chakra.p>
          <chakra.p fontFamily={'Work Sans'} fontWeight={'bold'} fontSize={14}>
            {name}
            <chakra.span
              fontFamily={'Inter'}
              fontWeight={'medium'}
              color={'gray.600'}>
              {' '}
              - {role}
            </chakra.span>
          </chakra.p>
        </Flex>
        <Avatar
          src={avatar}
          height={'80px'}
          width={'80px'}
          alignSelf={'center'}
          m={{ base: '0 0 35px 0', md: '0 0 0 50px' }}
        />
      </Flex>
    );
  }
  
  export default function GridBlurredBackdrop() {
    return (
      <Flex
        textAlign={'center'}
        pt={10}
        justifyContent={'center'}
        direction={'column'}
        width={'full'}
        overflow={'hidden'}>
        <Box width={{ base: 'full', sm: 'lg', lg: 'xl' }} margin={'auto'}>
          <chakra.h3
            fontFamily={'Work Sans'}
            fontWeight={'bold'}
            fontSize={40}
            textTransform={'uppercase'}
            color={'#103869'}>
            Product School reviews and testimonials
          </chakra.h3>
          <chakra.h1
            py={5}
            fontSize={48}
            fontFamily={'Work Sans'}
            fontWeight={'bold'}
            color={useColorModeValue('gray.700', 'gray.50')}>
            Hear from our students
          </chakra.h1>
          <chakra.h2
            margin={'auto'}
            width={'70%'}
            fontFamily={'Inter'}
            fontWeight={'medium'}
            color={useColorModeValue('gray.500', 'gray.400')}>
            We've trained more than{' '}
            <chakra.strong color={useColorModeValue('gray.700', 'gray.50')}>
              150,000+
            </chakra.strong>{' '}
           alumni who are shaping the future of Product Management
          </chakra.h2>
        </Box>
        <SimpleGrid
          columns={{ base: 1, xl: 2 }}
          spacing={'20'}
          mt={16}
          mb={16}
          mx={'auto'}>
          {testimonials.map((cardInfo, index) => (
            <TestimonialCard {...cardInfo} index={index} />
          ))}
        </SimpleGrid>
        <Box>
          <Icon viewBox="0 0 40 35" mt={14} boxSize={10} color={'purple.400'}>
            <path
              fill={'currentColor'}
            //   d="M10.7964 5.04553e-07C8.66112 -0.000123335 6.57374 0.632971 4.79827 1.81922C3.0228 3.00547 1.63898 4.69158 0.82182 6.66433C0.00466116 8.63708 -0.209132 10.8079 0.207477 12.9021C0.624087 14.9964 1.65239 16.9201 3.16233 18.4299L19.1153 34.3828C19.2395 34.5074 19.3871 34.6062 19.5496 34.6736C19.7121 34.741 19.8863 34.7757 20.0622 34.7757C20.2381 34.7757 20.4123 34.741 20.5748 34.6736C20.7373 34.6062 20.8848 34.5074 21.0091 34.3828L36.962 18.4272C38.9319 16.3917 40.0228 13.6636 39.9996 10.8311C39.9764 7.99858 38.8409 5.28867 36.838 3.28573C34.835 1.28279 32.1251 0.147283 29.2926 0.124081C26.4601 0.100879 23.732 1.19184 21.6965 3.1617L20.0622 4.79337L18.4305 3.1617C17.4276 2.15892 16.237 1.36356 14.9267 0.821064C13.6163 0.278568 12.2119 -0.000433066 10.7937 5.04553e-07H10.7964Z"
            />
          </Icon>
        </Box>
      </Flex>
    );
  }