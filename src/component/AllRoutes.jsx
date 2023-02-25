import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from "../pages/Home"
import Men from "../pages/Men"
import Kids from "../pages/Kids"
import Women from "../pages/Women"
import Beauty from "../pages/Beauty"
import Studio from "../pages/Studio"
import Search from "../pages/Search"
import Profile from "../pages/Profile"
import Wishlist from "../pages/Wishlist"
import Homeliv from "../pages/Homeliv"
import Bag from "../pages/Bag"
import SingleProductPage from '../pages/SingleProductPage'
import Login from '../pages/Login'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/men" element={<Men/>}></Route>
            <Route path="/women" element={<Women/>}></Route>
            <Route path="/kids" element={<Kids/>}></Route>
            <Route path="/homeliv" element={<Homeliv/>}></Route>
            <Route path="/beauty" element={<Beauty/>}></Route>
            <Route path="studio" element={<Studio/>}></Route>
            <Route path="/search" element={<Search/>}></Route>
            <Route path="/profile" element={<Profile/>}></Route>
            <Route path="/wishlist" element={<Wishlist/>}></Route>
            <Route path="/bag" element={<Bag/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/men/:id" element={<SingleProductPage/>}></Route>
        </Routes>
    </div>
  )
}

export default AllRoutes