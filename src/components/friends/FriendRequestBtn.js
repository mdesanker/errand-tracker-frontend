import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { sendFriendRequest } from "../../store/slices/userSlice";

const FriendRequestBtn = ({ id, content }) => {
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(sendFriendRequest({ id }));
  };

  return (
    <Wrapper type="button" onClick={clickHandler}>
      {content}
    </Wrapper>
  );
};

const Wrapper = styled.button`
  font-size: 0.9rem;
  color: gray;
  padding: 2px 5px;
  border: 1px solid gray;
  border-radius: ${({ theme }) => theme.radii.small};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.dark};
    border: 1px solid ${({ theme }) => theme.colors.dark};
  }
`;

export default FriendRequestBtn;
