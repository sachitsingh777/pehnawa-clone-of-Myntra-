import React from 'react'
import { createContext,useState } from 'react'

export const AuthContext=createContext()
const AuthContextProvider = ({children}) => {
    const [show, setShow] = useState(true);
    const [cart, setCart] = useState([]);
  
    const handleClick = (item) => {
      if (cart.indexOf(item) !== -1) return;
      setCart([...cart, item]);
      console.log(cart)
    };
  
    const handleChange = (item, d) => {
      const ind = cart.indexOf(item);
      const arr = cart;
      arr[ind].amount += d;
  
      if (arr[ind].amount === 0) arr[ind].amount = 1;
      setCart([...arr]);
    };
  return (
    <AuthContext.Provider value={{handleClick,cart,setCart}}>
      {children}
      </AuthContext.Provider>
  )
}

export default AuthContextProvider
