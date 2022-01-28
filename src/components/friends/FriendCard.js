import styled from "styled-components";

const FriendCard = ({ user }) => {
  const { _id, username, avatar } = user;

  return (
    <Container>
      <Card>
        <Title>{username}</Title>
      </Card>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  align-items: center;
`;

const Card = styled.div`
  flex-grow: 1;
  min-height: 40px;
  padding: 8px;
  margin: 0.25rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: #e5e5e5;
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.light};
  }
`;

const Title = styled.div`
  font-size: 1rem;
  text-transform: uppercase;
  color: black;
`;

export default FriendCard;
