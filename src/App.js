import { useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import Loading from "./components/Loading";
import Weather from "./pages/Weather";
import "animate.css";

function App() {
  const [cities, setCities] = useState("");
  const [weatherData, setWeatherData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cities}&units=metric&appid=895284fb2d2c50a520ea537456963d9c`;

  const getData = async () => {
    try {
      setIsLoading(true);
      await axios.get(BASE_URL).then((res) => {
        setWeatherData(res.data);
        setCities("");
      });
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      console.log(err);
    }
  };

  return (
    <div className="h-screen m-0 p-0 box-border animate__animated animate__fadeIn">
      <Header cities={cities} setCities={setCities} getData={getData} />
      {isLoading ? <Loading /> : <Weather weatherData={weatherData} />}
    </div>
  );
}

export default App;
