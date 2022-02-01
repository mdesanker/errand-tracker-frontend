import styled from "styled-components";
import SearchForm from "./SearchForm";
import { useSelector } from "react-redux";
import FriendCard from "./FriendCard";
import Navbar from "../navbar/Navbar";
import { Fragment } from "react";
import Container from "../elements/Container";

const FriendView = () => {
  const { friends, friendRequests, pendingRequests } = useSelector(
    (state) => state.user.user
  );

  const { username } = useSelector((state) => state.user.user);

  return (
    <Fragment>
      <Navbar />
      <main>
        <Container>
          <Section>
            <Header>
              <Title>{username && username}'s Friends</Title>
            </Header>
            {friends.length > 0 ? (
              friends.map((friend) => {
                return <FriendCard key={friend._id} friend={friend} />;
              })
            ) : (
              <EmptyMsg>Friend list empty</EmptyMsg>
            )}
          </Section>
          <Section>
            <Header>
              <Title>Friend Requests</Title>
            </Header>
            {friendRequests.length > 0 ? (
              friendRequests.map((friend) => {
                console.log(friend);
                return <FriendCard key={friend._id} friend={friend} />;
              })
            ) : (
              <EmptyMsg>No current friend requests</EmptyMsg>
            )}
          </Section>
          <Section>
            <Header>
              <Title>Pending Requests</Title>
            </Header>
            {pendingRequests.length > 0 ? (
              pendingRequests.map((friend) => {
                return <FriendCard key={friend._id} friend={friend} />;
              })
            ) : (
              <EmptyMsg>No pending requests</EmptyMsg>
            )}
          </Section>
          <Section>
            <Header>
              <Title>Search all users</Title>
            </Header>
            <SearchForm />
          </Section>
        </Container>
      </main>
    </Fragment>
  );
};

const Section = styled.div`
  margin: 10px 0 30px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 45px;
  border-bottom: 1px solid gray;
  padding-bottom: 5px;
`;

const Title = styled.h2`
  color: gray;
  text-transform: uppercase;
  font-weight: normal;
  font-size: 1rem;
`;

const EmptyMsg = styled.p`
  padding: 5px;
`;

export default FriendView;
