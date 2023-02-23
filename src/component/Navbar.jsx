import { Flex} from '@chakra-ui/react'
import {SearchIcon,Cart} from "@chakra-ui/icons"
import React from 'react'
import {Link} from "react-router-dom"
const Navbar = () => {

  return (
    <Flex style={{justifyContent:"space-around" ,background:"teal" ,margin:10 }}>
     <Link to="/">HOME</Link>
     <Link to="/men">MEN</Link>
     <Link to="/women">WOMEN</Link>
     <Link to="/kids">KIDS</Link>
     <Link to="/homeliv">HOME & LIVING</Link>
     <Link to="/beauty">BEAUTY</Link>
     <Link to="/studio">STUDIO</Link>
     <Link to="/search"><SearchIcon/></Link>
     <Link to="/profile">PROFILE</Link>
     <Link to="/wishlist">WISHLIST</Link>
     <Link to="/bag">BAG</Link>
    
    </Flex>
  )
}

export default Navbar