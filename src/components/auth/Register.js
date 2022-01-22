import styled from "styled-components";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <Wrapper>
      <Card>
        <h1>Sign up.</h1>
        <p>Create an account</p>
        <form>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            required
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="name@domain.com"
            required
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            required
          />
          <input
            type="password"
            name="password2"
            id="password2"
            placeholder="Confirm password"
            required
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
