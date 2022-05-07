import {useState} from 'react'

const defaultForm = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SignUp = () => {

    const [formFeilds,setFormFeilds] = useState(defaultForm);
    const {displayName,email,password,confirmPassword} = formFeilds;
  const onHandle = (event) => {
        const {name,value} = event.target;
        setFormFeilds({...formFeilds,[name]:value})
  };
  console.log(formFeilds)
  return (
    <div>
      <h2>Sign up with email and password</h2>
      <form onSubmit={() => {}}>
        <label>Display Name</label>
        <input required type="text" onChange={onHandle} name="displayName" value={displayName}></input>

        <label>eMail</label>
        <input required type="text" onChange={onHandle} name="email" value={email}></input>

        <label>Password</label>
        <input required type="password" onChange={onHandle} name="password" value={password}></input>

        <label>Confirm Password</label>
        <input required type="password" onChange={onHandle} name="confirmPassword" value={confirmPassword}></input>

        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
};

export default SignUp;
