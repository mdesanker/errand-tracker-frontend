import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import styled from "styled-components";

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
      <Header>Projects (Owner)</Header>
      {ownerProjects.map((project) => {
        return <p key={project._id}>{project.title}</p>;
      })}
      <Header>Projects (Member)</Header>
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

const Header = styled.h2`
  width: 80%;
  color: gray;
  text-transform: uppercase;
  font-weight: normal;
  font-size: 1.1rem;
  border-bottom: 1px solid gray;
`;

export default ProjectContainer;
