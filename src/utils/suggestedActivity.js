import { kelvinToCelsius } from "./helpers";

export function suggestedActivity(temp, weather) {
  const convertedTemp = kelvinToCelsius(temp);
  let activity;
  if (convertedTemp > 1 && convertedTemp < 10) {
    if (
      weather === "clear sky" ||
      weather === "few clouds" ||
      weather === "Clouds"
    ) {
      activity = "Go jogging";
    } else {
      activity = "Read a book";
    }
  } else if (convertedTemp <= 1) {
    if (weather === "snow") {
      activity = "Clouds";
    }
    if (
      weather === "clear sky" ||
      weather === "few clouds" ||
      weather === "Clouds"
    ) {
      activity = "Go for a walk";
    } else {
      activity = "Watch a film";
    }
  } else if (convertedTemp >= 10 && convertedTemp < 20) {
    if (
      weather === "clear sky" ||
      weather === "few clouds" ||
      weather === "Clouds"
    ) {
      activity = "Do gardening";
    } else {
      activity = "Play board games";
    }
  } else if (convertedTemp >= 20 && convertedTemp < 26) {
    if (
      weather === "clear sky" ||
      weather === "few clouds" ||
      weather === "Clouds"
    ) {
      activity = "Ride a bike";
    } else {
      activity = "Play video games";
    }
  } else if (convertedTemp >= 26 && convertedTemp < 37) {
    if (
      weather === "clear sky" ||
      weather === "few clouds" ||
      weather === "Clouds"
    ) {
      activity = "Spend some time at the water";
    } else {
      activity = "Go to the cinema";
    }
  } else if (convertedTemp >= 37) activity = "Eat some icecream";

  return activity;
}
