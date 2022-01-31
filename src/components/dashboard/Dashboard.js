import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "../../store/slices/userSlice";
import Greeting from "./Greeting";
import CreateErrandLink from "./CreateErrandLink";
import { getUserErrands } from "../../store/slices/errandSlice";
import Errands from "./Errands";
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
    // console.log("LOADING USER");
    dispatch(loadUser());
  }, []);

  const { user } = useSelector((state) => state.user);

  const { project } = useSelector((state) => state.projects);

  // Initial load of user errands and projects
  useEffect(() => {
    if (user && !project) {
      dispatch(getUserErrands({ id: user._id }));
      dispatch(getAuthorProjects({ id: user._id }));
      dispatch(getMemberProjects({ id: user._id }));
    }
  }, [user]);

  return (
    <Fragment>
      <Navbar />
      <main>
        <Container>
          <Greeting />
          <Errands />
        </Container>
        <CreateErrandLink />
      </main>
    </Fragment>
  );
};

export default Dashboard;
