import React,{useEffect,useState}from 'react'
import Filter from '../component/Filter'
import axios from "axios"
import { Grid,Heading,Image,SimpleGrid} from '@chakra-ui/react'
import ProductCard from '../component/ProductCard'

const Men = () => {
  const [men,setMen]=useState([])
  const fetchMEN=()=>{
    return axios.get(`http://localhost:8080/men`).then((res)=>setMen(res.data))
  }
  useEffect(()=>{
   fetchMEN()
  },[])
  return (
  //   <Grid templateColumns='repeat(4, 1fr)' columns={{sm:2,md:3,lg:4,base:1}} gap={5}>
   
  // </Grid>


<SimpleGrid
        className="main_container"
        w="85%"
        m={'auto'}
        mt={10}
         columns={{sm:2,md:2,lg:4,base:1}} 
         spacing={10}>
           {men.map((item)=><ProductCard {...item}/>)}
         </SimpleGrid>
  )
}

export default Men