// import React, { Component } from 'react'
// import firebase from "../firebase"
// export default function Login () {
//  const   handleClick=()=>{
//       let recaptcha= new firebase.auth.RecaptchaVerifier('reCaptcha')
//       let number ="+918982934227";
//       firebase.auth().signInWithPhoneNumber(number,recaptcha).then(function(e){
//         let code=prompt('Enter the Otp','');
//         if(code==null) return;
//         e.confirm(code).then(function(result){
//             console.log(result.user,'user');
//             document.querySelector('label').textContent=result.user.phoneNumber+"Number Verification"
//         }).catch((error)=>{
//             console.log(error)
//         })
//       })
//     }
 
//     return (
//       <div>
//         <label ></label>
//          <button onClick={handleClick}>
// click
//          </button>
//       </div>
//     )
  
// }
import { useState } from "react";
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Link,
  Avatar,
  FormControl,
  FormHelperText,
  InputRightElement
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import React from 'react'
import firebase from '../firebase'
import { RecaptchaVerifier } from "firebase/auth";
import { getAuth, signInWithPhoneNumber } from "firebase/auth";
const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);


const auth = getAuth();

class Login extends React.Component {
  handleChange = (e) =>{
    const {name, value } = e.target
    this.setState({
        [name]: value
      })
  }
  configureCaptcha = () =>{
    window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        this.onSignInSubmit();
      },
      defaultCountry: "IN"
    }, auth);
  }
  onSignInSubmit = (e) => {
    e.preventDefault()
    this.configureCaptcha()
    const phoneNumber = "+91" + this.state.mobile
    console.log(phoneNumber)
    const appVerifier = window.recaptchaVerifier;
    // firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
    const auth = getAuth();
signInWithPhoneNumber(auth, phoneNumber, appVerifier)
        .then((confirmationResult) => {
          // SMS sent. Prompt user to type the code from the message, then sign the
          // user in with confirmationResult.confirm(code).
          window.confirmationResult = confirmationResult;
          console.log("OTP has been sent")
          // ...
        }).catch((error) => {
          // Error; SMS not sent
          // ...
          console.log("SMS not sent")
        });
  }
  onSubmitOTP = (e) =>{
    e.preventDefault()
    const code = this.state.otp
    console.log(code)
    window.confirmationResult.confirm(code).then((result) => {
      // User signed in successfully.
      const user = result.user;
      console.log(JSON.stringify(user))
      alert("User is verified")
      // ...
    }).catch((error) => {
      // User couldn't sign in (bad verification code?)
      // ...
    });
  }
  render() {
    return (
      // <div>
      //   <h2>Login Form</h2>
      //   <form onSubmit={this.onSignInSubmit}>
      //     <div id="sign-in-button"></div>
      //     <input type="number" name="mobile" placeholder="Mobile number" required onChange={this.handleChange}/>
      //     <button type="submit">Submit</button>
      //   </form>

      //   <h2>Enter OTP</h2>
      //   <form onSubmit={this.onSubmitOTP}>
      //     <input type="number" name="otp" placeholder="OTP Number" required onChange={this.handleChange}/>
      //     <button type="submit">Submit</button>
      //   </form>
      // </div>


<Flex
flexDirection="column"
width="100wh"
height="100vh"
backgroundColor="gray.200"
justifyContent="center"
alignItems="center"
>
<Stack
  flexDir="column"
  mb="2"
  justifyContent="center"
  alignItems="center"
>
  <Avatar bg="teal.500" />
  <Heading color="teal.400">Welcome</Heading>
  <Box minW={{ base: "90%", md: "468px" }}>
 
      <Stack
        spacing={4}
        p="1rem"
        backgroundColor="whiteAlpha.900"
        boxShadow="md"
      > <form onSubmit={this.onSignInSubmit}>
        <FormControl>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<CFaUserAlt color="gray.300" />}
            />
            
            <Input type="number" name="mobile" placeholder="Mobile number" required onChange={this.handleChange} />
            <InputRightElement width="4.5rem"> <Button 
             borderRadius={0}
             type="submit"
             variant="solid"
             colorScheme="teal"
             width="full"
            >Verify</Button>  </InputRightElement> 
          </InputGroup>
        </FormControl>
       </form>
       <form onSubmit={this.onSubmitOTP}>
        <FormControl>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              color="gray.300"
              children={<CFaLock color="gray.300" />}
            />
             
            <Input
             type="number" name="otp" placeholder="OTP Number" required onChange={this.handleChange}
            />
            <InputRightElement width="4.5rem">
              <Button 
              borderRadius={0}
              type="submit"
              variant="solid"
              colorScheme="teal"
              width="full"
              
              
              >
               submit
              </Button>
            </InputRightElement> 
          </InputGroup>
          <FormHelperText textAlign="right">
           
          </FormHelperText>
        </FormControl></form>
       
      </Stack>
   
  </Box>
</Stack>

</Flex>
    )
  }
}



export default Login