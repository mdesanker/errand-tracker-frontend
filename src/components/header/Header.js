import styled from "styled-components";
import Hamburger from "../elements/Hamburger";
import Logo from "../elements/Logo";

const Header = () => {
  return (
    <Wrapper>
      <Container>
        <Logo size="50px" />
        <Hamburger />
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: ${({ theme }) => theme.heights.header};

  // border: 1px solid red;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`;

export default Header;
