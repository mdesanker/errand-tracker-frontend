import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import styled from "styled-components";
import {
  getProjectErrands,
  getUserErrands,
} from "../../store/slices/errandSlice";
import CreateProjectLink from "../elements/CreateProjectLink";
import ProjectSelector from "../elements/ProjectSelector";
import ErrandCard from "./ErrandCard";

const ErrandContainer = () => {
  const dispatch = useDispatch();

  const { errands } = useSelector((state) => state.errands);

  const { project } = useSelector((state) => state.projects);

  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    if (project) {
      dispatch(getProjectErrands({ id: project._id }));
    } else {
      dispatch(getUserErrands({ id: user._id }));
    }
  }, [project]);

  return (
    <Wrapper>
      <ProjectHeader>
        <ProjectSelector />
        <CreateProjectLink />
      </ProjectHeader>
      {errands &&
        errands.map((errand) => {
          return <ErrandCard key={errand._id} errand={errand} />;
        })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;
`;

const ProjectHeader = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default ErrandContainer;
