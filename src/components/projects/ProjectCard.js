import { useSelector } from "react-redux";
import styled from "styled-components";
import ProjectEditLink from "./ProjectEditLink";
import ProjectRemoveBtn from "./ProjectRemoveBtn";

const ProjectCard = ({ project }) => {
  const { _id, title, author, members } = project;

  const memberString =
    members && members.map((member) => member.username).join(", ");

  const { user } = useSelector((state) => state.user);

  const isAuthor = author._id === user._id;

  return (
    <Card>
      <Section>
        <Title>{title}</Title>
        {isAuthor && <ProjectEditLink id={_id} />}
        {!isAuthor && <ProjectRemoveBtn id={_id} />}
      </Section>
      {author && !isAuthor && <InfoText>Author: {author.username}</InfoText>}
      {memberString && <InfoText>Members: {memberString}</InfoText>}
    </Card>
  );
};

const Card = styled.div`
  flex-grow: 1;
  min-height: 40px;
  padding: 8px;
  margin: 0.25rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  cursor: default;
  border-bottom: 1px solid lightgray;
`;

const Section = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
  font-size: 1rem;
  font-weight: bold;
  color: black;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const InfoText = styled.p`
  width: 100%;
  color: gray;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding: 0 10px;
  flex-grow: 1;
`;

export default ProjectCard;
