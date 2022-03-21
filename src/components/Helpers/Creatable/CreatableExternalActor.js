import React, { Component } from 'react';

import CreatableSelect from 'react-select/creatable';

export const CreatableExternalActor = ({options=null,placeholder, setTitle, setExternalActor, value}) => {

  const handleChange = (newValue, actionMeta) => {
    console.group('Value Changed');
    //console.log(newValue.value);
    setTitle(newValue.value)
    setExternalActor(newValue)
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
        placeholder={"¿Quien es el Actor Externo?"}
      />
    );
  
}
