import { useState } from "react";
import styled from "styled-components";
import OvalBtn from "../elements/OvalBtn";

const CreateErrandForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    dueDate: "",
    priority: "",
  });

  const { title, description, dueDate, priority } = formData;

  const formChangeHandler = (e) => {
    const { name, value } = e.target;

    setFormData((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Wrapper>
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
        <FormGroup>
          <label htmlFor="dueDate">Due date:</label>
          <Date
            type="date"
            name="dueDate"
            id="dueDate"
            value={dueDate}
            onChange={formChangeHandler}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="priority">Priority:</label>
          <PrioritySelect
            name="priority"
            id="priority"
            value={priority}
            onChange={formChangeHandler}
          >
            <option value="None">None</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </PrioritySelect>
        </FormGroup>
        <OvalBtn text="Create errand" />
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

const FormGroup = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const Date = styled.input`
  font-size: 1rem;
  padding: 5px;
`;

const PrioritySelect = styled.select`
  font-size: 1rem;
  padding: 5px;
`;

export default CreateErrandForm;
