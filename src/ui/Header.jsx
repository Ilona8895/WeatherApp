import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 2rem;
  letter-spacing: 0.1em;
  padding: 1.5rem 3rem;
  background-color: var(--color-brand-700);
  color: var(--color-brand-50);
  border-bottom: 1px solid var(--color-brand-50);
  text-transform: uppercase;
`;

const Span = styled.span`
  font-size: 3rem;
`;

function Header() {
  return (
    <StyledHeader>
      <Link to="/">
        <Span>⛅</Span> Weather App
      </Link>
      <Link to="/auth">Stats</Link>
    </StyledHeader>
  );
}

export default Header;
