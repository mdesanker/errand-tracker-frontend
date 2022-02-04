import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getProjectErrands } from "../../store/slices/errandSlice";
import { getProject } from "../../store/slices/projectSlice";
import ProjectEditLink from "./ProjectEditLink";
import ProjectRemoveBtn from "./ProjectRemoveBtn";

const ProjectCard = ({ project }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { _id, title, author, members } = project;

  const memberString =
    members && members.map((member) => member.username).join(", ");

  const { user } = useSelector((state) => state.user);

  const isAuthor = author._id === user._id;

  const projectClickHandler = () => {
    dispatch(getProjectErrands({ id: _id }));
    navigate("/dashboard");
  };

  return (
    <Card>
      <Section onClick={projectClickHandler}>
        <Title>{title}</Title>
        {author && !isAuthor && <InfoText>Author: {author.username}</InfoText>}
        {memberString && <InfoText>Members: {memberString}</InfoText>}
      </Section>
      {isAuthor && <ProjectEditLink id={_id} />}
      {!isAuthor && <ProjectRemoveBtn id={_id} />}
    </Card>
  );
};

const Card = styled.div`
  flex-grow: 1;
  min-height: 40px;
  padding-bottom: 8px;
  margin: 0.25rem 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  cursor: default;
  border-bottom: 1px solid lightgray;
`;

const Section = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
`;

const Title = styled.div`
  font-size: 1rem;
  font-weight: bold;
  padding: 8px;
  color: black;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  flex-grow: 1;
  display: flex;
  align-items: center;
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
