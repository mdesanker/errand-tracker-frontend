import { useSelector } from "react-redux";
import styled from "styled-components";

const Greeting = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <Wrapper>
      {user && <Avatar src={user.avatar} alt="user.username" />}
      {user && <Title>{user.username}'s errands</Title>}
    </Wrapper>
  );
};

const Wrapper = styled.header`
  width: 100%;
  display: flex;
  gap: 20px;
  align-items: center;
  margin: 10px 0;
`;

const Avatar = styled.img`
  height: 60px;
  width: 60px;

  &:hover {
    -webkit-transofrm: scaleX(-1);
    transform: scaleX(-1);
  }
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 400;
`;

export default Greeting;
