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
  
  return (
    <AuthContext.Provider value={{handleClick,cart,setCart}}>
      {children}
      </AuthContext.Provider>
  )
}

export default AuthContextProvider;
