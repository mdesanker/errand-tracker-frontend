import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import Button from "../elements/Button";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

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
    console.log(formData);
  };

  return (
    <Wrapper>
      <Card>
        <Header>Log in.</Header>
        <SubHeader>Log in to your account.</SubHeader>
        <Form onSubmit={formSubmitHandler}>
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
          <Button type="submit" text="Log In" />
        </Form>
        <Text>
          Don't have an account?{" "}
          <StyledLink to="/register">Sign up.</StyledLink>
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
  max-width: 800px;
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
  font-size: 0.9rem;
  text-align: center;
  margin: 15px 0 20px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.medium};
`;

export default Login;