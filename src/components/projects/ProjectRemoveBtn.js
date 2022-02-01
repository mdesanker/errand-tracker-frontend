import styled from "styled-components";
import { useDispatch } from "react-redux";
import { removeSelfFromProject } from "../../store/slices/projectSlice";

const ProjectRemoveBtn = ({ id }) => {
  const dispatch = useDispatch();

  const removeProjectHandler = () => {
    dispatch(removeSelfFromProject({ id }));
  };

  return <Button onClick={removeProjectHandler}>Remove</Button>;
};

const Button = styled.button`
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  padding: 5px;
  color: rgba(255, 0, 0, 0.3);
  border: 2px solid rgba(255, 0, 0, 0.3);
  background-color: transparent;
  border-radius: ${({ theme }) => theme.radii.small};
  cursor: pointer;

  &:hover {
    color: rgba(255, 0, 0, 0.6);
    border: 2px solid rgba(255, 0, 0, 0.6);
  }
`;

export default ProjectRemoveBtn;
