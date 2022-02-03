import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { createErrand } from "../../store/slices/errandSlice";
import ExitBtn from "../elements/ExitBtn";
import Card from "../elements/Card";
import Button from "../elements/Button";
import AlertView from "../alerts/AlertView";

const CreateErrandForm = () => {
  const dispatch = useDispatch();

  const {
    project: currentProject,
    author,
    member,
  } = useSelector((state) => state.projects);

  const [formData, setFormData] = useState({
    title: "",
    dueDate: "",
    priority: "",
    project: currentProject._id.length > 10 ? currentProject._id : "",
  });

  const { title, dueDate, priority, project } = formData;

  const formChangeHandler = (e) => {
    const { name, value } = e.target;

    setFormData((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(createErrand(formData));
    setFormData((prevState) => {
      return {
        ...prevState,
        title: "",
        description: "",
        dueDate: "",
        priority: "",
      };
    });
  };

  const alerts = useSelector((state) => state.alerts);

  return (
    <FormWrapper>
      <AlertView alerts={alerts} />
      <Card>
        <Form onSubmit={formSubmitHandler}>
          <FormHeader>Create new errand</FormHeader>
          <ExitBtn to="/dashboard" />
          <Title
            type="text"
            name="title"
            id="title"
            placeholder="Errand name (required)"
            value={title}
            onChange={formChangeHandler}
          />
          <ProjectSelect
            name="project"
            id="project"
            onChange={formChangeHandler}
            value={project}
          >
            <option value="">No project</option>
            {author &&
              author.map((project) => {
                return (
                  <option key={project._id} value={project._id}>
                    {project.title}
                  </option>
                );
              })}
            {member &&
              member.map((project) => {
                return (
                  <option key={project._id} value={project._id}>
                    {project.title}
                  </option>
                );
              })}
          </ProjectSelect>
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
          <Button type="submit" text="Create errand" />
        </Form>
      </Card>
    </FormWrapper>
  );
};

const FormWrapper = styled.main`
  padding-top: 0;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.faint};
`;

const Form = styled.form`
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const FormHeader = styled.h1`
  font-size: 1.5rem;
  padding-bottom: 8px;
  border-bottom: 1px solid lightgray;
  margin-bottom: 10px;
`;

const AlertContainer = styled.div`
  height: 20px;
  line-height: 18px;
  width: 100%;
  align-items: center;
  // border: 1px solid green;
  overflow: hidden;
`;

const Title = styled.input`
  font-size: 1rem;
  padding: 8px;
  border: none;
  border: 1px solid lightgray;
  background-color: #f5f5f5;
  border-radius: ${({ theme }) => theme.radii.small};
`;

const ProjectSelect = styled.select`
  font-size: 1rem;
  padding: 8px;
  margin-bottom: 15px;
  color: gray;
  border: 1px solid lightgray;
  background-color: #f5f5f5;
  border-radius: ${({ theme }) => theme.radii.small};
`;

const FormGroup = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const Date = styled.input`
  font-size: 1rem;
  padding: 8px;
  border: 1px solid lightgray;
  border-radius: ${({ theme }) => theme.radii.small};
`;

const PrioritySelect = styled.select`
  font-size: 1rem;
  padding: 8px;
  border: 1px solid lightgray;
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.small};
`;

export default CreateErrandForm;
