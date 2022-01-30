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
  padding: 5px;
  // border: 1px solid lightgray;
  font-size: 30px;
  text-decoration: none;
  color: gray;
  background-color: white;
  // box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
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
