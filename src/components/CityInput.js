import React, { useState } from "react";
import { Button, Input } from "reactstrap";

const CityInput = ({ onCitySelect }) => {
  const [city, setCity] = useState("");

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (city.trim() === "") {
      return;
    }

    onCitySelect(city);
    setCity("");
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex align-content-center">
      <Input
        type="text"
        value={city}
        onChange={handleInputChange}
        placeholder="..."
      />
      <Button type="submit" disabled={!city}>
        Ara
      </Button>
    </form>
  );
};

export default CityInput;
