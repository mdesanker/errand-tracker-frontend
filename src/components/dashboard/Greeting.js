import { useSelector } from "react-redux";
import styled from "styled-components";

const Greeting = () => {
  const { user } = useSelector((state) => state.user);
  console.log(user);

  return (
    <Wrapper>
      <Avatar src={user.avatar} alt="user.username" />
      <div>
        <h1>Hi, {user.username}</h1>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  width: 100%;
  display: flex;
  padding: 1rem;
  gap: 20px;
  align-items: center;
`;

const Avatar = styled.img`
  height: ${({ theme }) => theme.radii.avatar};
  width: ${({ theme }) => theme.radii.avatar};
  border-radius: 50%;
  // border: 10px solid ${({ theme }) => theme.colors.medium};
`;

export default Greeting;
