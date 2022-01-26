import styled from "styled-components";

const ErrandDeleteBtn = () => {
  return <Wrapper>Delete</Wrapper>;
};

const Wrapper = styled.button`
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  padding: 5px;
  color: lightgray;
  border: 2px solid lightgray;
  border-radius: ${({ theme }) => theme.radii.small};
  margin-left: 5px;
  cursor: pointer;

  &:hover {
    color: gray;
    border: 2px solid gray;
  }
`;

export default ErrandDeleteBtn;
