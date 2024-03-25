import React from 'react'

const WeatherBox = ({weather}) => {
    console.log(weather);
    const f = weather && weather.main? (weather.main.temp *1.8 + 32).toFixed(2) : null;
  return (
    <div className="weather-box">
      <div>{weather?.name}</div>
      <h2>{weather?.main.temp}℃ / {f} ℉</h2>
      <p>{weather?.weather[0].description}</p>
    </div>
  )
}

export default WeatherBox
