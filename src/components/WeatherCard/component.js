import React from "react";
import Location from "./Location";
import Icon from "./Icon";
import Conditions from "./Conditions";
import styled from "@emotion/styled";

const WeatherCard = ({ temp, condition, city, country }) => {
    let highColor = 0;
    let lowColor = 0;
    let bg = null;

    if (temp > 12) {
        highColor = (1 - (temp - 12) / 28) * 255;
        lowColor = highColor - 150;
        bg = `
            rgb(255, ${highColor}, 0),
            rgb(255, ${lowColor}, 0)
        `;
    } else if (temp <= 12) {
        highColor = (1 - (temp + 20) / 32) * 255;
        lowColor = highColor - 150;
        bg = `
            rgb(0, ${highColor}, 255),
            rgb(0, ${lowColor}, 255)
        `;
    }
    const Card = styled.div`
        color: white;
        margin: 1em auto;
        background: linear-gradient(to top, ${bg});
        width: 200px;
        height: 280px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        border-radius: 15px;
    `;
    return (
        <Card>
            <Location city={city} country={country} />
            <Icon condition={condition} />
            <Conditions temp={temp} condition={condition} />
        </Card>
    );
};

export default WeatherCard;
