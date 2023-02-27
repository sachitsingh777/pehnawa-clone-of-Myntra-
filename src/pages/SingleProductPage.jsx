import { Box, Divider, Flex, Heading ,Stack,HStack,Button,Circle,Text,Image,Grid} from '@chakra-ui/react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
  } from '@chakra-ui/react'
import React ,{useEffect,useState,useContext}from 'react'
import { useParams } from 'react-router-dom'
import {Link} from "react-router-dom"
import axios from "axios"
import { AuthContext } from '../Context/AuthContext'
const SingleProductPage = () => {
 const {id}=useParams()
    const [men,setMen]=useState({})
    const {handleClick}=useContext(AuthContext)
    const [change,setChange]=useState(false)
    const handleChange=(id)=>{
      setChange(true)
    }
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
        
         <Box w="50%" mx={10}>
            
            <Stack>
              <Heading>{title}</Heading>
            <Heading size={"md"} color="gray.500">{description}</Heading>  
            <Button w="100px">
                
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


            </Stack><Button variant='ghost' colorScheme='blue'
w="150px"
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
        handleClick(men)}}>
        {change?"Already Add to cart":"Add to cart"}
      </Button> 

        </Box>
    </Flex>
   
  )
}

export default SingleProductPage