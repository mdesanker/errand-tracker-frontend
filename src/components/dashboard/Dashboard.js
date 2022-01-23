import styled from "styled-components";
import Header from "../header/Header";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "../../store/slices/userSlice";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(loadUser());
  }, []);

  const { isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated]);

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
