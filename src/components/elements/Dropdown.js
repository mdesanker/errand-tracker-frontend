import { useState } from "react";
import styled, { css } from "styled-components";

const Dropdown = () => {
  const [active, setActive] = useState(false);

  const clickHandler = () => {
    setActive(!active);
  };

  return (
    <Wrapper>
      <MenuBtn active={active} onClick={clickHandler}>
        <i class="fas fa-ellipsis-h" />
      </MenuBtn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
`;

const MenuBtn = styled.button`
  font-size: 1.5rem;
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: all 200ms;
  color: gray;

  &:hover {
    background-color: lightgray;
  }

  ${({ active }) =>
    active &&
    css`
      transform: rotate(90deg);
      color: blue;
    `}
`;

export default Dropdown;
