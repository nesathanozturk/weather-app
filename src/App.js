import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import Weather from "./components/Weather";
import WeatherDetails from "./components/WeatherDetails";

function App() {
  const [cities, setCities] = useState("");
  const [weatherData, setWeatherData] = useState({});

  const getData = () => {};

  return (
    <div className="App w-full h-screen m-0 p-0 box-border">
      <Header cities={cities} setCities={setCities} />
      <Weather />
      <WeatherDetails />
    </div>
  );
}

export default App;
