import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import styled, { css } from "styled-components";
import { toggleEdit } from "../../store/slices/uiSlice";

const EditBtn = () => {
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(toggleEdit());
  };

  const { edit } = useSelector((state) => state.ui);

  return (
    <Wrapper active={edit} onClick={clickHandler}>
      <i className="far fa-edit" />
    </Wrapper>
  );
};

const Wrapper = styled.button`
  font-size: 25px;
  padding: 5px;
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: gray;

  // &:hover {
  //   color: black;
  // }

  ${({ active }) =>
    active &&
    css`
      color: blue;
    `}
`;

export default EditBtn;
