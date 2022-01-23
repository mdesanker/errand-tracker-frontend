import styled, { css } from "styled-components";

const Alert = ({ msg, type }) => {
  return <Wrapper type={type}>{msg}</Wrapper>;
};

const Wrapper = styled.p`
  font-size: 1rem;
  font-weight: bold;
  width: 80%;
  padding: 5px;
  text-align: center;
  border-radius: ${({ theme }) => theme.radii.small};
  margin-top: 10px;

  ${(props) =>
    props.type === "danger" &&
    css`
      color: white;
      background-color: ${({ theme }) => theme.colors.danger};
    `};

  ${(props) =>
    props.type === "alert" &&
    css`
      color: white;
      background-color: ${({ theme }) => theme.colors.alert};
    `};

  ${(props) =>
    props.type === "success" &&
    css`
      color: white;
      background-color: ${({ theme }) => theme.colors.success};
    `};

  ${(props) =>
    props.type === "info" &&
    css`
      color: white;
      background-color: ${({ theme }) => theme.colors.info};
    `};
`;

export default Alert;
