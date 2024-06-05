import React, { useState } from 'react';
import { AutoComplete, Input } from 'antd';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete';
import styled from 'styled-components';

const CustSeatch = styled(Input.Search)`
  height: 45px;
  border: 1px solid #939393;
  width: 100%;
background-color:white;
  border-radius: 5px;
  width: 100%;
  padding-top:0.75rem;
  &::placeholder {
    color: #01497c; /* Change this to the desired placeholder color */
  }
  .ant-select-selector{
    border:0px !important;
    height:45px !important;
  }
`;
const CustomAutocomplete = ({ types, placeholder }) => {
  const [inputValue, setInputValue] = useState('');
  const [options, setOptions] = useState([]);

  const { ready, suggestions: { data }, setValue } = usePlacesAutocomplete({
    requestOptions: {
      types: types,
    },
  });

  const handleInputChange = (value) => {
    setInputValue(value);
    setValue(value);
  };

  const handleSelect = async (value) => {
    setInputValue(value);
    setValue(value);

    try {
      const results = await getGeocode({ address: value });
      const { lat, lng } = await getLatLng(results[0]);
      console.log('Selected place coordinates:', lat, lng);
    } catch (error) {
      console.log('Error fetching place details:', error);
    }
  };

  const handleSearch = (searchText) => {
    const filteredOptions = data
      .filter((suggestion) => suggestion.description.toLowerCase().includes(searchText.toLowerCase()))
      .map((suggestion) => ({ value: suggestion.description }));

    setOptions(filteredOptions);
  };

  return (
    <AutoComplete
      value={inputValue}
      options={options}
      style={{ width: 300 }}
      onSelect={handleSelect}
      onSearch={handleSearch}
    >
      <CustSeatch
        placeholder={placeholder}
        onChange={(e) => handleInputChange(e.target.value)}
        enterButton
        loading={!ready}
      />
    </AutoComplete>
  );
};

export default CustomAutocomplete;
