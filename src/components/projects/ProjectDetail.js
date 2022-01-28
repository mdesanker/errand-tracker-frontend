import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getProject, updateProject } from "../../store/slices/projectSlice";
import ExitBtn from "../elements/ExitBtn";

const ProjectDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const { title, description } = formData;

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
  gap: 10px;
`;

const Title = styled.input`
  font-size: 1rem;
  padding: 5px;
  border: none;
  border-bottom: 1px solid gray;
`;

const Description = styled.textarea`
  font-size: 1rem;
  font-family: inherit;
  padding: 5px;
`;

export default ProjectDetail;
