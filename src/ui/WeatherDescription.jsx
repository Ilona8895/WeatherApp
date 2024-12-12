import styled from "styled-components";
import { useWeather } from "../contexts/weatherContext";
import Error from "./Error";

const StyledWeatherDescription = styled.div`
  margin-top: 5rem;
`;

const H3 = styled.h3`
  margin: 2rem;
`;

const Span = styled.span`
  color: var(--color-brand-700);
`;

const H4 = styled.h4`
  margin-bottom: 4rem;
`;

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
`;

const WeatherBlock = styled.div`
  height: 25rem;
  width: 20rem;
  padding: 2rem 1rem;
  border-radius: 7px;
  border: 1px solid var(--color-grey-300);
  background-color: var(--color-brand-200);
`;

const WeatherDetail = styled.p`
  padding: 0.5rem;
`;

function WeatherDescription() {
  const { weather, activity, error } = useWeather();

  if (error) return <Error message={error} />;

  if (!weather.name) return null;

  return (
    <StyledWeatherDescription>
      <H3>
        Weather for: <Span>{weather.name}</Span>
      </H3>
      <Div>
        <WeatherBlock>
          <H4> {weather.description}</H4>
          <img
            src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
            alt="weatherIcon"
          />
        </WeatherBlock>
        <WeatherBlock>
          <H4>Sunrise/sunset</H4>
          <WeatherDetail> ☀️{weather.sunrise}</WeatherDetail>
          <WeatherDetail> 🌒{weather.sunset}</WeatherDetail>
        </WeatherBlock>
        <WeatherBlock>
          <H4>Temperature 🌡️</H4>
          <WeatherDetail>Temp: {weather.temp} &#x2103;</WeatherDetail>
          <WeatherDetail>Perceived: {weather.tempFeels} &#x2103;</WeatherDetail>
          <WeatherDetail>Max: {weather.tempMax} &#x2103;</WeatherDetail>
          <WeatherDetail>Min: {weather.tempMin} &#x2103;</WeatherDetail>
        </WeatherBlock>
      </Div>
      <H3>
        Recommended activity for you today: <Span>{activity}</Span>
      </H3>
    </StyledWeatherDescription>
  );
}

export default WeatherDescription;
