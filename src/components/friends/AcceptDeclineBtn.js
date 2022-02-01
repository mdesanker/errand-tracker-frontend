import { useDispatch } from "react-redux";
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
        <i className="fas fa-check" />
      </Button>
      <Button type="button" onClick={declineRequestHandler} decline="true">
        <i className="fas fa-times" />
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  padding: 2px 5px;
  border: none;
  height: 35px;
  width: 35px;
  border-radius: 50%;
  background-color: transparent;
  cursor: pointer;

  ${({ accept }) =>
    accept &&
    css`
      color: green;

      &:hover {
        color: white;
        background-color: green;
      }
    `}

  ${({ decline }) =>
    decline &&
    css`
      color: red;

      &:hover {
        color: white;
        background-color: red;
      }
    `}
`;

export default AcceptDeclineBtn;
