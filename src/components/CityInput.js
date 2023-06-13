import React, { useState } from 'react';

const CityInput = ({ onCitySelect }) => {
  const [city, setCity] = useState('');

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onCitySelect(city);
    setCity('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={city}
        onChange={handleInputChange}
        placeholder="Şehir adı girin"
      />
      <button type="submit">Gönder</button>
    </form>
  );
};

export default CityInput;
