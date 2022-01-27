import { Link } from "react-router-dom";
import styled from "styled-components";

const MenuItem = ({ text, to }) => {
  return <Wrapper to={to}>{text}</Wrapper>;
};

const Wrapper = styled(Link)`
  display: block;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.medium};
  text-transform: uppercase;
  font-size: 1rem;
  text-align: center;
  padding: 15px 0;
  border: 5px solid white;
  border-radius: 15px;

  &:hover {
    color: ${({ theme }) => theme.colors.dark};
    border: 5px solid white;
    border-radius: 15px;
    background-color: #efefef;
  }
`;

export default MenuItem;
