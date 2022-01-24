import styled from "styled-components";
import { Link } from "react-router-dom";

const CreateErrandLink = ({ onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      <Link to="/createerrand">+</Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  height: 80px;
  width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: none;
  font-size: 60px;
  color: white;
  background-color: ${({ theme }) => theme.colors.accent};
  box-shadow: 0 10px 10px rgba(255, 0, 0, 0.15);
  cursor: pointer;

  & a {
    text-decoration: none;
    color white;
  }

  &:hover {
    background-color: ${({ theme }) => theme.hover.accent};
  }
`;

export default CreateErrandLink;
