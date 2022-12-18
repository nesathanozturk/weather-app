import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import Weather from "./components/Weather";
import WeatherDetails from "./components/WeatherDetails";

function App() {
  const [cities, setCities] = useState("");
  const [weatherData, setWeatherData] = useState({});

  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cities}&units=metric&appid=895284fb2d2c50a520ea537456963d9c`;

  const getData = async () => {
    await axios.get(API_URL).then((res) => {
      setWeatherData(res.data);
    });
    setCities("");
  };

  return (
    <div className="App w-full h-screen m-0 p-0 box-border">
      <Header cities={cities} setCities={setCities} getData={getData} />
      <Weather weatherData={weatherData} />
      <WeatherDetails weatherData={weatherData} />
    </div>
  );
}

export default App;
