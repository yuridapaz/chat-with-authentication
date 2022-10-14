import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import React from "react";
import GoogleButton from "react-google-button";
import { auth } from "../firebase";

const googleSignIn = () => {
  const provider = new GoogleAuthProvider();
  signInWithRedirect(auth, provider);
};

// eslint-disable-next-line react/function-component-definition
const Signin = () => (
  <div>
    <GoogleButton onClick={googleSignIn} />
  </div>
);

export default Signin;
