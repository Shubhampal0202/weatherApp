import React, { useState, useEffect } from 'react'

const WeatherCard = ({ tempInfo }) => {
    const [weatherState, setweatherState] = useState("");
    const {
        temp,
        humidity,
        pressure,
        weatherMood,
        country,
        sunset,
        name,
        speed,
    } = tempInfo;
    // converting the seconds into time
    let sec = sunset;
    let date = new Date(sec * 1000);
    let time = `${date.getHours()}:${date.getMinutes()}`;

    useEffect(() => {
        if (weatherMood) {
            switch (weatherMood) {
                case "Clouds":
                    setweatherState('wi-day-cloudy');
                    break;
                case "Haze":
                    setweatherState('wi-fog');
                    break;
                    case "Rain":
                        setweatherState('wi-day-rain');
                        break;
                        case "Mist":
                            setweatherState('wi-dust');
                            break;
                case "Clear":
                    setweatherState('wi-day-sunny');
                    break;
                default:
                    setweatherState('wi-day-sunny');
                    break;

            }
        }
    },[weatherMood])
    return (
        <>
            <div className="weatherCardContainer">
                <div className="weatherIcon">
                    <i className={`wi ${weatherState}`}></i>
                </div>
                <div className="weatherInfo">
                    <div className="temperatureDetails">
                        <div className="temp">
                            <span>{temp}&deg;</span>
                        </div>
                        <div className="discription">
                            <div className="weatherCondition">{weatherMood}</div>
                            <div className="place">{name},{country}</div>
                        </div>
                    </div>
                    <div className="date">
                        <div>{new Date().toDateString()}</div>
                        <span>{new Date().toLocaleTimeString()}</span>
                    </div>
                </div>

                <div className="extraTemp">
                    <div className="twoSidedSection">
                        <p className="leftSide"><i className={'wi wi-sunset'}></i></p>
                        <p className="rightSide">Sunset <br />{time} PM</p>
                    </div>

                    <div className="twoSidedSection">
                        <p className="leftSide"><i className={'wi wi-humidity'}></i></p>
                        <p className="rightSide">Humidity <br />{humidity}</p>
                    </div>

                    <div className="twoSidedSection">
                        <p className="leftSide"><i className={'wi wi-rain'}></i></p>
                        <p className="rightSide">Pressure <br />{pressure}</p>
                    </div>

                    <div className="twoSidedSection">
                        <p className="leftSide"><i className={'wi wi-strong-wind'}></i></p>
                        <p className="rightSide">Wind <br />{speed}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WeatherCard