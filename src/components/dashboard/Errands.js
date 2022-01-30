import { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import styled from "styled-components";
import {
  getProjectErrands,
  getUserErrands,
} from "../../store/slices/errandSlice";
import EditBtn from "./EditBtn";
import ProjectSelector from "./ProjectSelector";
import ErrandCard from "./ErrandCard";

const Errands = () => {
  const dispatch = useDispatch();

  const { project } = useSelector((state) => state.projects);

  const { user } = useSelector((state) => state.user);

  const { errands } = useSelector((state) => state.errands);

  useEffect(() => {
    if (project) {
      dispatch(getProjectErrands({ id: project._id }));
    } else if (user) {
      dispatch(getUserErrands({ id: user._id }));
    }
  }, [project, user]);

  return (
    <Fragment>
      <Header>
        <ProjectSelector />
        <EditBtn />
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
