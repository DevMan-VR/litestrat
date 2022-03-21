import React, { Component } from 'react';

import CreatableSelect from 'react-select/creatable';

export const CreatableObjective = ({value, options=null,placeholder, setData}) => {

  const handleChange = (newValue, actionMeta) => {
    console.group('Value Changed');
    //console.log(newValue);
    setData(newValue)
    //console.log(`action: ${actionMeta.action}`);
    console.groupEnd();
  };
  const handleInputChange = (inputValue, actionMeta) => {
    console.group('Input Changed');
    //console.log(inputValue);
    //console.log(`action: ${actionMeta.action}`);
    console.groupEnd();
  };

 
    return (
      <CreatableSelect
        isClearable
        onChange={handleChange}
        onInputChange={handleInputChange}
        options={options}
        defaultValue={value}
        placeholder="Asigne un Rol"
      />
    );
  
}
