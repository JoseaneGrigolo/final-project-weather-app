import { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import { ThreeDots } from "react-loader-spinner";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  const apiKey = "f0e305386at1e3ea45oc41a38550b0b4";

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coordinates,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      date: new Date(response.data.time * 1000),
      city: response.data.city,
      description: response.data.condition.description,
      icon_url: response.data.condition.icon_url,
      icon: response.data.condition.icon,
    });
  }

  function search() {
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function handlePosition(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/current?lon=${lon}&lat=${lat}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <hr />
        <form onSubmit={handleSubmit} className="mb-3">
          <input
            type="submit"
            value="Paris"
            className="btn cities"
            title="Paris Weather"
            onClick={handleCityChange}
          />
          <input
            type="submit"
            value="Tokyo"
            title="Tokyo Weather"
            className="btn cities"
            onClick={handleCityChange}
          />
          <input
            type="submit"
            value="Las Vegas"
            title="Las vegas Weather"
            className="btn cities"
            onClick={handleCityChange}
          />
        </form>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9 pe-1">
              <input
                type="search"
                title="Enter a city.."
                placeholder="Enter a city.."
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3 ps-0 pe-1">
              <input
                type="submit"
                value="Search"
                title="Search"
                className="btn color-btn w-100"
              />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    navigator.geolocation.getCurrentPosition(handlePosition);
    return (
      <div className="weather-spinner">
        <ThreeDots
          height="80"
          width="80"
          radius="30"
          color="#5485AE"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      </div>
    );
  }
}
