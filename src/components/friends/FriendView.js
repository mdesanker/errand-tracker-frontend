import styled from "styled-components";
import Dropdown from "../dropdown/Dropdown";
import Greeting from "../dashboard/Greeting";
import { useState } from "react";
import SearchForm from "./SearchForm";

const FriendView = () => {
  return (
    <Wrapper>
      <Dropdown />
      <Greeting />
      <Section>
        <Header>
          <Title>Friend Requests</Title>
        </Header>
      </Section>
      <Section>
        <Header>
          <Title>Friends</Title>
        </Header>
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
