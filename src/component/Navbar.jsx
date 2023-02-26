import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,Image
  } from '@chakra-ui/react';
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
  } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
  export default function WithSubnavigation() {
    const {cart}=useContext(AuthContext)
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Box>
        <Flex
          bg={useColorModeValue('white', 'gray.800')}
          color={useColorModeValue('gray.600', 'white')}
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.900')}
          align={'center'}>
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
           <Link to="/"><Text
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              fontFamily={'heading'}
              color={useColorModeValue('gray.800', 'white')}>
              <Image src="./P.png" w="100%" h="40px"/>
            </Text></Link> 
  
            <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>
          <Link to="/bag">
          <div className='cart'>
   <span className='material-symbols-outlined'  >
            <i className="fas fa-cart-plus"></i>
</span><span>{cart.length}</span></div></Link>
          <Stack 
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}>
           

         <Link to="/login">
            <Button
              as={'a'}
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              bg={'pink.400'}
              to={'#'}
              _hover={{
                bg: 'pink.900',
              }}>
              Login/Sign Up
            </Button></Link>
          </Stack>
        </Flex>
         
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    );
  }
  
  const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  
    return (
      <Stack direction={'row'} spacing={4}>
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label}>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Link
                  p={2}
                  to={navItem.to ?? '#'}
                  fontSize={'sm'}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
                  }}>
                  {navItem.label}
                </Link>
              </PopoverTrigger>
  
              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={'xl'}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={'xl'}
                  minW={'sm'}>
                  <Stack>
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Stack>
    );
  };
  
  const DesktopSubNav = ({ label, to, subLabel }) => {
    return (
      <Link
        to={to}
        role={'group'}
        display={'block'}
        p={2}
        rounded={'md'}
        _hover={{ bg: useColorModeValue('pink.500', 'gray.900') }}>
        <Stack direction={'row'} align={'center'}>
          <Box>
            <Text
              transition={'all .3s ease'}
              _groupHover={{ color: 'pink.400' }}
              fontWeight={500}>
              {label}
            </Text>
            <Text fontSize={'sm'}>{subLabel}</Text>
          </Box>
          <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}>
            <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
    );
  };
  
  const MobileNav = () => {
    return (
      <Stack
        bg={useColorModeValue('white', 'gray.800')}
        p={4}
        display={{ md: 'none' }}>
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    );
  };
  
  const MobileNavItem = ({ label, children, to }) => {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Stack spacing={4} onClick={children && onToggle}>
        <Flex
          py={2}
          as={Link}
          to={to ?? '#'}
          justify={'space-between'}
          align={'center'}
          _hover={{
            textDecoration: 'none',
          }}>
          <Text
            fontWeight={600}
            color={useColorModeValue('gray.600', 'gray.200')}>
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={'all .25s ease-in-out'}
              transform={isOpen ? 'rotate(180deg)' : ''}
              w={6}
              h={6}
            />
          )}
        </Flex>
  
        <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            align={'start'}>
            {children &&
              children.map((child) => (
                <Link key={child.label} py={2} to={child.to}>
                  {child.label}
                </Link>
              ))}
          </Stack>
        </Collapse>
      </Stack>
    );
  };
  
  
  const NAV_ITEMS = [
    {
      label: 'MEN',to: "/men",
      children: [
        {
          label: 'T-Shirts',
          to: '#'
      },
      {
          label: 'Casual Shirts',
          to: '#'
      },
      {
          label: 'Formal Shirts',
          to: '#'
      },
      {
          label: 'Sweatshirts',
          to: '#'
      },
      {
          label: 'Sweaters',
          to: '#'
      },
      {
          label: 'Jackets',
          to: '#'
      },
      {
          label: 'Blazers & Coats',
          to: '#'
      },
      {
          label: 'Suits',
          to: '#Rain Jackets'
      },
      ],
    },
    {
      label: 'WOMEN',to: "/women",
      children: [
        {
          label: 'Kurtas & Suits',
          to: '#'
      },
      {
          label: 'Kurtis, Tunics & Tops',
          to: '#'
      },
      {
          label: 'Ethnic Wear',
          to: '#'
      },
      {
          label: 'Leggings, Salwars & Churidars',
          to: '#'
      },
      {
          label: 'Skirts & Palazzos',
          to: '#'
      },
      {
          label: 'Sarees',
          to: '#'
      },
      {
          label: 'Dress Materials',
          to: '#'
      },
      {
          label: 'Lehenga Cholis',
          to: '#'
      },
      {
          label: 'Dupattas & Shawls',
          to: '#'
      },
      {
          label: 'Jackets',
          to: '#'
      }
      ],
    },
    {
      label: 'KIDS',to: "/kids",
      children: [
        {
          label: 'T-Shirts',
          to: '#'
      },
      {
          label: 'Shirts',
          to: '#'
      },
      {
          label: 'Shorts',
          to: '#'
      },
      {
          label: 'Jeans',
          to: '#'
      },
      {
          label: 'Trousers',
          to: '#'
      },
      {
          label: 'Clothing Sets',
          to: '#'
      },
      {
          label: 'Ethnic Wear',
          to: '#'
      },
      {
          label: 'Track Pants & Pyjamas',
          to: '#'
      },
      {
          label: 'Jacket, Sweater & Sweatshirts',
          to: '#'
      },
      {
          label: 'Party Wear',
          to: '#'
      },
      {
          label: 'Innerwear & Thermals',
          to: '#'
      },
  
      {
          label: 'Nightwear & Loungewear',
          to: '#'
      },
      {
          label: 'Value Packs',
          to: '#'
      },
      
      ],
    },{
      label: 'HOME & LIVING',to: "/homeliv",
      children: [
        {
          label: 'Bedsheets',
          to: '#'
      },
  
      {
          label: 'Bedding Sets',
          to: '#'
      },
      {
          label: 'Blankets, Quilts & Dohars',
          to: '#'
      },
      {
          label: 'Pillows & Pillow Covers',
          to: '#'
      },
      {
          label: 'Bed Covers',
          to: '#'
      },
      {
          label: 'Diwan Sets',
          to: '#'
      },
      {
          label: 'Chair Pads & Covers',
          to: '#'
      },
      {
          label: 'Sofa Covers',
          to: '#'
      },
      
      ],
    },
    {
      label: 'BEAUTY',to: "/beauty",
      children: [
        {
          label: 'Lipstick',
          to: '#'
      },
      {
          label: 'Lip Gloss',
          to: '#'
      },
      {
          label: 'Lip Liner',
          to: '#'
      },
      {
          label: 'Mascara',
          to: '#'
      },
      {
          label: 'Eyeliner',
          to: '#'
      },
      {
          label: 'Kajal',
          to: '#'
      },
      {
          label: 'Eyeshadow',
          to: '#'
      },
      {
          label: 'Foundation',
          to: '#'
      },
      {
          label: 'Primer',
          to: '#'
      },
      {
          label: 'Concealer',
          to: '#'
      },
      {
          label: 'Compact',
          to: '#'
      },
      {
          label: 'Nail Polish',
          to: '#'
      },
      
      ],
    },
   
  ];