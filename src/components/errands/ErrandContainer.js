import { useSelector } from "react-redux";
import styled from "styled-components";
import CreateProjectLink from "../elements/CreateProjectLink";
import ErrandCard from "./ErrandCard";

const ErrandContainer = () => {
  const { errands } = useSelector((state) => state.errands);

  return (
    <Wrapper>
      <ProjectHeader>
        <Title>All errands</Title>
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
`;

const ProjectHeader = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h2`
  font-weight: normal;
  text-transform: uppercase;
  color: gray;
  font-size: 1.2rem;
`;

export default ErrandContainer;
