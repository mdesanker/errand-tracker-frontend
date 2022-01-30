import { Link } from "react-router-dom";
import styled from "styled-components";

const ExitBtn = ({ to }) => {
  return <Wrapper to={to}>X</Wrapper>;
};

const Wrapper = styled(Link)`
  position: fixed;
  top: 20px;
  right: 20px;
  height: 50px;
  width: 50px;
  line-height: 50px;
  display: flex;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid lightgray;
  font-size: 30px;
  text-decoration: none;
  color: gray;
  background-color: white;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  z-index: 100;

  & a {
    text-decoration: none;
    color white;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

export default ExitBtn;
