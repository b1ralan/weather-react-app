import React from 'react';
import locationSvg from "../Assets/img/location.svg";
import Form from "./Form";

const Header = (props) => {
  return (
    <div className="header">
      <div className="location">
        <h1 className="location__city">{props.dataInfo.city}</h1>
        <button className="location__change-button location__change-button_city" onClick={()=> props.setCityForm(true)}>Сменить город</button>
        <button className="location__change-button location__change-button_location">
          <img src={locationSvg} alt="icon location"/>
          Мое местоположение
        </button>
        <Form
          cityForm={props.cityForm}
          setCityForm={props.setCityForm}
          handleChange={props.handleChange}
          handleSubmitCity={props.handleSubmitCity}
        />
      </div>
      <div className="units" >
        <span className="units__span">º</span>
        <form className="units__group">
          <div className="units__group-btn units__group-btn-c">
            <input  id="1" type="radio" name="radio" value="metric" defaultChecked onChange={props.handleChangeMetric}/>
            <label htmlFor="1">C</label>
          </div>
          <div className="units__group-btn units__group-btn-f">
            <input id="2"  type="radio" name="radio" value="imperial" onChange={props.handleChangeMetric}/>
            <label htmlFor="2">F</label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Header;