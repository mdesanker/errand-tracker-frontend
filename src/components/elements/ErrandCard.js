import styled from "styled-components";
import { css } from "styled-components";

const ErrandCard = ({ errand }) => {
  console.log(errand);

  const { title, description, isComplete, priority } = errand;

  return (
    <Card priority={priority}>
      <CardGroup>
        <Checkbox isComplete={isComplete}>
          <i className="fas fa-check" />
        </Checkbox>
        <Title isComplete={isComplete}>{title}</Title>
      </CardGroup>
    </Card>
  );
};

const Card = styled.div`
  width: 80%;
  height: 70px;
  margin: 0 auto;
  padding: 16px;
  font-size: 1rem;
  background-color: white;
  margin: 0.5rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: ${({ theme }) => theme.radii.small};
  border-left: 5px solid transparent;

  ${({ priority }) => {
    if (priority === "None") {
      return css`
        border-left: 5px solid ${({ theme }) => theme.colors.noPriority};
      `;
    }
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
  height: 30px;
  width: 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: white;
  border: 2px solid magenta;
  cursor: pointer;

  ${({ isComplete }) =>
    isComplete &&
    css`
      color: white;
      background-color: lightgray;
      border: 2px solid lightgray;
    `}
`;

const Title = styled.p`
  ${({ isComplete }) =>
    isComplete &&
    css`
      color: lightgray;
      text-decoration: line-through;
    `}
`;

export default ErrandCard;
