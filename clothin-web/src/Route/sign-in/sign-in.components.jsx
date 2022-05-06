import {
  signInGooglePopUp,
  createUserDocFromAuth,
  signInGoogleRedirect,
  auth,
} from "../../utils/firebase/firebase.utils";

import { getRedirectResult } from "firebase/auth";
import { useEffect } from 'react';
// import { async } from "@firebase/util";

const SignIn = () => {
  useEffect(async () => {
    const response = await getRedirectResult(auth);
    console.log(response);
  }, []);

  const logGoogleUser = async () => {
    const { user } = await signInGooglePopUp();
    const userRef = await createUserDocFromAuth(user);
  };

  return (
    <div>
      <h1>Welcome To Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign IN</button>
      <button onClick={signInGoogleRedirect}>Sign redirect</button>
    </div>
  );
};

export default SignIn;
