import { Link } from "react-router-dom";
import styled from "styled-components";

const ExitBtn = ({ to }) => {
  return <Wrapper to={to}>X</Wrapper>;
};

const Wrapper = styled(Link)`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45px;
  width: 45px;
  font-size: 35px;
  border-radius: 50%;
  text-decoration: none;
  color: gray;
  background-color: white;
  cursor: pointer;
  z-index: 100;

  & a {
    text-decoration: none;
    color white;
  }

  &:hover {
    color: black;
  }
`;

export default ExitBtn;
