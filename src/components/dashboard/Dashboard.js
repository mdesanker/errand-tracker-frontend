import styled from "styled-components";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadUser } from "../../store/slices/userSlice";
import { useSelector } from "react-redux";
import Greeting from "./Greeting";
import CreateErrandLink from "../elements/CreateErrandLink";

const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, []);

  const { user } = useSelector((state) => state.user);

  // console.log(user);

  return (
    <Wrapper>
      <Container>
        <Greeting />
        <CreateErrandLink />
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

export default Dashboard;
