export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = days[date.getDay()];
    return day;
  }

  return (
    <div className="WeatherForecastDay mb-3 mt-3">
      {" "}
      <div className="WeatherForecast-day">{day()}</div>
      <div className="WeatherForecast-icon">
        <img
          src={props.data.condition.icon_url}
          alt={props.data.condition}
          className="WeatherForecast-img"
        />{" "}
      </div>
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-max"> {maxTemperature()}°</span>
        <span className="WeatherForecast-min"> {minTemperature()}°</span>
      </div>
    </div>
  );
}
