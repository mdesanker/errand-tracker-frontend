import styled from "styled-components";
import { css } from "styled-components";

const ErrandCard = ({ errand }) => {
  console.log(errand);

  const { title, description, isComplete, priority } = errand;

  return (
    <Card>
      <CardGroup>
        <Checkbox isComplete={isComplete}>
          <i className="fas fa-check" />
        </Checkbox>
        <p>{title}</p>
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
  border-radius: ${({ theme }) => theme.radii.medium};
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

export default ErrandCard;
