import styled from "styled-components";
import WeatherForm from "../ui/WeatherForm";
import WeatherDescription from "../ui/WeatherDescription";

const StyledHome = styled.div`
  text-align: center;
`;

const H1 = styled.h1`
  margin-bottom: 2rem;
`;

const H2 = styled.h2`
  color: var(--color-brand-700);
  text-align: center;
  margin-bottom: 5rem;
`;

function Home() {
  return (
    <StyledHome>
      <H1>Welcome in weather App</H1>
      <H2>Please enter city name to check weather</H2>
      <WeatherForm />
      <WeatherDescription />
    </StyledHome>
  );
}

export default Home;
