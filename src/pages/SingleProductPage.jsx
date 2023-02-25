import { Box, Divider, Flex, Heading ,Stack,HStack,Button,Circle,Text,Image,Grid} from '@chakra-ui/react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
  } from '@chakra-ui/react'
import React ,{useEffect,useState}from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"
const SingleProductPage = () => {
 const {id}=useParams()
    const [men,setMen]=useState({})
    const fetchMEN=()=>{
      return axios.get(`http://localhost:8080/men/${id}`).then((res)=>setMen(res.data))
    }
    useEffect(()=>{
     fetchMEN()
    },[])
  
    const {images,title,description,rating,count,off_price,price,discount,sizes}=men
  
  return (
    <Flex key={id}>
        <Flex w="50%">

            <Box w="50%">
                <Image w="100%" src={men?.images?.image1}/>
            <Image w="100%" src={men?.images?.image2}/>
            </Box>
            <Box w="50%">
              <Image w="100%" src={men?.images?.image3}/>
            <Image w="100%" src={men?.images?.image4}/>  
            </Box>
         
        </Flex>
        
         <Box w="50%">
            
            <Stack>
              <Heading>{title}</Heading>
            <Heading>{description}</Heading>  
            <Button>
                
                <Breadcrumb separator='|'>
  <BreadcrumbItem>
    <BreadcrumbLink href='#'>{rating}⭐</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem>
    <BreadcrumbLink href='#'>{count}</BreadcrumbLink>
  </BreadcrumbItem>
</Breadcrumb>
            </Button>
            <Divider/>
            <HStack> 
            <Text>₹{price}</Text><Text>MRP ₹{off_price}</Text><Text>({discount}% OFF)</Text></HStack> 
            <HStack>     <Text>inclusive of all taxes</Text></HStack>  

            <HStack>    <Text>SELECT SIZE</Text>
            </HStack>   
            
            <HStack> 

  {sizes?.map((el)=>(
     <Circle size='40px' bg='white' color='black'>
     {el}
   </Circle>
  ))}
  
</HStack>
              

            </Stack>

        </Box>
    </Flex>
   
  )
}

export default SingleProductPage