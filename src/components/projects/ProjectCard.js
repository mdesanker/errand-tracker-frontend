import styled from "styled-components";

const ProjectCard = ({ project }) => {
  const { _id, title, description, author, members } = project;

  return (
    <Container>
      <Card>{title}</Card>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  align-items: center;
`;

const Card = styled.div`
  flex-grow: 1;
  min-height: 40px;
  padding: 8px;
  font-size: 1rem;
  text-transform: uppercase;
  // color: ${({ theme }) => theme.colors.medium};
  color: black;
  margin: 0.25rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  &:hover {
    // color: ${({ theme }) => theme.colors.medium};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.light};
  }
`;

export default ProjectCard;
