import React,{useEffect,useState} from 'react'
import axios from 'axios'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../App.css"
import { SimpleGrid,Heading,Image,HStack} from '@chakra-ui/react'
import Carousel from "../component/Carousel"







export default function Home() {
   const [dod,setDod]=useState([])
   const [bom,setBom]=useState([])
   const [top,setTop]=useState([])
   const [ctg,setCtg]=useState([])
   const [gift,setgift]=useState([])
   const [dsla,setDsla]=useState([])
   const [ntb,setNtb]=useState([])
   const [ties,setties]=useState([])
   const [cart,setCart]=useState([])
   const [men,setMen]=useState([])
   const [woemn,setWomen]=useState([])

  const fetchDod=()=>{
    return axios.get(`http://localhost:8080/dealsoftheday`).then((res)=>setDod(res.data))
  }
  const fetchBom=()=>{
    return axios.get(`http://localhost:8080/bestOfMyntra`).then((res)=>setBom(res.data))
  }
  const fetchTp=()=>{
    return axios.get(`http://localhost:8080/topPicks`).then((res)=>setTop(res.data))
  }
  const fetchCTB=()=>{
    return axios.get(`http://localhost:8080/categoriesToBag`).then((res)=>setCtg(res.data))
  }
  const fetchGC=()=>{
    return axios.get(`http://localhost:8080/GiftingCards`).then((res)=>setgift(res.data))
  }
  const fetchDSLA=()=>{
    return axios.get(`http://localhost:8080/dealsoOnLatestArival`).then((res)=>setDsla(res.data))
  }
  const fetchNTB=()=>{
    return axios.get(`http://localhost:8080/newInTopBrands`).then((res)=>setNtb(res.data))
  }
  const fetchTIES=()=>{
    return axios.get(`http://localhost:8080/topInfluencerExclusiveStyles`).then((res)=>setties(res.data))
  }
  const fetchCART=()=>{
    return axios.get(`http://localhost:8080/cart`).then((res)=>setCart(res.data))
  }
  const fetchMEN=()=>{
    return axios.get(`http://localhost:8080/men`).then((res)=>setMen(res.data))
  }
  const fetchWOMEN=()=>{
    return axios.get(`http://localhost:8080/women`).then((res)=>setWomen(res.data))
  }

  useEffect(()=>{
    fetchBom()
    fetchCART()
    fetchDod()
      fetchMEN()
      fetchWOMEN()
      fetchDSLA()
      fetchCTB()
      fetchGC()
      fetchTIES()
      fetchNTB()
    fetchTp()

  
  },[])


    return (
        <div>
          
          <Carousel/>
       
            <HStack><Heading my={10}>DEAL OF THE DAY</Heading></HStack>
            <SimpleGrid  gap={3} columns={{sm:2,md:3,lg:5,base:1}} >
              
              {dod.map((item)=><Image w="105%" h="290px" key={item.id} src={item.url} />)}
            </SimpleGrid>

            <HStack><Heading my={10}>BEST OF MYNTRA EXCLUSIVE BRAND</Heading></HStack>
            <SimpleGrid  columns={{sm:2,md:4,lg:8,base:1}} >
              {bom.map((item)=><Image key={item.id} src={item.url} />)}
            </SimpleGrid>
            <HStack>
            <Heading my={10}>TOP PICKS</Heading></HStack>
            <SimpleGrid  columns={{sm:2,md:3,lg:7,base:1}}>
              {top.map((item)=><Image key={item.id} src={item.url} />)}
            </SimpleGrid>
            <HStack><Heading my={10}>CATEGORIES TO BAG</Heading></HStack>
            <SimpleGrid templateColumns='repeat(8, 1fr)' columns={{sm:2,md:4,lg:8,base:1}}>
              {ctg.map((item)=><Image key={item.id} src={item.url} />)}
            </SimpleGrid>
            <HStack><Heading my={10}>DEALS ON TOP BRANDS</Heading></HStack>
            <SimpleGrid  columns={{sm:2,md:2,lg:4,base:1}}>
              {dsla.map((item)=><Image key={item.id} src={item.url} />)}
            </SimpleGrid>
            <HStack><Heading my={10}>BRANDS AT SLASHED PRICES</Heading></HStack>
            <SimpleGrid  columns={{sm:2,md:2,lg:4,base:1}}>
              {dsla.map((item)=><Image key={item.id} src={item.url} />)}
            </SimpleGrid>
            <HStack><Heading my={10}>GIFTING CARDS</Heading></HStack>
            <SimpleGrid  columns={{sm:2,md:2,lg:5,base:1}}>
              {gift.map((item)=><Image key={item.id} src={item.url} />)}
            </SimpleGrid>
            <HStack><Heading my={10}>NEW IN TOP BRANDS</Heading></HStack>
         <SimpleGrid  columns={{sm:2,md:4,lg:8,base:1}}>
              {ntb.map((item)=><Image key={item.id} src={item.url} />)}
            </SimpleGrid>
            <HStack><Heading my={10}>TOP INFLUENCERS EXCLUSIVE STYLES</Heading></HStack>
            <SimpleGrid  columns={{sm:2,md:3,lg:6,base:1}}>
              {ties.map((item)=><Image key={item.id} src={item.url} />)}
            </SimpleGrid>
           





        </div>
    )
}