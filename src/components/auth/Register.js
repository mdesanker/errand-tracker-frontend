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
        <Header>Sign up.</Header>
        <SubHeader>Create an account.</SubHeader>
        <Form onSubmit={formSubmitHandler}>
          <Input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            autoComplete="off"
            required
            value={username}
            onChange={formChangeHandler}
          />
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="name@domain.com"
            autoComplete="email"
            required
            value={email}
            onChange={formChangeHandler}
          />
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            required
            value={password}
            onChange={formChangeHandler}
          />
          <Input
            type="password"
            name="password2"
            id="password2"
            placeholder="Confirm password"
            required
            value={password2}
            onChange={formChangeHandler}
          />
          <button type="submit">Sign up</button>
        </Form>
        <Text>
          Already have an account? <Link to="/">Log in.</Link>
        </Text>
      </Card>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  width: 90%;
  min-height: 50%;
  font-size: 1rem;
  padding: 16px 12px 20px;
  background-color: #fff;
  border-radius: ${({ theme }) => theme.radii.medium};
  box-shadow: ${({ theme }) => theme.shadows.soft};
`;

const Header = styled.h1`
  margin-bottom: 10px;
`;

const SubHeader = styled.p`
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  font-size: 1rem;
  line-height: 1.5;
  padding: 5px;
  margin: 8px 0;
  border: 1px solid lightgray;
  border-radius: ${({ theme }) => theme.radii.small};

  &:focus {
    outline: 1px solid ${({ theme }) => theme.colors.medium};
  }
`;

const Text = styled.p`
  text-align: center;
  margin: 15px 0 20px;
`;

export default Register;
