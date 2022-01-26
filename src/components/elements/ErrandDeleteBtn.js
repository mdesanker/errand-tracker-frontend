import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { deleteErrand } from "../../store/slices/errandSlice";

const ErrandDeleteBtn = ({ id }) => {
  const dispatch = useDispatch();
  const { edit } = useSelector((state) => state.ui);

  // console.log(id);

  const errandDeleteHandler = () => {
    dispatch(deleteErrand({ id }));
  };

  return (
    <Wrapper /*mode={edit}*/ onClick={errandDeleteHandler}>Delete</Wrapper>
  );
};

const Wrapper = styled.button`
  // display: ${({ mode }) => (mode === true ? "block" : "none")};

  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  padding: 5px;
  color: rgba(255, 0, 0, 0.3);
  border: 2px solid rgba(255, 0, 0, 0.3);
  background-color: transparent;
  border-radius: ${({ theme }) => theme.radii.small};
  margin-left: 5px;
  cursor: pointer;

  &:hover {
    color: rgba(255, 0, 0, 0.6);
    border: 2px solid rgba(255, 0, 0, 0.6);
  }
`;

export default ErrandDeleteBtn;
