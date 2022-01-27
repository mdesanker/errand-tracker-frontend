import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { css } from "styled-components";
import { timedAlert } from "../../store/slices/alertSlice";
import { toggleErrandComplete } from "../../store/slices/errandSlice";
import ErrandDeleteBtn from "../dashboard/ErrandDeleteBtn";

const ErrandCard = ({ errand }) => {
  const dispatch = useDispatch();

  const { edit } = useSelector((state) => state.ui);

  const { _id, title, description, isComplete, priority } = errand;

  const errandClickHandler = () => {
    dispatch(toggleErrandComplete({ id: _id }));
  };

  return (
    <Container>
      <Card draggable="true" priority={priority} onClick={errandClickHandler}>
        <CardGroup>
          <Checkbox isComplete={isComplete}>
            <i className="fas fa-check" />
          </Checkbox>
          <Title isComplete={isComplete}>{title}</Title>
        </CardGroup>
        <ErrandDeleteBtn id={_id} />
      </Card>
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
  background-color: white;
  margin: 0.25rem 0;
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
  justify-content: space-between;
  align-items: center;
  gap: 10px;
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

export default ErrandCard;
