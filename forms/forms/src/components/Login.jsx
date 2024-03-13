export default function Login() {
  function handleSubmit() {
    console.log("submitted");
  }
  return (
    <form>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        {/* when we submit the form then site will reload again sue to usage of react only and to avoid that just set the type of button to button */}
        <button type="button" className="button" onClick={handleSubmit}>
          Login
        </button>
      </p>
    </form>
  );
}
