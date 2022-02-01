import { useDispatch } from "react-redux";
import styled from "styled-components";
import { css } from "styled-components";
import { toggleErrandComplete } from "../../store/slices/errandSlice";
import ErrandDeleteBtn from "./ErrandDeleteBtn";
import { DateTime } from "luxon";

const ErrandCard = ({ errand }) => {
  const dispatch = useDispatch();

  // console.log(errand);

  const { _id, title, author, isComplete, dueDate, priority, project } = errand;

  // const formatDate = DateTime.fromISO(dueDate).toLocaleString(
  //   DateTime.DATE_MED
  // );

  const formatDate = dueDate && DateTime.fromISO(dueDate).toFormat("LLL dd");

  console.log(formatDate);

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
        <ErrandText isComplete={isComplete}>
          ({project && project.title})
        </ErrandText>
      </CardGroup>
      <CardGroup>
        <ErrandText isComplete={isComplete}>
          {formatDate && formatDate}
        </ErrandText>
      </CardGroup>
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
  // flex-grow: 1;
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

export default ErrandCard;
