import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { css } from "styled-components";
import { toggleErrandComplete } from "../../store/slices/errandSlice";
import ErrandDeleteBtn from "./ErrandDeleteBtn";
import { DateTime } from "luxon";

const ErrandCard = ({ errand }) => {
  const dispatch = useDispatch();

  const { edit } = useSelector((state) => state.ui);

  const { title: titleState } = useSelector((state) => state.projects.project);

  const { _id, title, isComplete, dueDate, priority, project } = errand;

  const formatDate =
    dueDate && DateTime.fromISO(dueDate).plus({ days: 1 }).toFormat("LLL dd");

  const errandClickHandler = () => {
    dispatch(toggleErrandComplete({ id: _id }));
  };

  return (
    <Card priority={priority}>
      <CardGroup onClick={errandClickHandler}>
        <Checkbox isComplete={isComplete}>
          <i className="fas fa-check" />
        </Checkbox>
        <Title isComplete={isComplete}>{title}</Title>
        <ProjectText isComplete={isComplete}>
          {project && !titleState && `[${project.title}]`}
        </ProjectText>
      </CardGroup>
      <DateGroup onClick={errandClickHandler}>
        <ErrandText isComplete={isComplete}>
          {formatDate && !edit && formatDate}
        </ErrandText>
      </DateGroup>
      <ErrandDeleteBtn id={_id} />
    </Card>
  );
};

const Card = styled.div`
  flex-grow: 1;
  min-height: 40px;
  font-size: 1rem;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: ${({ theme }) => theme.radii.small};
  border-left: 5px solid transparent;
  cursor: pointer;

  &:active {
    background-color: ${({ theme }) => theme.colors.light};
  }

  ${({ priority }) => {
    if (priority === "Low") {
      return css`
        border-left: 5px solid ${({ theme }) => theme.colors.lowPriority};
      `;
    }
    if (priority === "Medium") {
      return css`
        border-left: 5px solid ${({ theme }) => theme.colors.mediumPriority};
      `;
    }
    if (priority === "High") {
      return css`
        border-left: 5px solid ${({ theme }) => theme.colors.highPriority};
      `;
    }
  }}
`;

const CardGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px;
  flex-grow: 1;
`;

const DateGroup = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 16px 8px 8px;
`;

const Checkbox = styled.div`
  min-height: 30px;
  min-width: 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: white;
  border: 2px solid ${({ theme }) => theme.colors.medium};
  cursor: pointer;
  background-color: #fff;

  ${({ isComplete }) =>
    isComplete &&
    css`
      color: white;
      background-color: lightgray;
      border: 2px solid lightgray;
    `}
`;

const Title = styled.p`
  overflow: hidden;

  ${({ isComplete }) =>
    isComplete &&
    css`
      color: lightgray;
      text-decoration: line-through;
    `}
`;

const ErrandText = styled.p`
  color: gray;
  overflow: hidden;
  padding-right: 8px;

  ${({ isComplete }) =>
    isComplete &&
    css`
      color: lightgray;
      text-decoration: line-through;
    `}
`;

const ProjectText = styled.p`
  color: gray;
  overflow: hidden;
  padding-right: 8px;

  ${({ isComplete }) =>
    isComplete &&
    css`
      color: lightgray;
      text-decoration: line-through;
    `}

  @media only screen and (max-width: 650px) {
    display: none;
  }
`;

export default ErrandCard;
