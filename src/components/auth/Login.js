import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "../elements/Button";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../store/slices/userSlice";
import { useEffect } from "react";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
    dispatch(loginUser({ email, password }));
  };

  const { isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated]);

  return (
    <FormWrapper>
      <Card>
        <Header>Log in.</Header>
        <SubHeader>Log in to your account.</SubHeader>
        <Form onSubmit={formSubmitHandler}>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="name@domain.com"
            value={email}
            onChange={formChangeHandler}
          />
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
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
    </FormWrapper>
  );
};

const FormWrapper = styled.main`
  padding-top: 0;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.light};
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
