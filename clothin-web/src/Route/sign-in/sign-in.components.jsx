import { signInWithGooglePopUp , createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils"

const SignIn = () =>{
    const logGoogleUser = async () => { 
        const {user} = await signInWithGooglePopUp();
        createUserDocumentFromAuth(user);
    }
    return( 
        <div>
            <h1>Welcome To Sign In Page</h1>
            <button onClick={logGoogleUser}>Sign In with google</button>
        </div>
    )
}

export default SignIn