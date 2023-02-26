
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
          alert("OTP has been sent")
          // ...
        }).catch((error) => {
          // Error; SMS not sent
          // ...
          alert("SMS not sent")
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
      location.href="/"
      // ...
    }).catch((error) => {
      // User couldn't sign in (bad verification code?)
      // ...
      alert("Wrong Otp")
    });
  }
  render() {
    return (
      <div className="login-form">
        <Avatar bg="pink.500"  />
   <Heading color="pink.400" m={6}>Welcome</Heading>
        <form onSubmit={this.onSignInSubmit}>
          <div id="sign-in-button"></div>
          <h2 className="otp">Enter Mobile Number</h2>
          <input type="number" name="mobile" placeholder="Mobile number" required onChange={this.handleChange}/>
          <Button type="submit"
           borderRadius={0}
                        variant="solid"
                        colorScheme="pink"
                        width="60px"
          >Verify</Button>
        </form>

        <h2 className="otp">Enter OTP</h2>
        <form onSubmit={this.onSubmitOTP}>
          <input type="number" name="otp" placeholder="OTP Number" required onChange={this.handleChange}/>
          <Button type="submit"
          borderRadius={0}
          variant="solid"
          colorScheme="pink"
          width="60px"
          >Submit</Button>
        </form>
      </div>


   
)
  }
}



export default Login