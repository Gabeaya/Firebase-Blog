import React from 'react';
import {auth, provider} from '../firebase'
import{signInWithPopup} from 'firebase/auth'
function Login() {
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      
    })
  }
  return 
  <div className='LoginPage'>
    <p>Sign in with google to continue</p>
    <button className="login-with-google-btn"> 
    Sign in with Google</button>
  </div>;
}

export default Login;
