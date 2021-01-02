import React, { useState } from "react";

const Register = () => {

  const [user, setuser] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const onChange = e => {
      setuser({ ...user, [e.target.name]: e.target.value });
  }

  const onSubmit = e => {
      e.preventDefault();
      console.log('Register submit');//to be changed
  }

  const { name, email, password, password2 } = user;
  return (
    <div className="form-containter">
      <h1>
        Account <span className="text-primary">Register</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={onChange}
          ></input>
        </div>
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
        <div className="form-group">
          <label htmlFor="password2">Password</label>
          <input
            type="password"
            name="password2"
            value={password2}
            onChange={onChange}
          ></input>
        </div>
        <input
          type="submit"
          value="Register"
          className="btn btn-primary btn-block"
        ></input>
      </form>
    </div>
  );
};

export default Register;
