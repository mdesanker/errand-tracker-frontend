import styled from "styled-components";
import Navbar from "../navbar/Navbar";
import Container from "../elements/Container";
import { useSelector } from "react-redux";
import ProjectCard from "./ProjectCard";
import CreateProjectLink from "./CreateProjectLink";
import { Fragment } from "react";

const ProjectView = () => {
  const { author, member } = useSelector((state) => state.projects);

  const { username } = useSelector((state) => state.user.user);

  return (
    <Fragment>
      <Navbar />
      <main>
        <Container>
          <Section>
            <Header>
              <Title>{username && username}'s Projects</Title>
              <CreateProjectLink />
            </Header>
            {author.length > 0 ? (
              author.map((project) => {
                return <ProjectCard key={project._id} project={project} />;
              })
            ) : (
              <EmptyMsg>No current projects</EmptyMsg>
            )}
          </Section>
          <Section>
            <Header>
              <Title>Member projects</Title>
            </Header>
            {member.length > 0 ? (
              member.map((project) => {
                return <ProjectCard key={project._id} project={project} />;
              })
            ) : (
              <EmptyMsg>No current projects</EmptyMsg>
            )}
          </Section>
        </Container>
      </main>
    </Fragment>
  );
};

const Section = styled.div`
  margin: 10px 0 30px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 45px;
  border-bottom: 1px solid gray;
  padding-bottom: 5px;
`;

const Title = styled.h2`
  color: gray;
  text-transform: uppercase;
  font-weight: normal;
  font-size: 1rem;
`;

const EmptyMsg = styled.p`
  padding: 5px;
`;

export default ProjectView;
