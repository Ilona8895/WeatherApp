import { createContext, useContext, useState } from "react";
import { suggestedActivity } from "../utils/suggestedActivity";

const openWeatherKEY = "c69e953c9ad7f0ab3b6a061494eea3b0";

const WeatherContext = createContext();

function WeatcherProvider({ children }) {
  const [weather, setWeather] = useState({});
  const [activity, setActivity] = useState("");

  function getWeather(city) {
    async function fetchWeather() {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${openWeatherKEY}`
      );
      if (!res.ok) throw Error("Failed getting address");

      const data = await res.json();
      const convertedData = {
        name: data.name,
        tempFeels: data.main.feels_like,
        temp: data.main.temp,
        tempMin: data.main.temp_min,
        tempMax: data.main.temp_max,
        sunrise: data.sys.sunrise,
        sunset: data.sys.sunset,
        description: data.weather[0].main,
        icon: data.weather[0].icon,
      };
      //   console.log(data);
      setWeather(convertedData);
      setActivity(suggestedActivity(data.main.temp, data.weather[0].main));
    }

    fetchWeather();
  }

  return (
    <WeatherContext.Provider value={{ weather, getWeather, activity }}>
      {children}
    </WeatherContext.Provider>
  );
}

function useWeather() {
  const context = useContext(WeatherContext);
  if (context === null)
    throw new Error("WeatherContext was used outside the WeatherProvider");

  return context;
}

export { WeatcherProvider, useWeather };
