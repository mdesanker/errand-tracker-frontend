import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { createProject } from "../../store/slices/projectSlice";
import ExitBtn from "../elements/ExitBtn";
import OvalBtn from "../elements/OvalBtn";

const CreateProjectForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
    dispatch(createProject(formData));
    setFormData({
      title: "",
      description: "",
    });
  };

  const exitHandler = () => {
    navigate("/projects");
  };

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

        <OvalBtn text="Create project" />
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

export default CreateProjectForm;
