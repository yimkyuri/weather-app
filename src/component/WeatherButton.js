import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = ({cities, setCity, selectedCity}) => {
  return (
    <div>
        <Button variant={selectedCity === null ? 'warning on' : 'warning'} onClick={()=>setCity('')}>Current Location</Button>

        {cities.map((item, index) => (
            <Button variant={selectedCity === item ? 'warning on' : 'warning'} key={index} onClick={()=>setCity(item)}>{item}</Button>
        ))}
    </div>
  )
}

export default WeatherButton
