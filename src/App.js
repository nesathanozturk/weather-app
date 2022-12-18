import { useState, useEffect } from "react";
import Header from "./components/Header";
import Weather from "./components/Weather";
import WeatherDetails from "./components/WeatherDetails";

function App() {
  const [cities, setCities] = useState("");
  const [weatherData, setWeatherData] = useState({});

  return (
    <div className="App w-full h-screen m-0 p-0 box-border">
      <Header cities={cities} setCities={setCities} />
      <Weather />
    </div>
  );
}

export default App;
