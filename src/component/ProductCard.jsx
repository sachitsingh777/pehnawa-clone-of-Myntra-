import React, { useContext } from 'react'
import {Link} from "react-router-dom"
import {Text,Divider,ButtonGroup,Button,Image, Card, CardHeader, CardBody, CardFooter,Heading,Stack} from '@chakra-ui/react'
import { AuthContext } from '../Context/AuthContext'
const ProductCard = ({el}) => {
  const {images,title,description,price,id}=el
  const {handleClick,cart}=useContext(AuthContext)
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
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue' onClick={()=>handleClick(el)}>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
  )
}

export default ProductCard