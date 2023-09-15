import React from 'react'
import "./SignupPage.css";
import { auth } from '../firebase';
import { useRef } from 'react';
const SignupPage = () => {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const register = (e)=>{
        e.preventDefault();
        console.log("Register button clicked")
        auth.createUserWithEmailAndPassword(emailRef.current.value,passwordRef.current.value)
        .then((authUser) =>{
            console.log(authUser);
        })
        .catch((error)=>{
            alert(error.message)
        })
    }

    const signUp = (e) => {
        e.preventDefault();
        console.log("Sign In button clicked");
        auth.signUpWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
            console.log(authUser);
        }).catch((error) => {
            alert(error.message);
          });
      };
  return (
    <div className='signupPage'>
        <form>
            <h1>Sign Up</h1>
            <input  ref={emailRef} type='text' placeholder='Enter Name'/>
            <input ref={passwordRef} type='email' placeholder='Email Address'/>
            <input  type='password' placeholder='Password'/>
            <button type="submit" onClick={signUp}>Sign In</button>
        
        <h4>
            <span className='signupPage__grey'>Already a user ?</span>
            <span className='signupPage__link' onClick={register}>Sign in now.</span>
        </h4>
        </form>
    </div>
  )
}

export default SignupPage
