export function suggestedActivity(temp, weather) {
  // console.log(temp);
  let activity;
  if (temp <= 1) {
    if (weather === "Snow") {
      activity = "Make a snowman";
    } else if (weather === "Clear" || weather === "Clouds") {
      activity = "Go for a walk";
    } else {
      activity = "Watch a film";
    }
  } else if (temp > 1 && temp < 10) {
    if (weather === "Clear" || weather === "Clouds") {
      activity = "Go jogging";
    } else {
      activity = "Read a book";
    }
  } else if (temp >= 10 && temp < 20) {
    if (weather === "Clear" || weather === "Clouds") {
      activity = "Do gardening";
    } else {
      activity = "Play board games";
    }
  } else if (temp >= 20 && temp < 26) {
    if (weather === "Clear" || weather === "Clouds") {
      activity = "Ride a bike";
    } else {
      activity = "Play video games";
    }
  } else if (temp >= 26 && temp < 37) {
    if (weather === "Clear" || weather === "Clouds") {
      activity = "Spend some time at the water";
    } else {
      activity = "Go to the cinema";
    }
  } else if (temp >= 37) activity = "Eat some icecream";

  return activity;
}
