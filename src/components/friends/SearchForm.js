import styled from "styled-components";
import { useState } from "react";

const SearchForm = () => {
  const [formData, setFormData] = useState({
    search: "",
  });

  const { search } = formData;

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
    <Wrapper onSubmit={formSubmitHandler}>
      <Search
        type="text"
        id="search"
        name="search"
        value={search}
        placeholder="Find new friends..."
        onChange={formChangeHandler}
      />
    </Wrapper>
  );
};

const Wrapper = styled.form`
  width: 100%;
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
