import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { clearProject, getProject } from "../../store/slices/projectSlice";

const ProjectSelector = () => {
  const dispatch = useDispatch();
  const { projects } = useSelector((state) => state.projects);

  // console.log(projects);

  const projectSelectHandler = (e) => {
    const { value } = e.target;
    // console.log(value);
    if (value === "none") {
      dispatch(clearProject());
    } else {
      dispatch(getProject({ id: value }));
    }
  };

  return (
    <Wrapper onChange={projectSelectHandler}>
      <option value="none">Your errands</option>
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
