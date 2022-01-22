import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  const { username, email, password, password2 } = formData;

  const formChangeHandler = (e) => {
    const { name, value } = e.target;

    setFormData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    // Check passwords match
    if (password !== password2) {
      console.log("Passwords do not match");
    } else {
      console.log(formData);
    }
  };

  return (
    <Wrapper>
      <Card>
        <h1>Sign up.</h1>
        <p>Create an account</p>
        <form onSubmit={formSubmitHandler}>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            required
            value={username}
            onChange={formChangeHandler}
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="name@domain.com"
            required
            value={email}
            onChange={formChangeHandler}
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            required
            value={password}
            onChange={formChangeHandler}
          />
          <input
            type="password"
            name="password2"
            id="password2"
            placeholder="Confirm password"
            required
            value={password2}
            onChange={formChangeHandler}
          />
          <button type="submit">Sign up</button>
        </form>
        <p>
          Already have an account? <Link to="/">Log in</Link>
        </p>
      </Card>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  width: 100%;
`;

const Card = styled.div``;

export default Register;
