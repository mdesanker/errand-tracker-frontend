import { Link } from "react-router-dom";
import styled from "styled-components";

const Page404 = () => {
  return (
    <main>
      <Wrapper>
        <Title>
          4<i className="fas fa-bug" />4
        </Title>
        <p>
          The page you are looking for was not found. Let's try going back to
          the login page:
        </p>
        <StyledLink to="/">Back to safety</StyledLink>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1rem;
  text-align: center;
  gap: 2rem;
`;

const Title = styled.h1`
  font-size: 4rem;
  letter-spacing: 0.8rem;
`;

const StyledLink = styled(Link)`
  font-size: 1rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.dark};
  text-decoration: none;
  padding: 1rem 2rem;
  border: 2px solid ${({ theme }) => theme.colors.dark};
  border-radius: ${({ theme }) => theme.radii.medium};

  &:hover {
    color: white;
    background-color: ${({ theme }) => theme.colors.dark};
  }
`;

export default Page404;
