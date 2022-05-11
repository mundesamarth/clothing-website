import { useState } from "react";
import '../sign-up-form/sign-up-form.styles.scss'
import Button from "../buttons/button.componet";
import FormInput from "../form-input/form-input.components";
import { createAuthUserWithEmailAndPassword,createUserDocFromAuth } from "../../utils/firebase/firebase.utils";
const defaultForm = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SignUp = () => {
  const [formFeilds, setFormFeilds] = useState(defaultForm);
  const { displayName, email, password, confirmPassword } = formFeilds;


  const resetFormFields = () =>{
    setFormFeilds(defaultForm)
  }
  const onHandle = (event) => {
    const { name, value } = event.target;
    setFormFeilds({ ...formFeilds, [name]: value });
  };
  console.log(formFeilds)

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Password Do Not Match");
      return;
    }

    try {
      const {user} = await createAuthUserWithEmailAndPassword(
        email, 
        password
      ); 
      await createUserDocFromAuth(user,{displayName}); 
      resetFormFields();
    } catch (error) {
        if(error.code === 'auth/email-already-in-use'){
            alert("cannot create user ,email already in use")
        }
        else{
            console.log("user creation encountered an error" , error)
        }
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Dont't have an account ?</h2>
      <span>Sign up with email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
        label="Display Name"
          required
          type="text"
          onChange={onHandle}
          name="displayName"
          value={displayName}
        ></FormInput>

        <FormInput
        label="email"
          required
          type="email"
          onChange={onHandle}
          name="email"
          value={email}
        ></FormInput>


        <FormInput
          label="Password"
          required
          type="password"
          onChange={onHandle}
          name="password"
          value={password}
        ></FormInput>


        <FormInput
        label="Confirm Password"
          required
          type="password"
          onChange={onHandle}
          name="confirmPassword"
          value={confirmPassword}
        ></FormInput>

        <Button  type="submit">SUBMIT</Button>
      </form>
    </div>
  );
};

export default SignUp;
