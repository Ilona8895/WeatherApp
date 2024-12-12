import { createContext, useContext, useState } from "react";
import { suggestedActivity } from "../functions/suggestedActivity";
import { convertTime, kelvinToCelsius } from "../utils/helpers";
import toast from "react-hot-toast";

const openWeatherKEY = "c69e953c9ad7f0ab3b6a061494eea3b0";

const WeatherContext = createContext();

function WeatcherProvider({ children }) {
  const [weather, setWeather] = useState({});
  const [activity, setActivity] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function getWeather(city) {
    async function fetchWeather() {
      try {
        setIsLoading(true);
        setError("");
        setWeather({});
        setActivity("");

        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${openWeatherKEY}`
        );
        if (!res.ok) throw Error("Searched city not found");

        const data = await res.json();
        const convertedData = {
          name: data.name,
          tempFeels: kelvinToCelsius(data.main.feels_like),
          temp: kelvinToCelsius(data.main.temp),
          tempMin: kelvinToCelsius(data.main.temp_min),
          tempMax: kelvinToCelsius(data.main.temp_max),
          sunrise: convertTime(data.sys.sunrise),
          sunset: convertTime(data.sys.sunset),
          description: data.weather[0].main,
          icon: data.weather[0].icon,
        };

        setWeather(convertedData);
        const activity = suggestedActivity(
          convertedData.temp,
          convertedData.description
        );
        setActivity(activity);

        return { convertedData, activity };
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    async function saveToDatabase(query) {
      if (query) {
        const convertedQuery = {
          name: query.convertedData.name,
          temp: query.convertedData.temp,
          description: query.convertedData.description,
          activity: query.activity,
        };

        try {
          await fetch(`http://127.0.0.1:3000/queries`, {
            method: "POST",
            body: JSON.stringify(convertedQuery),
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Headers":
                "authorization, x-client-info, apikey, content-type",
              "Content-Type": "application/json",
            },
          });
        } catch (err) {
          console.error(err);
          toast.error("Queries can not be stored in database");
        }
      }
    }

    fetchWeather().then((res) => saveToDatabase(res));
  }

  return (
    <WeatherContext.Provider
      value={{ weather, getWeather, activity, error, isLoading }}
    >
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
