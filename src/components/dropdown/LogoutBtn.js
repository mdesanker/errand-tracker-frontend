import { useDispatch } from "react-redux";
import styled from "styled-components";
import { logout } from "../../store/slices/userSlice";

const LogoutBtn = () => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };

  return <Wrapper onClick={logoutHandler}>Log out</Wrapper>;
};

const Wrapper = styled.button`
  display: block;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.medium};
  text-transform: uppercase;
  font-size: 1rem;
  text-align: center;
  padding: 15px 0;
  border: 5px solid white;
  border-radius: 15px;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.dark};
    border: 5px solid white;
    border-radius: 15px;
    background-color: #efefef;
  }
`;

export default LogoutBtn;
