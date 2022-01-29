import styled from "styled-components";
import Dropdown from "../dropdown/Dropdown";
import Greeting from "../dashboard/Greeting";
import { useState } from "react";
import SearchForm from "./SearchForm";
import { useSelector } from "react-redux";
import FriendCard from "./FriendCard";

const FriendView = () => {
  const { friends, friendRequests } = useSelector((state) => state.user.user);

  return (
    <Wrapper>
      <Dropdown />
      <Greeting />
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
          <Title>Friends</Title>
        </Header>
        {friends.length > 0 ? (
          friends.map((friend) => {
            return <FriendCard key={friend} friend={friend} />;
          })
        ) : (
          <EmptyMsg>Friend list empty</EmptyMsg>
        )}
      </Section>
      <Section>
        <Header>
          <Title>Add Friends</Title>
        </Header>
        <SearchForm />
      </Section>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  width: 80%;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Section = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 15px;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid gray;
  padding-bottom: 5px;
`;

const Title = styled.h2`
  // width: 80%;
  color: gray;
  text-transform: uppercase;
  font-weight: normal;
  font-size: 1rem;
`;

const EmptyMsg = styled.p`
  padding: 5px;
`;

export default FriendView;
