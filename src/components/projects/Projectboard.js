import styled from "styled-components";
import Greeting from "../dashboard/Greeting";
import Navbar from "../navbar/Navbar";
import ProjectContainer from "../projects/ProjectContainer";

const Projectboard = () => {
  return (
    <Wrapper>
      <Navbar />
      <Container>
        <Greeting />
        <ProjectContainer />
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  // padding-top: ${({ theme }) => theme.heights.header};
  min-height: 100vh;
`;

const Container = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.widths.content};
  margin: 0 auto;
`;

export default Projectboard;
