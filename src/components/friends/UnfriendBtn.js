import { useDispatch } from "react-redux";
import styled from "styled-components";
const UnfriendBtn = ({ id }) => {
  const dispatch = useDispatch();

  const unfriendRequestHandler = () => {
    console.log("Unfriending");
  };

  return (
    <Wrapper>
      <Button type="button" onClick={unfriendRequestHandler}>
        Unfriend
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
  color: gray;
  border: 1px solid gray;

  &:hover {
    color: black;
    border: 1px solid black;
  }
`;

export default UnfriendBtn;
