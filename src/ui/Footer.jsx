import styled from "styled-components";

const StyledFooter = styled.footer`
  font-size: 1.2rem;
  padding: 1rem;
  background-color: var(--color-grey-700);
  color: var(--color-grey-50);
`;

function Footer() {
  return (
    <StyledFooter>
      <p>&copy; Copyright {new Date().getFullYear()} by Ilona Melcher</p>
    </StyledFooter>
  );
}

export default Footer;
