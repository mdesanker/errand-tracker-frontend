import { Fragment } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import EditBtn from "./EditBtn";
import ProjectSelector from "./ProjectSelector";
import ErrandCard from "./ErrandCard";
import { useDispatch } from "react-redux";
import { deleteErrand } from "../../store/slices/errandSlice";

const Errands = () => {
  const dispatch = useDispatch();

  const { errands } = useSelector((state) => state.errands);

  const deleteCompleteHandler = () => {
    for (let errand of errands) {
      if (errand.isComplete === true) {
        dispatch(deleteErrand({ id: errand._id }));
      }
    }
  };

  return (
    <Fragment>
      <Header>
        <ProjectSelector />
        <EditBtn />
        <button onClick={deleteCompleteHandler}>Delete Complete</button>
      </Header>
      <ErrandContainer>
        {errands &&
          errands.map((errand) => {
            return <ErrandCard key={errand._id} errand={errand} />;
          })}
      </ErrandContainer>
    </Fragment>
  );
};

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const ErrandContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 50px;
`;

export default Errands;
