import { useState } from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature float-start">
          {Math.round(props.celsius)}
        </span>
        <span className="unit">
          °C |{" "}
          <a
            href="/"
            className="text-decoration-none"
            onClick={showFahrenheit}
            title="Fahrenheit"
          >
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <span className="temperature float-start">
          {Math.round(fahrenheit())}
        </span>
        <span className="unit">
          <a
            href="/"
            className="text-decoration-none"
            onClick={showCelsius}
            title="Celsius"
          >
            °C
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}
