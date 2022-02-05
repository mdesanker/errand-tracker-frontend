import styled from "styled-components";

const DeleteBtn = ({ onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      <Trash className="fas fa-trash" />
      <Check className="fas fa-check" />
    </Wrapper>
  );
};

const Wrapper = styled.button`
  position: relative;
  height: 40px;
  width: 40px;
  font-size: 1.5rem;
  cursor: pointer;
  background-color: transparent;
  border: none;
`;

const Trash = styled.i`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: gray;

  ${Wrapper}:hover & {
    color: ${({ theme }) => theme.colors.medium};
  }
`;

const Check = styled.i`
  position: absolute;
  color: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -30%);
  font-size: 0.8rem;
`;

export default DeleteBtn;
