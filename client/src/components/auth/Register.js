import React, { useState, useContext } from "react";
import AlertContext from '../../context/alert/alertContext';

const Register = () => {
  const alertContext = useContext(AlertContext);

  const { setAlert } = alertContext;

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
      if(name === '' || email === '' || password === '') {
        setAlert('Please enter all fields', 'danger');
      }
      else if (password !== password2) {
        setAlert('Passwords do not match', 'danger');
      }
      else{
        setAlert('Submitted!!', 'success');
      }
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
            required
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            required
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            required
            minLength="6"
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="password2">Verify Password</label>
          <input
            type="password"
            name="password2"
            value={password2}
            onChange={onChange}
            required
            minLength="6"
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
