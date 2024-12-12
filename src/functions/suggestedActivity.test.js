import { it, expect } from "vitest";
import { suggestedActivity } from "./suggestedActivity";

it("should return go jogging if quite cold and cloud", () => {
  const result = suggestedActivity(5, "Clouds");
  expect(result).toBe("Go jogging");
});

it("should return make a snowman if is very cold and snow", () => {
  const result = suggestedActivity(-10, "Snow");
  expect(result).toBe("Make a snowman");
});

it("should return spend some time at the water if is warm and clear sky", () => {
  const result = suggestedActivity(26, "Clear");
  expect(result).toBe("Spend some time at the water");
});

it("should return eat some icecream if is extremely hot", () => {
  const result = suggestedActivity(37, "Clear");
  expect(result).toBe("Eat some icecream");
});

it("should return Play board games if is warm and rainy", () => {
  const result = suggestedActivity(17, "Rain");
  expect(result).toBe("Play board games");
});
