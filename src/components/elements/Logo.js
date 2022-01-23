import styled from "styled-components";

const Logo = ({ size }) => {
  return (
    <LogoWrapper size={size}>
      <i className="fas fa-running" />
    </LogoWrapper>
  );
};

const LogoWrapper = styled.div`
  height: ${({ theme }) => theme.heights.header};
  display: flex;
  align-items: center;
  font-size: ${(props) => props.size};
  background: ${({ theme }) => theme.gradients.primary};
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

export default Logo;
