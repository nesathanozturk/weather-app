function WeatherDetails() {
  return (
    <div className="details text-center text-white w-[40rem] h-[6rem] p-4 flex justify-between items-center m-auto border-2 border-blue-400">
      <div className="feels_like">
        <p className="details_header">Feels Like</p>
        <p className="details_result">9.62</p>
      </div>
      <div className="humidity">
        <p className="details_header">Humidity</p>
        <p className="details_result">54</p>
      </div>
      <div className="pressure">
        <p className="details_header">Pressure</p>
        <p className="details_result">1025</p>
      </div>
      <div className="temp_min">
        <p className="details_header">Temp Min</p>
        <p className="details_result">11.05</p>
      </div>
      <div className="temp_max">
        <p className="details_header">Temp Max</p>
        <p className="details_result">11.05</p>
      </div>
    </div>
  );
}

export default WeatherDetails;
