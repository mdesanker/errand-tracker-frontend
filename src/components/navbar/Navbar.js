import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../store/slices/userSlice";

const Navbar = () => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <Wrapper>
      <NavList>
        <NavItem>
          <StyledNavLink to="/dashboard">
            <i className="far fa-list-alt" />
            <p>Home</p>
          </StyledNavLink>
        </NavItem>
        <NavItem>
          <StyledNavLink to="/projects">
            <i className="fas fa-folder-open" />
            <p>Projects</p>
          </StyledNavLink>
        </NavItem>
        <NavItem>
          <StyledNavLink to="/friends">
            <i className="fas fa-users" />
            <p>Friends</p>
          </StyledNavLink>
        </NavItem>
        <NavItem>
          <SignoutBtn onClick={logoutHandler}>
            <i className="fas fa-sign-out-alt" />
            <p>Log out</p>
          </SignoutBtn>
        </NavItem>
      </NavList>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  width: 100%;
  height: ${({ theme }) => theme.heights.header};
  position: fixed;
  top: 0;
  background-color: white;
  box-shadow: ${({ theme }) => theme.shadows.small};
  border-radius: 0 0 10px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavList = styled.ul`
  width: 100%;
  max-width: 500px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media only screen and (min-width: 600px) {
    justify-content: center;
    gap: 20px;
  } ;
`;

const NavItem = styled.li`
  list-style: none;
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  gap: 2px;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: gray;
  cursor: pointer;
  height: 60px;
  width: 80px;
  border: 3px solid transparent;

  & i {
    font-size: 28px;
  }

  & p {
    text-transform: uppercase;
    font-size: 12px;
  }

  &:hover {
    background-color: #efefef;
    border: 3px solid white;
    border-radius: 15px;
  }

  &.active {
    color: ${({ theme }) => theme.colors.medium};
    border-bottom: 3px solid ${({ theme }) => theme.colors.medium};
  }

  &.active:hover {
    color: ${({ theme }) => theme.colors.medium};
    border-bottom: 3px solid ${({ theme }) => theme.colors.medium};
    background-color: transparent;
    border-radius: 0;
  }
`;

const SignoutBtn = styled.button`
  display: flex;
  flex-direction: column;
  gap: 2px;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: gray;
  cursor: pointer;
  height: 60px;
  width: 80px;
  border-bottom: 3px solid transparent;
  background-color: transparent;
  border: none;

  & i {
    font-size: 28px;
  }

  & p {
    text-transform: uppercase;
    font-size: 12px;
  }

  &:hover {
    background-color: #efefef;
    border: 3px solid white;
    border-radius: 15px;
  }

  &:active {
    color: ${({ theme }) => theme.colors.medium};
    background-color: transparent;
    border-radius: 0;
  }
`;

export default Navbar;
