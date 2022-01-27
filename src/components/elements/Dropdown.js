import styled from "styled-components";

const Dropdown = () => {
  return (
    <Wrapper>
      <MenuBtn>
        <i class="fas fa-ellipsis-h" />
      </MenuBtn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
`;

const MenuBtn = styled.button`
  font-size: 1.5rem;
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: none;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    background-color: lightgray;
  }
`;

export default Dropdown;
