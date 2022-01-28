import styled, { css } from "styled-components";

const FormBtn = ({ type, content, onClick, red }) => {
  return (
    <Wrapper type={type} onClick={onClick} red={red}>
      {content}
    </Wrapper>
  );
};

const Wrapper = styled.button`
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  color: white;
  padding: 1rem 2rem;
  border-radius: ${({ theme }) => theme.radii.large};
  border: 3px solid ${({ theme }) => theme.colors.medium};
  background-color: ${({ theme }) => theme.colors.medium};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.medium};
    background-color: white;
  }

  ${({ red }) =>
    red &&
    css`
      color: red;
      background-color: white;
      border: 3px solid transparent;

      &:hover {
        color: red;
        border: 3px solid red;
      }
    `}
`;

export default FormBtn;
