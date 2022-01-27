import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import styled from "styled-components";
import {
  getProjectErrands,
  getUserErrands,
} from "../../store/slices/errandSlice";
import EditBtn from "../dashboard/EditBtn";
import ProjectSelector from "../dashboard/ProjectSelector";
import ErrandCard from "./ErrandCard";

const ErrandContainer = () => {
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
    <Wrapper>
      <ProjectHeader>
        <ProjectSelector />
        <EditBtn />
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
  padding-bottom: 100px;
`;

const ProjectHeader = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export default ErrandContainer;
