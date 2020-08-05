import React from "react";
import WeatherCard from "./components/WeatherCard/component";
import "./App.css";

function App() {
    const data = async () => {
        const apiRes = await fetch(
            "http://api.openweathermap.org/data/2.5/find?q=London&units=metric&appid=6132ed146516cb57fefdebf23a7a0001"
        );
        const resJSON = await apiRes.json();

        return resJSON;
    };

    data().then((res) => console.log(res));

    return (
        <div className="App">
            <WeatherCard
                temp={22}
                condition="Cloudy"
                city="Sydney"
                country="AU"
            />
            <WeatherCard
                temp={6}
                condition="Tornado"
                city="Melbourne"
                country="AU"
            />
            <WeatherCard
                temp={-15}
                condition="Snow"
                city="London"
                country="GB"
            />
        </div>
    );
}

export default App;
