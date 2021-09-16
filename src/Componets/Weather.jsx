import React from 'react';

import cloud from "../Assets/img/cloud.svg";
import rain from "../Assets/img/rain.svg";
import sun from "../Assets/img/sun.svg";
import storm from "../Assets/img/strom.svg";

const Weather = (props) => {
  let weatherImg ;
  switch (props.dataInfo.img) {
    case "Clouds":
      weatherImg = cloud;
      break;
    case 'Rain':
      weatherImg = rain;
      break;
    case "Clear":
      weatherImg = sun;
      break;
    case "Thunderstorm":
      weatherImg = storm;
      break;
    default:
      weatherImg = cloud;
  }
  return (
    <div className="weather">
      <div className="weather__temp">
        <img src={weatherImg} alt="sun"/>
        <span>{Math.round(props.dataInfo.temp)}º</span>
      </div>
      <div className="weather__status">{props.dataInfo.description}</div>
    </div>
  );
};

export default Weather;