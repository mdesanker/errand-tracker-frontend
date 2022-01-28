import styled from "styled-components";

const FriendRequestBtn = ({ content, onClick }) => {
  return <Wrapper onClick={onClick}>{content}</Wrapper>;
};

const Wrapper = styled.button`
  font-size: 0.9rem;
  color: gray;
  padding: 2px 5px;
  border: 1px solid gray;
  border-radius: ${({ theme }) => theme.radii.small};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.dark};
    border: 1px solid ${({ theme }) => theme.colors.dark};
  }
`;

export default FriendRequestBtn;
