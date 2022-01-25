import { useSelector } from "react-redux";
import styled from "styled-components";
import ErrandCard from "./ErrandCard";

const ErrandContainer = () => {
  const { errands } = useSelector((state) => state.errands);

  return (
    <Wrapper>
      <ProjectTitle>All errands</ProjectTitle>
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

const ProjectTitle = styled.h2`
  width: 80%;
  font-weight: normal;
  text-transform: uppercase;
  color: gray;
  font-size: 1.2rem;
`;

export default ErrandContainer;
