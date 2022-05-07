import { userState, useState } from "react";

const defaultFormFeilds = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [formFeilds, setFormFeilds] = useState(defaultFormFeilds);
  const { displayName, email, password, confirmPassword } = formFeilds;

  console.log(formFeilds);

  const handleChange = (event) => {
    const { name , value} = event.target;
    setFormFeilds({...formFeilds,[name]:value})
  };
  return (
    <div>
      <h2>Sign Up With Your Email id</h2>
      <form onSubmit={() => {}}>
        <label>Display Name</label>
        <input
          required
          type="text"
          onChange={handleChange}
          name="displayName"
          value={displayName}
        ></input>

        <label>eMail</label>
        <input
          required
          type="email"
          onChange={handleChange}
          name="email"
          value={email}
        ></input>

        <label>Password</label>
        <input
          required
          type="password"
          onChange={handleChange}
          name="password"
          value={password}
        ></input>

        <label>Confirm Password</label>
        <input
          required
          type="password"
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        ></input>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignUp;
