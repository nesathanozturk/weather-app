function Weather() {
  return (
    <div className="container w-[40rem] h-[20rem] flex flex-col justify-center items-center m-auto text-white tracking-wider">
      <div className="location_name">
        <p>Trabzon</p>
      </div>
      <div className="coordinations flex justify-center items-center m-2">
        <p className="mr-4 text-xl">39.8333</p>
        <p className="text-xl">40.9167</p>
      </div>
      <div className="temp mb-2">
        <p className="text-8xl">12&deg;C</p>
      </div>
      <div className="weather">
        <p>Sun</p>
      </div>
    </div>
  );
}

export default Weather;
