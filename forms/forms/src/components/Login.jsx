import { useState } from "react";
import { useRef } from "react";
export default function Login() {
  const [emailIsInvalid, setEmailIsInvalid] = useState(false);

  const email = useRef();
  const password = useRef();
  // const [userEmail, setUserEmail] = useState("");
  // const [userPassword, setUserPassword] = useState("");
  // const [enteredValues, setEnteredValues] = useState({
  //   email: '',
  //   password: '',
  // });

  function handleSubmit(event) {
    event.preventDefault();
    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;

    const emailIsvalid = enteredEmail.includes("@");

    if (!emailIsvalid) {
      setEmailIsInvalid(true);
      return;
    }
    setEmailIsInvalid(false);

    console.log("Sending http request ...");
    // console.log(enteredEmail, enteredPassword);
  }

  //A generic and versatile function.
  // function inputChange(identifier, value) {
  //   setEnteredValues(preValues => ({
  //     ...preValues,
  //     [identifier]: value
  //   }))
  // }

  // function handleEmailChange(event) {
  //   setUserEmail(event.target.value);
  // }

  // function handlePasswordChange(event) {
  //   setUserPassword(event.target.value);
  // }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            ref={email}
            // onChange={(event) => handleEmailChange('email', event.target.value)}
            // value={enteredValues.email}
          />
          <div className="control-error">
            {emailIsInvalid && <p>Please enter correct email</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            ref={password}
            // onChange={(event) => handlePasswordChange('password', event.target.value)}
            // value={enteredValues.password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        {/* when we submit the form then site will reload again sue to usage of react only and to avoid that just set the type of button to button */}
        {/* <button type="button" className="button" onClick={handleSubmit}>
          Login
        </button> */}
        <button className="button">Login</button>
      </p>
    </form>
  );
}
