import styled from "styled-components";
import Hamburger from "../elements/Hamburger";
import Logo from "../elements/Logo";

const Header = () => {
  return (
    <Wrapper>
      <Container>
        <Logo size="45px" />
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
  // margin: 0 auto;
  // max-width: ${({ theme }) => theme.widths.content};
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;
`;

export default Header;
