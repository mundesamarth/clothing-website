import { signInGooglePopUp,createUserDocFromAuth  } from "../../utils/firebase/firebase.utils"

const SignIn = () =>{
    const logGoogleUser = async() =>{
        const {user} = await signInGooglePopUp()
        const userRef = await createUserDocFromAuth(user)
    }
    return( 
        <div>
            <h1>Welcome To Sign In Page</h1>
            <button onClick= {logGoogleUser}>Sign IN</button>
        </div>
    )
}

export default SignIn