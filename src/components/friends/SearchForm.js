import styled from "styled-components";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getAllUsers } from "../../store/slices/userSlice";
import FriendCard from "./FriendCard";

const SearchForm = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    search: "",
  });

  const { search } = formData;

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  const { users } = useSelector((state) => state.user);

  const loggedIn = useSelector((state) => state.user.user);

  const formChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    // console.log(formData);
  };

  return (
    <Form onSubmit={formSubmitHandler}>
      <Search
        type="text"
        id="search"
        name="search"
        value={search}
        placeholder="Search users"
        autoComplete="off"
        onChange={formChangeHandler}
      />
      {users &&
        users
          .filter((user) => user._id !== loggedIn._id)
          .filter((user) =>
            user.username.toLowerCase().includes(search.toLowerCase())
          )
          .map((user) => {
            return <FriendCard key={user._id} friend={user} />;
          })}
    </Form>
  );
};

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50px;
`;

const Search = styled.input`
  width: 100%;
  font-size: 1rem;
  padding: 5px 15px;
  height: 34px;
  border: 1px solid gray;
  border-bottom: 1px solid gray;
  border-radius: 17px;
  margin: 10px 0;
`;

export default SearchForm;
