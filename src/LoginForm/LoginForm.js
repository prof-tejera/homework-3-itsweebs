import { useState } from "react";
import "./LoginForm.css";

const LoginForm = () => {
  const [formInput, setFormInput] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleInput = (event) => {
    const { name, value, type, checked } = event.target;

    setFormInput({
      ...formInput,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // form submits
    console.log(formInput);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label id="inputlabels">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formInput.email}
            onChange={handleInput}
            required
          />
        </div>
        <div>
          <label id="inputlabels">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formInput.password}
            onChange={handleInput}
            required
          />
        </div>
        <div>
          <label id="inputlabels">
            <input
              type="checkbox"
              name="rememberMe"
              checked={formInput.rememberMe}
              onChange={handleInput}
            />
            Remember Me
          </label>
        </div>
        <div>
          <button id="login" type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
