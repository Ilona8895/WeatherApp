import styled, { css } from "styled-components";

const sizes = {
  primary: css`
    font-size: 1.4rem;
    padding: 0.7rem 1rem;
    font-weight: 500;
  `,
  large: css`
    font-size: 1.6rem;
    padding: 1.2rem 2.4rem;
    font-weight: 500;
  `,
};

const Button = styled.button`
  border: none;
  border-radius: 999px;
  background-color: var(--color-brand-700);
  color: var(--color-brand-50);

  ${(props) => sizes[props.size]}

  &:hover {
    background-color: var(--color-brand-600);
  }
`;

Button.defaultProps = {
  size: "primary",
};

export default Button;
