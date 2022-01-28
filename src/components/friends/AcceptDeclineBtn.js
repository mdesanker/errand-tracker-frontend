import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import styled, { css } from "styled-components";

const AcceptDeclineBtn = ({ id, content }) => {
  const dispatch = useDispatch();

  const acceptRequestHandler = () => {
    console.log("Accepting request");
  };

  const declineRequestHandler = () => {
    console.log("Declining request");
  };

  return (
    <Wrapper>
      <Button type="button" onClick={acceptRequestHandler} accept>
        Accept
      </Button>
      <Button type="button" onClick={declineRequestHandler} decline>
        Decline
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const Button = styled.button`
  font-size: 0.9rem;
  padding: 2px 5px;
  border-radius: ${({ theme }) => theme.radii.small};
  cursor: pointer;

  ${({ accept }) =>
    accept &&
    css`
      color: green;
      border: 1px solid green;

      &:hover {
        color: white;
        background-color: green;
      }
    `}

  ${({ decline }) =>
    decline &&
    css`
      color: red;
      border: 1px solid red;

      &:hover {
        color: white;
        background-color: red;
      }
    `}
`;

export default AcceptDeclineBtn;
