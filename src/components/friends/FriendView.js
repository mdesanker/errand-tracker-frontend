import styled from "styled-components";
import Dropdown from "../dropdown/Dropdown";
import Greeting from "../dashboard/Greeting";
import { useState } from "react";
import SearchForm from "./SearchForm";
import { useSelector } from "react-redux";
import FriendCard from "./FriendCard";

const FriendView = () => {
  const { friends, friendRequests } = useSelector((state) => state.user.user);

  console.log(friends);

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
            return <FriendCard key={friend._id} user={friend} />;
          })
        ) : (
          <p>No current friend requests</p>
        )}
      </Section>
      <Section>
        <Header>
          <Title>Friends</Title>
        </Header>
        {friends.length > 0
          ? friends.map((friend) => {
              return <FriendCard key={friend._id} user={friend} />;
            })
          : "Friend list empty"}
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

export default FriendView;
