import { useSelector } from "react-redux";
import styled from "styled-components";
import CreateProjectLink from "./CreateProjectLink";
import ProjectCard from "./ProjectCard";

const ProjectContainer = () => {
  const { author, member } = useSelector((state) => state.projects);

  return (
    <Wrapper>
      <Header>
        <Title>Projects (Owned)</Title>
        <CreateProjectLink />
      </Header>
      {author.map((project) => {
        return <ProjectCard key={project._id} project={project} />;
      })}
      <Header>
        <Title>Projects (Member)</Title>
      </Header>
      {member.map((project) => {
        return <ProjectCard key={project._id} project={project} />;
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
