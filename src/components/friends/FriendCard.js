import { useSelector } from "react-redux";
import styled from "styled-components";
import AcceptDeclineBtn from "./AcceptDeclineBtn";
import FriendRequestBtn from "./FriendRequestBtn";

const FriendCard = ({ friend }) => {
  const { _id, username, avatar } = friend;

  const { user } = useSelector((state) => state.user);

  const isFriend =
    user.friends.filter((friend) => friend._id === _id).length > 0;

  const isPending =
    user.pendingRequests.filter((pending) => pending._id === _id).length > 0;

  const isRequested =
    user.friendRequests.filter((request) => request._id === _id).length > 0;

  return (
    <Container>
      <Card>
        <NameSection>
          <Avatar src={avatar} alt={username} />
          <Title>{username}</Title>
        </NameSection>
        <ActionSection>
          {!isFriend && !isPending && !isRequested && (
            <FriendRequestBtn id={_id} content="Send request" />
          )}
          {isRequested && <AcceptDeclineBtn />}
        </ActionSection>
      </Card>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  margin: 5px 0;

  // border: 1px solid red;
`;

const Card = styled.div`
  flex-grow: 1;
  height: 40px;
  padding: 8px;
  margin: 0.25rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const NameSection = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const Avatar = styled.img`
  height: 40px;
  width: 40px;
  object-fit: center;
`;

const Title = styled.div`
  font-size: 1rem;
  text-transform: uppercase;
  color: black;
`;

const ActionSection = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export default FriendCard;
