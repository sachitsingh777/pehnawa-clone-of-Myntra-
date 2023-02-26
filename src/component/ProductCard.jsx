import React, { useContext } from 'react'
import {Link} from "react-router-dom"
import {Text,Divider,ButtonGroup,Button,Image, Card, CardHeader,Center, CardBody, CardFooter,Heading,Stack} from '@chakra-ui/react'
import { AuthContext } from '../Context/AuthContext'
const ProductCard = ({item}) => {
  const {images,title,description,price,id}=item
  const {handleClick}=useContext(AuthContext)
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
      <Heading size='md'>{title}</Heading>
      <Text fontSize={12} color="gray.500">
       {description}
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        ₹{price}
      </Text>
    </Stack>
  </CardBody></Link>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Center>
      <Button variant='ghost' colorScheme='blue' onClick={()=>handleClick(item)}>
        Add to cart
      </Button></Center>
    </ButtonGroup>
  </CardFooter>
</Card>
  )
}

export default ProductCard