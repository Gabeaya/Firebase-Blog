import React from 'react';
import {auth, provider} from '../firebase'
import{signInWithPopup} from 'firebase/auth'
function Login({setIsAuth}) {
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
    });
  };
  return (
    <div className='LoginPage'>
      <p>Sign in with google to continue</p>
      <button className="login-with-google-btn" onClick={signInWithGoogle}> 
      Sign in with Google</button>
    </div>
  );
}

export default Login;
