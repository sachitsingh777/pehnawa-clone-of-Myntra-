import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
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
  
  export default function WithSubnavigation() {
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
            <Text
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              fontFamily={'heading'}
              color={useColorModeValue('gray.800', 'white')}>
              <Image src="./P.png" w="100%" h="40px"/>
            </Text>
  
            <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>
  
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}>
            <Button
              as={'a'}
              fontSize={'sm'}
              fontWeight={400}
              variant={'link'}
              href={'#'}>
              Sign In
            </Button>
            <Button
              as={'a'}
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              bg={'pink.400'}
              href={'#'}
              _hover={{
                bg: 'pink.300',
              }}>
              Sign Up
            </Button>
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
                  href={navItem.href ?? '#'}
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
  
  const DesktopSubNav = ({ label, href, subLabel }) => {
    return (
      <Link
        href={href}
        role={'group'}
        display={'block'}
        p={2}
        rounded={'md'}
        _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
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
  
  const MobileNavItem = ({ label, children, href }) => {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Stack spacing={4} onClick={children && onToggle}>
        <Flex
          py={2}
          as={Link}
          href={href ?? '#'}
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
                <Link key={child.label} py={2} href={child.href}>
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
      label: 'MEN',href: "/men",
      children: [
        {
          label: 'T-Shirts',
          href: '#'
      },
      {
          label: 'Casual Shirts',
          href: '#'
      },
      {
          label: 'Formal Shirts',
          href: '#'
      },
      {
          label: 'Sweatshirts',
          href: '#'
      },
      {
          label: 'Sweaters',
          href: '#'
      },
      {
          label: 'Jackets',
          href: '#'
      },
      {
          label: 'Blazers & Coats',
          href: '#'
      },
      {
          label: 'Suits',
          href: '#Rain Jackets'
      },
      ],
    },
    {
      label: 'WOMEN',href: "/women",
      children: [
        {
          label: 'Kurtas & Suits',
          href: '#'
      },
      {
          label: 'Kurtis, Tunics & Tops',
          href: '#'
      },
      {
          label: 'Ethnic Wear',
          href: '#'
      },
      {
          label: 'Leggings, Salwars & Churidars',
          href: '#'
      },
      {
          label: 'Skirts & Palazzos',
          href: '#'
      },
      {
          label: 'Sarees',
          href: '#'
      },
      {
          label: 'Dress Materials',
          href: '#'
      },
      {
          label: 'Lehenga Cholis',
          href: '#'
      },
      {
          label: 'Dupattas & Shawls',
          href: '#'
      },
      {
          label: 'Jackets',
          href: '#'
      }
      ],
    },
    {
      label: 'KIDS',href: "/kids",
      children: [
        {
          label: 'T-Shirts',
          href: '#'
      },
      {
          label: 'Shirts',
          href: '#'
      },
      {
          label: 'Shorts',
          href: '#'
      },
      {
          label: 'Jeans',
          href: '#'
      },
      {
          label: 'Trousers',
          href: '#'
      },
      {
          label: 'Clothing Sets',
          href: '#'
      },
      {
          label: 'Ethnic Wear',
          href: '#'
      },
      {
          label: 'Track Pants & Pyjamas',
          href: '#'
      },
      {
          label: 'Jacket, Sweater & Sweatshirts',
          href: '#'
      },
      {
          label: 'Party Wear',
          href: '#'
      },
      {
          label: 'Innerwear & Thermals',
          href: '#'
      },
  
      {
          label: 'Nightwear & Loungewear',
          href: '#'
      },
      {
          label: 'Value Packs',
          href: '#'
      },
      
      ],
    },{
      label: 'HOME & LIVING',href: "/homeliv",
      children: [
        {
          label: 'Bedsheets',
          href: '#'
      },
  
      {
          label: 'Bedding Sets',
          href: '#'
      },
      {
          label: 'Blankets, Quilts & Dohars',
          href: '#'
      },
      {
          label: 'Pillows & Pillow Covers',
          href: '#'
      },
      {
          label: 'Bed Covers',
          href: '#'
      },
      {
          label: 'Diwan Sets',
          href: '#'
      },
      {
          label: 'Chair Pads & Covers',
          href: '#'
      },
      {
          label: 'Sofa Covers',
          href: '#'
      },
      
      ],
    },
    {
      label: 'BEAUTY',href: "/beauty",
      children: [
        {
          label: 'Lipstick',
          href: '#'
      },
      {
          label: 'Lip Gloss',
          href: '#'
      },
      {
          label: 'Lip Liner',
          href: '#'
      },
      {
          label: 'Mascara',
          href: '#'
      },
      {
          label: 'Eyeliner',
          href: '#'
      },
      {
          label: 'Kajal',
          href: '#'
      },
      {
          label: 'Eyeshadow',
          href: '#'
      },
      {
          label: 'Foundation',
          href: '#'
      },
      {
          label: 'Primer',
          href: '#'
      },
      {
          label: 'Concealer',
          href: '#'
      },
      {
          label: 'Compact',
          href: '#'
      },
      {
          label: 'Nail Polish',
          href: '#'
      },
      
      ],
    },
  ];