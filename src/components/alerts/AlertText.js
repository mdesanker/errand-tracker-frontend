import styled, { css } from "styled-components";

const AlertText = ({ alert }) => {
  const { msg, type } = alert;

  return <Wrapper type={type}>{msg}</Wrapper>;
};

const Wrapper = styled.p`
  font-size: 18px;
  font-weight: bold;
  // width: 80%;
  // padding: 5px;
  text-align: center;
  // border-radius: ${({ theme }) => theme.radii.small};
  // margin-top: 10px;
  // box-shadow: ${({ theme }) => theme.shadows.sharp};

  ${(props) =>
    props.type === "danger" &&
    css`
      color: ${({ theme }) => theme.colors.danger};
    `};

  ${(props) =>
    props.type === "alert" &&
    css`
      color: ${({ theme }) => theme.colors.alert};
    `};

  ${(props) =>
    props.type === "success" &&
    css`
      color: ${({ theme }) => theme.colors.success};
    `};

  ${(props) =>
    props.type === "info" &&
    css`
      color: ${({ theme }) => theme.colors.info};
    `};
`;

export default AlertText;
