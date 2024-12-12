import styled from "styled-components";

const Span = styled.span`
  padding: 1.5rem;
  color: var(--color-red-700);
  background-color: var(--color-red-100);
  border-radius: 7px;
  text-align: center;
`;

const StyledError = styled.p`
  margin: 3rem auto;
  width: fit-content;
`;

function Error({ message }) {
  return (
    <StyledError>
      <Span>{message} 😢</Span>
    </StyledError>
  );
}

export default Error;
