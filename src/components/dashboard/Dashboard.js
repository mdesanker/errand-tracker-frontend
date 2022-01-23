import styled from "styled-components";
import Header from "../header/Header";

const Dashboard = () => {
  return (
    <Wrapper>
      <Header />
      <Container>
        <h1>Dashboard</h1>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  padding-top: ${({ theme }) => theme.heights.header};
  min-height: 100vh;
`;

const Container = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.widths.content};
  margin: 0 auto;
`;

export default Dashboard;
