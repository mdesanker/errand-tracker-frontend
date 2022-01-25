import { Link } from "react-router-dom";
import styled from "styled-components";

const CreateProjectLink = ({ onClick }) => {
  return <Wrapper to="/createproject">+ Project</Wrapper>;
};

const Wrapper = styled(Link)`
  color: gray;
  font-size: 1rem;
  text-decoration: none;
  padding: 5px 15px;
  border: 2px solid gray;
  border-radius: ${({ theme }) => theme.radii.medium};

  &:hover {
    color: black;
    border: 2px solid black;
  }
`;

export default CreateProjectLink;
