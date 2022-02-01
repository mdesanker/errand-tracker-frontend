import styled from "styled-components";

const RequestCounter = () => {
  return <Wrapper>1</Wrapper>;
};

const Wrapper = styled.p`
  position: absolute;
  top: 2px;
  right: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  font-size: 14px;
  padding: 3px;
  height: 20px;
  width: 20px;
  background-color: ${({ theme }) => theme.colors.accent};
  border-radius: 50%;
`;

export default RequestCounter;
