import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../App.css"
import { Grid,Heading,Image} from '@chakra-ui/react'




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
          
            <Carousel >
                <img src="https://assets.indiadesire.com/images/myntra%20big%20fashion%20festival%202022.jpg" alt="d" />
            <img src="https://assets.indiadesire.com/images/myntra%20big%20fashion%20festival%202022.jpg" alt="" />
            <img src="https://assets.indiadesire.com/images/myntra%20big%20fashion%20festival%202022.jpg" alt="" />
            </Carousel>
           <Heading my={10}>DEAL OF THE DAY</Heading>
            <Grid templateColumns='repeat(8, 1fr)'>
              
              {dod.map((item)=><Image key={item.id} src={item.url} />)}
            </Grid>
            <Heading my={10}>BEST OF MYNTRA EXCLUSIVE BRAND</Heading>
            <Grid templateColumns='repeat(8, 1fr)'>
              {bom.map((item)=><Image key={item.id} src={item.url} />)}
            </Grid>
            <Heading my={10}>TOP PICKS</Heading>
            <Grid templateColumns='repeat(7, 1fr)'>
              {top.map((item)=><Image key={item.id} src={item.url} />)}
            </Grid>
            <Heading my={10}>CATEGORIES TO BAG</Heading>
            <Grid templateColumns='repeat(8, 1fr)'>
              {ctg.map((item)=><Image key={item.id} src={item.url} />)}
            </Grid>
            <Heading my={10}>DEALS ON TOP BRANDS</Heading>
            <Grid templateColumns='repeat(4, 1fr)'>
              {dsla.map((item)=><Image key={item.id} src={item.url} />)}
            </Grid>
            <Heading my={10}>BRANDS AT SLASHED PRICES</Heading>
            <Grid templateColumns='repeat(4, 1fr)'>
              {dsla.map((item)=><Image key={item.id} src={item.url} />)}
            </Grid>
            <Heading my={10}>GIFTING CARDS</Heading>
            <Grid templateColumns='repeat(5, 1fr)'>
              {gift.map((item)=><Image key={item.id} src={item.url} />)}
            </Grid>
            <Heading my={10}>NEW IN TOP BRANDS</Heading>
         <Grid templateColumns='repeat(8, 1fr)'>
              {ntb.map((item)=><Image key={item.id} src={item.url} />)}
            </Grid>
            <Heading my={10}>TOP INFLUENCERS EXCLUSIVE STYLES</Heading>
            <Grid templateColumns='repeat(6, 1fr)'>
              {ties.map((item)=><Image key={item.id} src={item.url} />)}
            </Grid>
           





        </div>
    )
}