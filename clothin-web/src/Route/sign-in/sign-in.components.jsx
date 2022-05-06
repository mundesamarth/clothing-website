import { signInGooglePopUp  } from "../../utils/firebase/firebase.utils"

const SignIn = () =>{
    const logGoogleUser = async() =>{
        const response = await signInGooglePopUp()
        console.log(response)
    }
    return( 
        <div>
            <h1>Welcome To Sign In Page</h1>
            <button onClick= {logGoogleUser}>Sign IN</button>
        </div>
    )
}

export default SignIn