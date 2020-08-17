import React, { useState, useEffect } from "react";
import WeatherCard from "./WeatherCard/component";

function WeatherEngine({ location }) {
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
        `http://api.openweathermap.org/data/2.5/weather?q=${q}&units=metric&appid=6132ed146516cb57fefdebf23a7a0001`
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

  const handleSearch = (e) => {
    e.preventDefault();
    getWeather(query);
  };

  useEffect(() => {
    getWeather(location);
  }, [location]);

  return (
    <div>
      {!loading && !error ? (
        <div>
          <WeatherCard
            temp={weather.temp}
            condition={weather.condition}
            city={weather.city}
            country={weather.country}
          />
          <form style={{ textAlign: "center" }} action="">
            <input
              required
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={(e) => handleSearch(e)}>Submit</button>
          </form>
        </div>
      ) : loading ? (
        <div>Loading....</div>
      ) : !loading && error ? (
        <div>
          Something went wrong...
          <button onClick={() => setError(false)}>Reset</button>
        </div>
      ) : null}
    </div>
  );
}

export default WeatherEngine;
