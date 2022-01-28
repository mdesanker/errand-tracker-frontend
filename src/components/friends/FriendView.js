import styled from "styled-components";
import Dropdown from "../dropdown/Dropdown";

const FriendView = () => {
  return (
    <Wrapper>
      <Dropdown />
      <Section>Friend Requests</Section>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Section = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
`;

export default FriendView;
