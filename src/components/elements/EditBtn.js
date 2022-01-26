import styled from "styled-components";

const EditBtn = () => {
  return (
    <Wrapper>
      <i className="far fa-edit" />
    </Wrapper>
  );
};

const Wrapper = styled.button`
  position: fixed;
  right: 20px;
  top: 20px;
  font-size: 25px;
  padding: 10px;
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: gray;

  &:hover {
    color: black;
  }
`;

export default EditBtn;
