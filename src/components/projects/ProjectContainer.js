import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import styled from "styled-components";
import CreateProjectLink from "../elements/CreateProjectLink";
import ProjectCard from "./ProjectCard";

const ProjectContainer = () => {
  const dispatch = useDispatch();

  const { projects } = useSelector((state) => state.projects);

  const { user } = useSelector((state) => state.user);

  console.log(projects);

  const ownerProjects = projects.filter(
    (project) => project.author === user._id
  );

  console.log(ownerProjects);

  return (
    <Wrapper>
      <Header>
        <Title>Projects (Owned)</Title>
        <CreateProjectLink />
      </Header>
      {ownerProjects.map((project) => {
        return <ProjectCard key={project._id} project={project} />;
      })}
      <Header>
        <Title>Projects (Member)</Title>
      </Header>
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

const Header = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid gray;
  padding-bottom: 5px;
`;

const Title = styled.h2`
  // width: 80%;
  color: gray;
  text-transform: uppercase;
  font-weight: normal;
  font-size: 1rem;
`;

export default ProjectContainer;
