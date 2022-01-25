import styled from "styled-components";

const ErrandCard = ({ errand }) => {
  console.log(errand);

  const { title, description, isComplete, priority } = errand;

  return (
    <Card>
      <CardGroup>
        <Checkbox type="checkbox" name="check" id="check" />
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
`;

const CardGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

const Checkbox = styled.input`
  height: 20px;
  width: 20px;
`;

export default ErrandCard;
