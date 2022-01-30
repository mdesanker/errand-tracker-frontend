import styled from "styled-components";

const Card = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  width: 90%;
  max-width: 800px;
  font-size: 1rem;
  padding: 16px 12px 20px;
  background-color: #fff;
  border-radius: ${({ theme }) => theme.radii.medium};
  box-shadow: ${({ theme }) => theme.shadows.soft};
  position: relative;
`;

export default Card;
