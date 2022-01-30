import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const ProjectEditLink = ({ id }) => {
  const url = `/project/${id}`;

  return <Wrapper to={url}>Edit</Wrapper>;
};

const Wrapper = styled(Link)`
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  padding: 5px 10px;
  color: gray;
  border: 2px solid gray;
  background-color: transparent;
  border-radius: ${({ theme }) => theme.radii.small};
  margin-left: 5px;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.medium};
    border: 2px solid ${({ theme }) => theme.colors.medium};
  }
`;

export default ProjectEditLink;
