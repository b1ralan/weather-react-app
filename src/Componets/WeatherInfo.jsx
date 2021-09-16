import React from 'react';

const WeatherInfo = ({dataInfo}) => {
  return (
    <div className="weather-info">
      <div className="weather-info__block block_1">
        <div className="weather-info__title">Ветер</div>
        <div className="weather-info__text">{Math.round(dataInfo.speed * 10) / 10 } м/c</div>
      </div>
      <div className="weather-info__block block_2">
        <div  className="weather-info__title">Давление</div>
        <div className="weather-info__text">{dataInfo.pressure} мм рт. ст.</div>
      </div>
      <div className="weather-info__block block_3">
        <div className="weather-info__title">Влажность</div>
        <div className="weather-info__text">{dataInfo.humidity}%</div>
      </div>
      <div className="weather-info__block block_4">
        <div className="weather-info__title">Облачность</div>
        <div className="weather-info__text">{dataInfo.clouds}%</div>
      </div>
    </div>
  );
};

export default WeatherInfo;