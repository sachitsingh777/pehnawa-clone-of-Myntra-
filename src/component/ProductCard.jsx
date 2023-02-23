import React from 'react'
import {Text,Divider,ButtonGroup,Button,Image, Card, CardHeader, CardBody, CardFooter,Heading,Stack} from '@chakra-ui/react'
const ProductCard = ({images,title,description,price,}) => {
  return (
    <Card maxW='sm'>
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
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
  )
}

export default ProductCard