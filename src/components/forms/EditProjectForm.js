import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled, { css } from "styled-components";
import {
  deleteProject,
  getProject,
  updateProject,
} from "../../store/slices/projectSlice";
import ExitBtn from "../elements/ExitBtn";
import Card from "../elements/Card";
import Button from "../elements/Button";
import { getUserErrands } from "../../store/slices/errandSlice";

const EditProjectForm = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getProject({ id }));
  }, []);

  const { project } = useSelector((state) => state.projects);

  const { _id: userId, friends } = useSelector((state) => state.user.user);

  const [formData, setFormData] = useState({
    title: "",
    members: [],
  });

  const { title, members } = formData;

  useEffect(() => {
    if (project && project._id !== "all" && project._id !== "personal") {
      setFormData({
        title: project.title,
        members: project.members.map((member) => member._id),
      });
    }
  }, [project]);

  const formChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
    dispatch(updateProject({ id, ...formData }));
    dispatch(getUserErrands({ id: userId }));
  };

  const deleteProjectHandler = () => {
    dispatch(deleteProject({ id }));
    navigate("/projects");
  };

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

  // console.log(project);

  return (
    <FormWrapper>
      <Card>
        <Form onSubmit={formSubmitHandler}>
          <FormHeader>Edit project</FormHeader>
          <ExitBtn to="/projects" />
          <Title
            type="text"
            name="title"
            id="title"
            onChange={formChangeHandler}
            placeholder="Title (required)"
            value={title}
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
                    selected={members && members.includes(friend._id)}
                  >
                    {friend.username}
                  </MemberItem>
                );
              })}
          </MembersSelect>
          <Button type="submit" text="Edit project" />
          <Button
            type="button"
            text="Delete project"
            onClick={deleteProjectHandler}
            secondary
          />
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
      background-color: ${({ theme }) => theme.colors.light};
    `}
`;

const BtnGroup = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin-top: 50px;
`;

export default EditProjectForm;
