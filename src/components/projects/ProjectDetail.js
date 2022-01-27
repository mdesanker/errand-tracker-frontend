import { useParams } from "react-router-dom";
import styled from "styled-components";

const ProjectDetail = () => {
  const { id } = useParams();

  console.log(id);

  return <Wrapper>Project detail</Wrapper>;
};

const Wrapper = styled.main`
  width: 100%;
  height: 100vh;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default ProjectDetail;
