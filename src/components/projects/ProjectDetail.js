import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import {
  deleteProject,
  getProject,
  updateProject,
} from "../../store/slices/projectSlice";
import ExitBtn from "../elements/ExitBtn";
import FormBtn from "../elements/FormBtn";

const ProjectDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    members: [],
  });

  const { title, description, members } = formData;

  const formChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
    dispatch(updateProject({ id, title, description }));
  };

  const deleteProjectHandler = () => {
    dispatch(deleteProject({ id }));
    navigate("/projects");
  };

  useEffect(() => {
    dispatch(getProject({ id }));
  }, []);

  const { project } = useSelector((state) => state.projects);

  useEffect(() => {
    if (project) {
      setFormData({ ...project });
    }
  }, [project]);

  // console.log(project);

  return (
    <Wrapper>
      <ExitBtn to="/projects" />
      <Form onSubmit={formSubmitHandler}>
        <Title
          type="text"
          name="title"
          id="title"
          placeholder="Title (required)"
          value={title}
          onChange={formChangeHandler}
        />
        <Description
          name="description"
          id="description"
          cols="30"
          rows="3"
          placeholder="Description"
          value={description}
          onChange={formChangeHandler}
        ></Description>
        <BtnGroup>
          <FormBtn type="submit" content="Update" />
          <FormBtn
            type="button"
            content="Delete"
            onClick={deleteProjectHandler}
            red
          />
        </BtnGroup>
      </Form>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  width: 100%;
  height: 100vh;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Title = styled.input`
  width: 100%;
  font-size: 1rem;
  padding: 5px;
  border: none;
  border-bottom: 1px solid gray;
`;

const Description = styled.textarea`
  width: 100%;
  font-size: 1rem;
  font-family: inherit;
  padding: 5px;
`;

const BtnGroup = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin-top: 50px;
`;

export default ProjectDetail;
