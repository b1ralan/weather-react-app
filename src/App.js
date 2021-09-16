import React, {useCallback, useEffect, useState} from 'react';

import './styles.sass';

import Header from './Componets/Header'
import Weather from "./Componets/Weather";
import WeatherInfo from "./Componets/WeatherInfo";

import axios from "axios";


const API_KEY = '9d6ae69e04c6d15a751792e0e2638c2d';

function App() {

  const [dataInfo, setDataInfo] = useState({
    city: '',
    temp: '',
    description: '',
    speed: '',
    pressure: '',
    humidity: '',
    clouds: '',
    img: '',
  });

  const [city, setCity] = useState('Moscow');
  const [searchCity, setSearchCity] = useState('Moscow');
  const [cityForm, setCityForm] = useState(false);
  const [selectUnits, setSelectUnits] = useState('metric');

  const  getWeather = useCallback( async ()=> {
     const api = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&appid=${API_KEY}&units=${selectUnits}`)
     const data = await api.data;
     setDataInfo({
       city: data.name,
       temp: data.main.temp,
       description: data.weather[0].description,
       speed: data.wind.speed,
       pressure: data.main.pressure,
       humidity: data.main.humidity,
       clouds: data.clouds.all,
       img: data.weather[0].main
     })
     return data

 } ,[city, selectUnits])

  useEffect(  () => {
    getWeather()
  },[getWeather])


  const handleSubmitCity = (event)=> {
    event.preventDefault()
    setCity(searchCity);
  }

  const handleChange = event => {
    const city = event.value
    setSearchCity(city);
  }

  const handleChangeMetric = (event) => {
    const metric = event.target.value;
    setSelectUnits(metric)
  }



  return (
    <div className="wrapper">
      <Header
        dataInfo={dataInfo}
        setCityForm={setCityForm}
        cityForm={cityForm}
        handleChange={handleChange}
        handleSubmitCity={handleSubmitCity}
        handleChangeMetric={handleChangeMetric}
      />
      <Weather
        dataInfo={dataInfo}
      />
     <WeatherInfo
       dataInfo={dataInfo}
     />
    </div>

  );
}

export default App;
