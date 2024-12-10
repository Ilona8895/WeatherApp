import styled from "styled-components";
import Button from "./Button";
import { useEffect, useState } from "react";
import { useGeolocation } from "../hooks/useGeolocation";
import { getAddress } from "../services/apiGeocoding";
import { useQuery } from "@tanstack/react-query";
import { useWeather } from "../contexts/weatherContext";

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

function WeatherForm() {
  const [city, setCity] = useState("");
  const { getWeather } = useWeather();

  const {
    isLoading: isLoadingPosition,
    position: geolocationPosition,
    getPosition,
  } = useGeolocation();

  useEffect(
    function () {
      async function getCityName() {
        if (geolocationPosition) {
          const data = await getAddress([
            geolocationPosition.lat,
            geolocationPosition.lng,
          ]);
          setCity(data.city);
        }
      }

      getCityName();
    },
    [geolocationPosition]
  );

  function handleSubmit(e) {
    e.preventDefault();
    getWeather(city);
    setCity("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormRow>
        <label htmlFor="city">City name</label>
        <Input
          id="city"
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <Button
          disabled={isLoadingPosition}
          onClick={(e) => {
            e.preventDefault();
            getPosition();
          }}
        >
          Get position
        </Button>
      </FormRow>
      <Button size="large">Check weather</Button>
    </form>
  );
}

export default WeatherForm;
