import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from "../elements/Button";
import { useDispatch } from "react-redux";
import { registerUser } from "../../store/slices/userSlice";
import { timedAlert } from "../../store/slices/alertSlice";
import { useSelector } from "react-redux";
import AlertView from "../alerts/AlertView";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
      // console.log("Passwords do not match");
      dispatch(
        timedAlert({
          msg: "Passwords do not match",
          type: "danger",
        })
      );
    } else {
      dispatch(registerUser({ username, email, password }));
    }
  };

  const { isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated]);

  const alerts = useSelector((state) => state.alerts);

  return (
    <FormWrapper>
      <AlertView alerts={alerts} />
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
            value={username}
            onChange={formChangeHandler}
          />
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="name@domain.com"
            autoComplete="email"
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
          <Input
            type="password"
            name="password2"
            id="password2"
            placeholder="Confirm password"
            value={password2}
            onChange={formChangeHandler}
          />
          <Button type="submit" text="Sign up" />
        </Form>
        <Text>
          Already have an account? <StyledLink to="/">Log in.</StyledLink>
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
  font-size: 0.9rem;
  text-align: center;
  margin: 15px 0 20px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.medium};
`;

export default Register;
