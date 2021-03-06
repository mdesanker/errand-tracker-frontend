import { useSelector } from "react-redux";
import styled from "styled-components";

const RequestCounter = () => {
  const user = useSelector((state) => state.user.user);

  const requestCount = user && user.friendRequests.length;

  return requestCount > 0 ? <Wrapper>{requestCount}</Wrapper> : null;
};

const Wrapper = styled.p`
  position: absolute;
  top: 2px;
  right: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  font-size: 14px;
  padding: 3px;
  height: 20px;
  width: 20px;
  background-color: ${({ theme }) => theme.colors.accent};
  border-radius: 50%;
`;

export default RequestCounter;
