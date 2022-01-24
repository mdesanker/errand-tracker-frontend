import styled from "styled-components";

const ExitBtn = ({ onClick }) => {
  return <Wrapper onClick={onClick}>X</Wrapper>;
};

const Wrapper = styled.div`
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
  color: gray;
  background-color: white;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  & a {
    text-decoration: none;
    color white;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

export default ExitBtn;
