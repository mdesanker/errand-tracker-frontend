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
import FormBtn from "../elements/FormBtn";

const ProjectDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getProject({ id }));
  }, []);

  const { project } = useSelector((state) => state.projects);

  const { friends } = useSelector((state) => state.user.user);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    members: project ? project.members : [],
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
    dispatch(updateProject({ id, title, description, members }));
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
        <SelectLabel>Select friends to share your project with</SelectLabel>
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

const SelectLabel = styled.p``;

const MembersSelect = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  // align-items: center;
  overflow: auto;

  border: 1px solid gray;
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

export default ProjectDetail;
