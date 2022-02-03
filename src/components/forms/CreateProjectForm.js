import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import styled, { css } from "styled-components";
import { createProject } from "../../store/slices/projectSlice";
import ExitBtn from "../elements/ExitBtn";
import Card from "../elements/Card";
import Button from "../elements/Button";
import AlertView from "../alerts/AlertView";
import FormWrapper from "../elements/FormWrapper";

const CreateProjectForm = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    title: "",
    members: [],
  });

  const { title, members } = formData;

  const formChangeHandler = (e) => {
    const { name, value } = e.target;

    setFormData((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(createProject(formData));
    setFormData({
      title: "",
      members: [],
    });
  };

  const { friends } = useSelector((state) => state.user.user);

  const memberSelectHandler = (e) => {
    const { id } = e.target;
    let memberList;
    if (members.includes(id)) {
      memberList = members.filter((member) => member !== id);
    } else {
      memberList = members.concat(id);
    }
    setFormData((prevState) => {
      return { ...prevState, members: memberList };
    });
  };

  const alerts = useSelector((state) => state.alerts);

  return (
    <FormWrapper>
      <AlertView alerts={alerts} />
      <Card>
        <Form onSubmit={formSubmitHandler}>
          <FormHeader>Create new project</FormHeader>
          <ExitBtn to="/projects" />
          <Title
            type="text"
            name="title"
            id="title"
            placeholder="Project Title (required)"
            value={title}
            onChange={formChangeHandler}
          />
          <SelectLabel>Share your project with friends:</SelectLabel>
          <MembersSelect>
            {friends &&
              friends.map((friend) => {
                return (
                  <MemberItem
                    type="button"
                    id={friend._id}
                    key={friend._id}
                    onClick={memberSelectHandler}
                    selected={members.includes(friend._id)}
                  >
                    {friend.username}
                  </MemberItem>
                );
              })}
          </MembersSelect>
          <Button type="submit" text="Create project" />
        </Form>
      </Card>
    </FormWrapper>
  );
};

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

const Title = styled.input`
  font-size: 1rem;
  padding: 8px;
  border: 1px solid lightgray;
  background-color: #f5f5f5;
  border-radius: ${({ theme }) => theme.radii.small};
`;

const SelectLabel = styled.p`
  padding-top: 10px;
`;

const MembersSelect = styled.div`
  height: 72px;
  display: flex;
  flex-direction: column;
  overflow: auto;
  border: 1px solid lightgray;
  border-radius: ${({ theme }) => theme.radii.small};
`;

const MemberItem = styled.button`
  font-size: 1rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 5px 0;

  &:hover {
    background-color: #efefef;
  }

  ${({ selected }) =>
    selected &&
    css`
      background-color: ${({ theme }) => theme.colors.verylight};

      &:hover {
        background-color: ${({ theme }) => theme.colors.verylight};
      }
    `}
`;

export default CreateProjectForm;
