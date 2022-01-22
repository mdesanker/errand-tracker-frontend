import styled from "styled-components";

const Logo = ({ size }) => {
  return (
    <LogoWrapper size={size}>
      <i className="fas fa-check-square" />
    </LogoWrapper>
  );
};

const LogoWrapper = styled.div`
  font-size: ${(props) => props.size};
  background: ${({ theme }) => theme.gradients.primary};
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

export default Logo;
