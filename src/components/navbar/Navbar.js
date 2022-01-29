import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Wrapper>
      <NavList>
        <NavItem>
          <StyledNavLink to="/">
            <i className="fas fa-home" />
            <p>Home</p>
          </StyledNavLink>
        </NavItem>
        <NavItem>
          <StyledNavLink to="/">
            <i className="fas fa-folder-open" />
            <p>Projects</p>
          </StyledNavLink>
        </NavItem>
        <NavItem>
          <StyledNavLink to="/">
            <i className="fas fa-users" />
            <p>Friends</p>
          </StyledNavLink>
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
  display: flex;
  align-items: center;
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
  width: 70px;
  border-bottom: 3px solid transparent;

  & i {
    font-size: 34px;
  }

  & p {
    text-transform: uppercase;
    font-size: 12px;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.blue};
  }

  &.active {
    border-bottom: 3px solid ${({ theme }) => theme.colors.blue};
  }
`;

export default Navbar;
