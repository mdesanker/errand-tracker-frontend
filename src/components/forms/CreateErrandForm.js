import styled from "styled-components";

const CreateErrandForm = () => {
  return (
    <Wrapper>
      <Form>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Enter new errand"
        />
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="10"
          placeholder="Enter a description"
        ></textarea>
        <FormGroup>
          <label htmlFor="dueDate">Due date:</label>
          <input type="date" name="dueDate" id="dueDate" />
        </FormGroup>
        <FormGroup>
          <label htmlFor="priority">Priority:</label>
          <select name="priority" id="priority">
            <option value="None">None</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </FormGroup>
        <button>Create errand</button>
      </Form>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  width: 100%;
  height: 100vh;
  background-color: #fff;
`;

const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div``;

export default CreateErrandForm;
