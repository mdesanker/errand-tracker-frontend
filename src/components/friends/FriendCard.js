import styled from "styled-components";

const FriendCard = ({ user }) => {
  const { _id, username, avatar } = user;

  return (
    <Container>
      <Card>
        <CardSection>
          <Avatar src={avatar} alt={username} />
          <Title>{username}</Title>
        </CardSection>
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

const CardSection = styled.div`
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

export default FriendCard;
