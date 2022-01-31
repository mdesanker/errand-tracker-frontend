import styled, { css } from "styled-components";

const Button = ({ type, text, onClick, secondary }) => {
  return (
    <ButtonWrapper type={type} onClick={onClick} secondary={secondary}>
      {text}
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.button`
  font-size: 1.1rem;
  font-weight: bold;
  color: white;
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.colors.medium};
  border: 2px solid ${({ theme }) => theme.colors.medium};
  border-radius: ${({ theme }) => theme.radii.medium};
  margin-top: 0.5rem;
  cursor: pointer;
  transition: all 200ms;

  &:hover {
    background-color: ${({ theme }) => theme.hover.medium};
  }

  ${({ secondary }) =>
    secondary &&
    css`
      color: ${({ theme }) => theme.colors.accent};
      background-color: white;
      border: 2px solid ${({ theme }) => theme.colors.accent};

      &:hover {
        color: white;
        background-color: ${({ theme }) => theme.colors.accent};
        border: 2px solid ${({ theme }) => theme.colors.accent};
      }
    `}
`;

export default Button;
