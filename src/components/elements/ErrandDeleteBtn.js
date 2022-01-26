import { useDispatch } from "react-redux";
import styled from "styled-components";
import { deleteErrand } from "../../store/slices/errandSlice";

const ErrandDeleteBtn = ({ id }) => {
  const dispatch = useDispatch();
  // console.log(id);

  const errandDeleteHandler = () => {
    dispatch(deleteErrand({ id }));
  };

  return <Wrapper onClick={errandDeleteHandler}>Delete</Wrapper>;
};

const Wrapper = styled.button`
  // display: none;
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
