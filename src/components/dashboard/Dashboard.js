import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "../../store/slices/userSlice";
import Greeting from "./Greeting";
import CreateErrandLink from "./CreateErrandLink";
import { getUserErrands } from "../../store/slices/errandSlice";
import ErrandContainer from "../errands/ErrandContainer";
import {
  getAuthorProjects,
  getMemberProjects,
} from "../../store/slices/projectSlice";
import Navbar from "../navbar/Navbar";
import Container from "../elements/Container";

const Dashboard = () => {
  const dispatch = useDispatch();

  // Fetch user on load
  useEffect(() => {
    dispatch(loadUser());
  }, []);

  const { user } = useSelector((state) => state.user);

  // Load user errands and projects
  useEffect(() => {
    if (user) {
      dispatch(getUserErrands({ id: user._id }));
      dispatch(getAuthorProjects({ id: user._id }));
      dispatch(getMemberProjects({ id: user._id }));
    }
  }, [user]);

  return (
    <main>
      <Navbar />
      <Container>
        <Greeting />
        <ErrandContainer />
      </Container>
      <CreateErrandLink />
    </main>
  );
};

export default Dashboard;
