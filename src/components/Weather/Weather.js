import React from 'react';
import cls from './Weather.module.css'

const Weather = props => (
  <div className={cls.container}>
  { props.city &&
    <div>
      <p>City: {props.city}</p>
      <p>Pressure: {props.pressure} bar</p>
      <p>Humidity: {props.humidity} %</p>
      <p>Sunset: {props.sunset}</p>
    </div>
  }
    <p>{props.error}</p>
    </div>
)

export default Weather;
