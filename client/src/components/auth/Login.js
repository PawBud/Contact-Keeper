import React, { useState } from "react";

const Login = () => {
  const [user, setuser] = useState({
    email: "",
    password: "",
  });

  const onChange = e => {
      setuser({ ...user, [e.target.name]: e.target.value });
  }

  const onSubmit = e => {
      e.preventDefault();
      console.log('Login submit');//to be changed
  }

  const { email, password } = user;
  return (
    <div className="form-containter">
      <h1>
        Account <span className="text-primary">Login</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={onChange}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
          ></input>
        </div>
        <input
          type="submit"
          value="Login"
          className="btn btn-primary btn-block"
        ></input>
      </form>
    </div>
  );
};

export default Login;
