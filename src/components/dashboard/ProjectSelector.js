import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { clearProject, getProject } from "../../store/slices/projectSlice";

const ProjectSelector = () => {
  const dispatch = useDispatch();
  const { author, member } = useSelector((state) => state.projects);

  const projectSelectHandler = (e) => {
    const { value } = e.target;
    if (value === "none") {
      dispatch(clearProject());
    } else {
      dispatch(getProject({ id: value }));
    }
  };

  return (
    <Select onChange={projectSelectHandler}>
      <option value="none">Personal errands</option>
      {author &&
        author.map((project) => {
          return (
            <option key={project._id} value={project._id}>
              {project.title}
            </option>
          );
        })}
      {member &&
        member.map((project) => {
          return (
            <option key={project._id} value={project._id}>
              {project.title}
            </option>
          );
        })}
    </Select>
  );
};

const Select = styled.select`
  padding: 5px 10px;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.dark};
  text-transform: uppercase;
  background-color: transparent;
  border: none;
  cursor: pointer;
  max-width: 60%;
  border-bottom: 1px solid gray;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  & > option {
    color: ${({ theme }) => theme.colors.dark};
  }
`;

export default ProjectSelector;
