import { useState } from "react";
import styled, { css } from "styled-components";

const Hamburger = () => {
  const [active, setActive] = useState(false);

  const clickHandler = () => {
    setActive(!active);
  };

  return (
    <HamburgerWrapper active={active} onClick={clickHandler}>
      <div />
    </HamburgerWrapper>
  );
};

const HamburgerWrapper = styled.div`
  height: 40px;
  width: 40px;
  position: relative;
  cursor: pointer;

  div {
    height: 4px;
    width: 100%;
    background-color: gray;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    content: "";
    transition: background 0.1s ease 0.3s;
  }

  div::before,
  div::after {
    height: 4px;
    width: 40px;
    background-color: gray;
    position: absolute;
    content: "";
    transform-origin: center center;
    transition: top ease 0.3s 0.3s, transform ease 0.3s;
  }

  div::before {
    top: -12px;
  }

  div::after {
    top: 12px;
  }

  ${(props) =>
    props.active &&
    css`
      div::before,
      div::after {
        top: 0;
        transition: top ease 0.3s, transform ease 0.3s 0.3s;
      }

      div {
        background: transparent;
        transition: background 0.1s ease 0.3s;
      }

      div::before {
        transform: rotate(45deg);
      }

      div::after {
        transform: rotate(-45deg);
      }
    `}
`;

export default Hamburger;
