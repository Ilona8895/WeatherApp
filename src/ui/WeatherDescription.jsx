import styled from "styled-components";
import { useWeather } from "../contexts/weatherContext";
import { convertTime, kelvinToCelsius } from "../utils/helpers";

const StyledWeatherDescription = styled.div`
  margin-top: 5rem;
`;

const H3 = styled.h3`
  margin: 2rem;
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
  border: 1px solid var(--color-brand-500);
  background-color: var(--color-brand-200);
`;

function WeatherDescription() {
  const { weather, activity } = useWeather();
  console.log(weather);

  if (!weather.name) return null;

  return (
    <StyledWeatherDescription>
      <H3>Weather for: {weather.name}</H3>
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
          <p> ☀️ {convertTime(weather.sunrise)}</p>
          <p> 🌒{convertTime(weather.sunset)}</p>
        </WeatherBlock>
        <WeatherBlock>
          <H4>Temperature</H4>
          <p>Temp: {kelvinToCelsius(weather.temp)} &#x2103;</p>
          <p>Perceived: {kelvinToCelsius(weather.tempFeels)} &#x2103;</p>
          <p>Max: {kelvinToCelsius(weather.tempMax)} &#x2103;</p>
          <p>Min: {kelvinToCelsius(weather.tempMin)} &#x2103;</p>
        </WeatherBlock>
      </Div>
      <p>Activity: {activity}</p>
    </StyledWeatherDescription>
  );
}

export default WeatherDescription;
