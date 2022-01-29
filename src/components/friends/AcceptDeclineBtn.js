import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import styled, { css } from "styled-components";
import {
  declineFriendRequest,
  acceptFriendRequest,
} from "../../store/slices/userSlice";

const AcceptDeclineBtn = ({ id }) => {
  const dispatch = useDispatch();

  const acceptRequestHandler = () => {
    console.log("Accepting request");
    dispatch(acceptFriendRequest({ id }));
  };

  const declineRequestHandler = () => {
    console.log("Declining request");
    dispatch(declineFriendRequest({ id }));
  };

  return (
    <Wrapper>
      <Button type="button" onClick={acceptRequestHandler} accept="true">
        Accept
      </Button>
      <Button type="button" onClick={declineRequestHandler} decline="true">
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
