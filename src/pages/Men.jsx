import React,{useEffect,useState,useReducer}from 'react'
import Filter from '../component/Filter'
import axios from "axios"
import {Box, Button, Flex,HStack,Text, Grid,Heading,Image,SimpleGrid} from '@chakra-ui/react'
import ProductCard from '../component/ProductCard'


const initialState = {
  men: [],
  isLoading: false,
  error: null,
};

const reducer = (state,action) => {
  switch(action.type){
    case "FETCH_REQUEST" :{
      return {
        ...state,
        isLoading:true,
        isError:false,
      }
    }
    case "FETCH_SUCCESS" :{
      return {
        ...state,
        men:action.payload,
        isLoading:false,
        isError:false,
      }
    }
    case "FETCH_FAILURE" :{
      return {
        ...state,
        men:[],
        isLoading:false,
        isError:true,
      }
    }
    default:{
       throw new Error()
    }
  }
};

const Men = () => {
 
 
  const [state,dispatch]=useReducer(reducer,initialState)
  const {men,isLoading,isError}=state
  const [orderby,setorderby]=useState("")
  const [filterby,setfilterby]=useState("")
  const [colorby,setcolorby]=useState("")
  let sort="price"
  const getmen=()=>{
     let apiurl;
    if(orderby){
     apiurl=`http://localhost:8080/men?_sort=${sort}&order=${orderby}`
    }else if(filterby){
     apiurl=`http://localhost:8080/men?brand=${filterby}&_sort=${sort}&order=${orderby}`
    }else{
     apiurl=`http://localhost:8080/men`
    }
 
 
 
 
   dispatch({type:"FETCH_REQUEST"})
    axios.get(apiurl).then((res)=>{
     dispatch({type:"FETCH_SUCCESS",payload:res.data})
     console.log(res.data)
   }).catch((error)=>dispatch({type:"FETCH_FAILURE",payload:error.message}))
  }





  
  useEffect(()=>{
    getmen()
  },[orderby,filterby])


  return (
    <Flex>
      <Box>
        <Box>
          <HStack><Text>Sort By Price</Text></HStack>
        <Button onClick={()=>setorderby("asc")}>Low TO High</Button><br />
       <Button onClick={()=>setorderby("desc")}>High To Low</Button><br />
       <br />
       <br />
       <HStack><Text>Filter By Brand</Text></HStack>
       <Button onClick={()=>setfilterby("HM")}>H&M</Button><br />
       <Button onClick={()=>setfilterby("HRX")}>HRX</Button><br />
       <Button onClick={()=>setfilterby("Roadster")}>Roadster</Button><br />
       <Button onClick={()=>setfilterby("Pantaloons")}>Pantaloons</Button><br />
        </Box>
      </Box>
      <Box>
        <SimpleGrid
        className="main_container"
        w="85%"
        m={'auto'}
        mt={10}
         columns={{sm:2,md:2,lg:4,base:1}} 
         spacing={10}>
           {men.map((item)=><ProductCard key={item.id} item= {item}/>)}
         </SimpleGrid>
      </Box>

         </Flex>
  )
}

export default Men