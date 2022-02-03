import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  getPersonalErrands,
  getProjectErrands,
  getUserErrands,
} from "../../store/slices/errandSlice";

const ProjectSelector = () => {
  const dispatch = useDispatch();
  const { author, member } = useSelector((state) => state.projects);

  const { user } = useSelector((state) => state.user);
  const { project } = useSelector((state) => state.projects);

  // Load errands depending on selection
  const projectSelectHandler = (e) => {
    const { value } = e.target;
    if (user) {
      if (value === "all") {
        dispatch(getUserErrands({ id: user._id }));
      } else if (value === "personal") {
        dispatch(getPersonalErrands({ id: user._id }));
      } else {
        dispatch(getProjectErrands({ id: value }));
      }
    }
  };

  return (
    <Select
      value={project ? project._id : "all"}
      onChange={projectSelectHandler}
    >
      <option value="all">All errands</option>
      <option value="personal">Personal errands</option>
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
  max-width: 50%;
  border-bottom: 1px solid gray;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  & > option {
    color: ${({ theme }) => theme.colors.dark};
  }
`;

export default ProjectSelector;
