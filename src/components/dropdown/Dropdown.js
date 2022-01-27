import { useState } from "react";
import styled, { css } from "styled-components";
import MenuItem from "./MenuItem";

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
      <MenuCard active={active}>
        <MenuItem to="#" text="Projects" />
        <MenuItem to="#" text="Friends" />
        <MenuItem to="#" text="Log out" />
      </MenuCard>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
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
  transition: all 100ms;
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

const MenuCard = styled.div`
  display: none;
  width: 200px;
  // height: 300px;
  background-color: white;
  margin-top: 5px;
  box-shadow: ${({ theme }) => theme.shadows.soft};

  ${({ active }) =>
    active &&
    css`
      display: flex;
      flex-direction: column;
    `}
`;

export default Dropdown;
