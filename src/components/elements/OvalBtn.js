import styled from "styled-components";

const OvalBtn = ({ text, onClick }) => {
  return <Wrapper onClick={onClick}>{text}</Wrapper>;
};

const Wrapper = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  height: 80px;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  color: white;
  border-radius: 40px;
  border: none;
  background-color: ${({ theme }) => theme.colors.accent};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.hover.accent};
  }
`;

export default OvalBtn;
