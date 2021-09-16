import React from 'react';
import Select from "react-select";

const Form = (props) => {
  const options = [
    {value: 'Москва', label: 'Москва'},
    {value: 'Санкт-Петербург', label: 'Санкт-Петербург'},
    {value: 'Новосибирск', label: 'Новосибирск'},
    {value: 'Екатеринбург', label: 'Екатеринбург'},
    {value: 'Казань', label: 'Казань'},
    {value: 'Нижний Новгород', label: 'Нижний Новгород'},
    {value: 'Челябинск', label: 'Челябинск'},
    {value: 'Самара', label: 'Самара'},
    {value: 'Омск', label: 'Омск'},
    {value: 'Ростов-на-Дону', label: 'Ростов-на-Дону'},
    {value: 'Уфа', label: 'Уфа'},
    {value: 'Красноярск', label: 'Красноярск'},
    {value: 'Воронеж', label: 'Воронеж'},
    {value: 'Пермь', label: 'Пермь'},
    {value: 'Краснодар', label: 'Краснодар'},
  ]

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      color: state.isFocused ? 'black' : 'black' && state.isSelected ? 'white' : 'black',
      backgroundColor: state.isFocused ? '#e0f2ff' : 'white' && state.isSelected ? '#498CEC' : 'white'
    }),
    menu: (provide) => ({
      ...provide,
      width: 566,

    }),
    valueContainer: (provide) => ({
      ...provide,
      padding: '26px 30px',
      fontSize: '30px',
      lineHeight: '36px',
      borderRadius:'8px',
    }),
    control: (provided) => ({
      ...provided,
      width: 492,
      backgroundColor: '#ecf3f7',
      border: 'none',
      cursor: 'pointer',
      boxShadow: 'none'
    })
  }


  return (
    <div>
      { props.cityForm ?
        <form className="location__change-city-form" onSubmit={props.handleSubmitCity}>
          <div>
            <Select classNamePrefix="react-select" onChange={props.handleChange} onInputChange={''} hasValue={true} options={options} placeholder="Введите город"  styles={customStyles}/>
            <button onClick={()=> props.setCityForm(false)}>OK</button>
          </div>
        </form>
        :
        <form className="location__change-city-form-dis" onSubmit={props.handleSubmitCity}>
          <div>
            <Select classNamePrefix="react-select" onChange={props.handleChange} onInputChange={''} hasValue={true} options={options} placeholder="Введите город"  styles={customStyles}/>
            <button onClick={()=> props.setCityForm(false)}>OK</button>
          </div>
        </form>
      }
    </div>
  );
};

export default Form;