import { useSelector } from "react-redux";
import styled from "styled-components";

const ProjectSelector = () => {
  const { projects } = useSelector((state) => state.projects);

  console.log(projects);

  return (
    <Wrapper>
      <option value="all">Your errands</option>
      {projects &&
        projects.map((project) => {
          return (
            <option key={project._id} value={project._id}>
              {project.title}
            </option>
          );
        })}
    </Wrapper>
  );
};

const Wrapper = styled.select`
  padding: 5px;
  font-size: 1.1rem;
  color: gray;
  text-transform: uppercase;
  background-color: transparent;
  border: none;
  cursor: pointer;
  min-width: 50%;
`;

export default ProjectSelector;
