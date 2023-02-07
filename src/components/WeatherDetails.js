function WeatherDetails({ weatherData }) {
  return (
    <div>
      {weatherData.name !== undefined && ( // If the name that we get from the data is empty, then it will not allow us to write this section however if it's correct, then it will allow us to write.
        <div className="details bg-[#ffffff33] w-[55%] h-[55%] p-4 flex justify-between items-center gap-1 m-auto text-center text-white rounded-xl max-sm:flex-wrap">
          <div className="feels_like">
            <p className="details_header">Feels Like</p>
            {weatherData.main ? (
              <p className="details_result">
                {weatherData.main.feels_like}&deg;C
              </p>
            ) : null}
          </div>
          <div className="humidity">
            <p className="details_header">Humidity</p>
            {weatherData.main ? (
              <p className="details_result">{weatherData.main.humidity}%</p>
            ) : null}
          </div>
          <div className="pressure">
            <p className="details_header">Pressure</p>
            {weatherData.main ? (
              <p className="details_result">{weatherData.main.pressure} hPa</p>
            ) : null}
          </div>
          <div className="temp_min">
            <p className="details_header">Temp Min</p>
            {weatherData.main ? (
              <p className="details_result">
                {weatherData.main.temp_min}&deg;C
              </p>
            ) : null}
          </div>
          <div className="temp_max">
            <p className="details_header">Temp Max</p>
            {weatherData.main ? (
              <p className="details_result">
                {weatherData.main.temp_max}&deg;C
              </p>
            ) : null}
          </div>
          <div className="wind">
            <p className="details_header">Wind Speed</p>
            {weatherData.main ? (
              <p className="details_result">{weatherData.wind.speed}km/h</p>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
}

export default WeatherDetails;
