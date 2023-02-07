import WeatherMain from "../components/WeatherMain";
import WeatherDetails from "../components/WeatherDetails";

function Weather({ weatherData }) {
  return (
    <div>
      <WeatherMain weatherData={weatherData} />
      <WeatherDetails weatherData={weatherData} />
    </div>
  );
}

export default Weather;
