import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import styled, { css } from "styled-components";
import { createProject } from "../../store/slices/projectSlice";
import ExitBtn from "../elements/ExitBtn";
import OvalBtn from "../elements/OvalBtn";

const CreateProjectForm = () => {
  const dispatch = useDispatch();

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
    // dispatch(createProject(formData));
    // setFormData({
    //   title: "",
    //   description: "",
    // });
  };

  const { friends } = useSelector((state) => state.user.user);

  console.log(friends);

  const memberSelectHandler = (e) => {
    const { id } = e.target;
    let memberList;
    if (members.includes(id)) {
      memberList = members.filter((member) => member !== id);
    } else {
      memberList = members.concat(id);
    }
    console.log(memberList);
    setFormData((prevState) => {
      return { ...prevState, members: memberList };
    });
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

export default CreateProjectForm;
