import styled from "styled-components";

const Button = ({ type, text, onClick }) => {
  return (
    <ButtonWrapper type={type} onClick={onClick}>
      {text}
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.button`
  font-size: 1.1rem;
  // font-weight: bold;
  color: white;
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.colors.medium};
  border: none;
  border-radius: ${({ theme }) => theme.radii.small};
  margin-top: 1rem;
  cursor: pointer;
  transition: all 200ms;

  &:hover {
    background-color: ${({ theme }) => theme.hover.medium};
  }
`;

export default Button;
