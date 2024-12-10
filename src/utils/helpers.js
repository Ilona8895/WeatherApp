export const kelvinToCelsius = (k) => Math.round(k - 273.15);

export function convertTime(time) {
  return new Date(time * 1000).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
}
