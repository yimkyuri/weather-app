import React from 'react'

const WeatherBox = ({weather}) => {
    console.log(weather)
  return (
    <div className="weather-box">
      <div>{weather?.name}</div>
      <h2>{weather?.main.temp}℃ / 230화씨</h2>
      <p>{weather?.weather[0].description}</p>
    </div>
  )
}

export default WeatherBox
