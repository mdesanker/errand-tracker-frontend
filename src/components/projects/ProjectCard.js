import { useSelector } from "react-redux";
import styled from "styled-components";
import ProjectEditLink from "./ProjectEditLink";
import ProjectRemoveBtn from "./ProjectRemoveBtn";

const ProjectCard = ({ project }) => {
  const { _id, title, author, members } = project;

  const memberString =
    members && members.map((member) => member.username).join(", ");

  const { user } = useSelector((state) => state.user);

  const isAuthor = author === user._id;

  return (
    <Card>
      <Title>{title}</Title>
      <MemberList>{memberString && `[Shared: ${memberString}]`}</MemberList>
      {isAuthor && <ProjectEditLink id={_id} />}
      {!isAuthor && <ProjectRemoveBtn id={_id} />}
    </Card>
  );
};

const Card = styled.div`
  flex-grow: 1;
  min-height: 40px;
  padding: 8px;
  margin: 0.25rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: default;

  &:hover {
    background-color: #e5e5e5;
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.light};
  }
`;

const Title = styled.div`
  font-size: 1rem;
  text-transform: uppercase;
  color: black;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const MemberList = styled.p`
  color: gray;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding: 0 8px;
  flex-grow: 1;

  @media only screen and (max-width: 650px) {
    display: none;
  }
`;

export default ProjectCard;
