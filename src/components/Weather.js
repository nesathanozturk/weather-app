function Weather({ weatherData }) {
  return (
    <div className="container w-[50%] h-[18rem] flex flex-col justify-center items-center m-auto text-white tracking-wider">
      <div className="location_name max-sm:w-[60%]">
        <p>{weatherData.name}</p>
      </div>
      <div className="temp mb-2">
        {weatherData.main ? (
          <p className="text-8xl max-sm:text-7xl">
            {weatherData.main.temp}&deg;C
          </p>
        ) : null}
      </div>
      <div className="weather">
        {weatherData.weather ? <p>{weatherData.weather[0].main}</p> : null}
      </div>
    </div>
  );
}

export default Weather;
