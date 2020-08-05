import React from "react";
import styled from "@emotion/styled";

const Conditions = ({ temp, condition }) => {
    const Temp = styled.h1`
        font-size: 2rem;
        font-weight: 200;
    `;
    const WeatherCond = styled.h3`
        font-size: 1.2rem;
    `;
    return (
        <>
            <Temp>{temp} °C</Temp>
            <WeatherCond>{condition}</WeatherCond>
        </>
    );
};

export default Conditions;
