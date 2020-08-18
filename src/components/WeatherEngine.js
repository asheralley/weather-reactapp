import React, { useState, useEffect } from "react";
import { PulseLoader } from "react-spinners";
import WeatherCard from "./WeatherCard/component";

function WeatherEngine({ location }) {
  const appid = "secret";
  const [query, setQuery] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [weather, setWeather] = useState({
    temp: null,
    city: null,
    condition: null,
    country: null,
  });

  const getWeather = async (q) => {
    setQuery("");
    setLoading(true);
    try {
      const apiRes = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${q}&units=metric&appid=${appid}`
      );

      const resJSON = await apiRes.json();
      setWeather({
        temp: resJSON.main.temp,
        city: resJSON.name,
        condition: resJSON.weather[0].main,
        country: resJSON.sys.country,
      });
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  // const handleSearch = (e) => {
  //   e.preventDefault();
  //   getWeather(query);
  // };

  useEffect(() => {
    getWeather(location);
  }, [location]);

  if (error) {
    return (
      <div>
        Something went wrong...
        <button onClick={() => setError(false)}>Reset</button>
      </div>
    );
  }

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          width: "200px",
          height: "240px",
          color: "green",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <PulseLoader size={15} color="green" />
      </div>
    );
  }

  return (
    <div>
      <WeatherCard
        temp={weather.temp}
        condition={weather.condition}
        city={weather.city}
        country={weather.country}
        getWeather={getWeather}
      />
    </div>
  );
}

export default WeatherEngine;
