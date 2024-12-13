import { useEffect, useState } from "react";
import Button from "../ui/Button";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useAuthorization } from "../contexts/AuthorizationContext";
import Error from "../ui/Error";

const Input = styled.input`
  border-radius: 999px;
  border: 1px solid var(--color-grey-400);
  padding: 0.6rem 1rem;
`;

const FormRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin: 2rem;
`;

function Authorization() {
  const navigate = useNavigate();
  const { isAuthenticated, checkPassword, authError } = useAuthorization();
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (password) checkPassword(password);
    setPassword("");
  }

  useEffect(
    function () {
      if (isAuthenticated === true) navigate("/stats", { replace: true });
    },
    [isAuthenticated, navigate]
  );

  return (
    <form onSubmit={handleSubmit}>
      <FormRow>
        <label htmlFor="city">Password</label>
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button>Confirm</Button>
      </FormRow>
      {authError && <Error message={authError} />}
    </form>
  );
}

export default Authorization;
