import styled from "styled-components";
import Alert from "./Alert";

const AlertView = ({ alerts }) => {
  return (
    <Wrapper>
      {alerts.length > 0 &&
        alerts.map((alert) => {
          return <Alert key={alert.id} msg={alert.msg} type={alert.type} />;
        })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  position: fixed;
  top: 2rem;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default AlertView;
