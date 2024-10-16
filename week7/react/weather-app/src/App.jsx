import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const apiKey = "36815bf48e875c67c0b6ac395c861a7e";
  const [city, setCity] = useState("Hendrik-ido-Ambacht");
  const [weather, setWeather] = useState();
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const getWeatherHandler = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setWeather(data);
        console.log(data);
      })
      .catch((error) => {
        console.log("Error:" + error);
      });
  };

  const submitForm = (e) => {
    e.preventDefault();
    getWeatherHandler();
  };

  return (
    <>
      <form onSubmit={submitForm}>
        <input
          placeholder="Zoek een stad"
          value={city}
          type="text"
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Zoek</button>
      </form>
      <section>
        <h1>Welkom in {city}!</h1>
        <p>
          It is currently {weather && Math.floor(weather.main.temp)}°C in {city}
        </p>
        <p>It also feels {weather && Math.floor(weather.main.feels_like)}°C</p>
        <p>The humidity is {weather && weather.main.humidity}%</p>
        <p>The speed of the wind is {weather && weather.wind.speed} m/s</p>
      </section>
    </>
  );
}

export default App;
