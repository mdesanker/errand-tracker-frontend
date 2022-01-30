import styled from "styled-components";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadUser } from "../../store/slices/userSlice";
import { useSelector } from "react-redux";
import Greeting from "./Greeting";
import CreateErrandLink from "./CreateErrandLink";
import { getUserErrands } from "../../store/slices/errandSlice";
import ErrandContainer from "../errands/ErrandContainer";
import {
  getAuthorProjects,
  getMemberProjects,
} from "../../store/slices/projectSlice";
import Navbar from "../navbar/Navbar";

const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, []);

  const { user } = useSelector((state) => state.user);

  // console.log(user);

  useEffect(() => {
    if (user) {
      dispatch(getUserErrands({ id: user._id }));
      dispatch(getAuthorProjects({ id: user._id }));
      dispatch(getMemberProjects({ id: user._id }));
    }
  }, [user]);

  return (
    <Wrapper>
      <Navbar />
      <Container>
        <Greeting />
        <CreateErrandLink />
        <ErrandContainer />
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
