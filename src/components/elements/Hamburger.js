import styled from "styled-components";

const Hamburger = () => {
  return (
    <HamburgerWrapper>
      <div />
      <div />
      <div />
    </HamburgerWrapper>
  );
};

const HamburgerWrapper = styled.div`
  height: 40px;
  width: 40px;
  position: relative;
  cursor: pointer;

  // border: 1px solid red;

  div {
    height: 4px;
    width: 40px;
    background-color: gray;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    content: "";
  }

  div::before,
  div::after {
    height: 4px;
    width: 40px;
    background-color: gray;
    position: absolute;
    content: "";
  }

  div::before {
    top: -12px;
  }

  div::after {
    top: 12px;
  }
`;

export default Hamburger;
