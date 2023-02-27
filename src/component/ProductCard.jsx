import React, { useContext ,useState} from 'react'
import {Link} from "react-router-dom"
import {Text,Divider,ButtonGroup,Button,Image, Card, CardHeader,Center, CardBody, CardFooter,Heading,Stack} from '@chakra-ui/react'
import { AuthContext } from '../Context/AuthContext'
const ProductCard = ({item}) => {
  const {images,title,description,price,id}=item
  const {handleClick}=useContext(AuthContext)
  const [change,setChange]=useState(false)
  const handleChange=(id)=>{
    setChange(true)
  }
  return (
    <Card maxW='sm'>
      <Link to={`./${id}`}>
  <CardBody >
    <Image
      src={images.image1}
      alt={title}
      borderRadius='lg'
      w="70%"
      margin="auto"
    />
    <Stack mt='6' spacing='3'>
      <Heading color="black.100" size='sm'>{title}</Heading>
      <Text fontSize={12} color="gray.500">
       {description.substring(0,32)}
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        ₹{price}
      </Text>
    </Stack>
  </CardBody></Link>
  <Divider /> <Center>
  <CardFooter>
    <ButtonGroup spacing='2'>
     
      <Button variant='ghost' colorScheme='blue'
       as={'a'}
       display={{ base: 'none', md: 'inline-flex' }}
       fontSize={'sm'}
       fontWeight={600}
       color={'white'}
       bg={'blue.400'}
       to={'#'}
       _hover={{
         bg: 'blue.900',
       }}
      onClick={()=>{
        handleChange(id)
        handleClick(item)}}>
        {change?"Already Add to cart":"Add to cart"}
      </Button>
    </ButtonGroup>
  </CardFooter></Center>
</Card>
  )
}

export default ProductCard