import { useState, useRef, useEffect } from "react";
import styled, { css } from "styled-components";
import LogoutBtn from "./LogoutBtn";
import MenuItem from "./MenuItem";

const Dropdown = () => {
  const ref = useRef();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const clickHandler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (isMenuOpen && ref.current && !ref.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", checkIfClickedOutside);

    return () => {
      document.removeEventListener("click", checkIfClickedOutside);
    };
  }, [isMenuOpen]);

  return (
    <Wrapper>
      <MenuBtn active={isMenuOpen} onClick={clickHandler}>
        <i className="fas fa-ellipsis-h" />
      </MenuBtn>
      <MenuCard ref={ref} active={isMenuOpen}>
        <MenuItem to="/dashboard" text="Home" />
        <MenuItem to="/projects" text="Projects" />
        <MenuItem to="/friends" text="Friends" />
        <LogoutBtn />
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
    background-color: #e5e5e5;
  }

  ${({ active }) =>
    active &&
    css`
      transform: rotate(90deg);
      color: blue;
    `}
`;

const MenuCard = styled.div`
  width: 200px;
  background-color: white;
  margin-top: 5px;
  box-shadow: ${({ theme }) => theme.shadows.soft};
  overflow: hidden;
  max-height: 0;
  transition: max-height 200ms;

  ${({ active }) =>
    active &&
    css`
      display: flex;
      flex-direction: column;
      max-height: 500px;
    `}
`;

export default Dropdown;
