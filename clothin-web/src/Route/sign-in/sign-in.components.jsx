import {
  signInGooglePopUp,
  createUserDocFromAuth,
} from "../../utils/firebase/firebase.utils";

import SignUp from '../../components/sign-up-form/sign-up-form.components'


const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInGooglePopUp();
    const userRef = await createUserDocFromAuth(user);
  };

  return (
    <div>
      <h1>Welcome To Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign IN</button>
      <SignUp/>
    </div>
  );
};

export default SignIn;
