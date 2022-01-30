import { useDispatch, useSelector } from "react-redux";
import styled, { css } from "styled-components";
import { toggleEdit } from "../../store/slices/uiSlice";

const EditBtn = () => {
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(toggleEdit());
  };

  const { edit } = useSelector((state) => state.ui);

  return (
    <Button active={edit} onClick={clickHandler}>
      <i className="far fa-edit" />
    </Button>
  );
};

const Button = styled.button`
  font-size: 25px;
  padding: 5px;
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: gray;

  ${({ active }) =>
    active &&
    css`
      color: ${({ theme }) => theme.colors.medium};
    `}
`;

export default EditBtn;
