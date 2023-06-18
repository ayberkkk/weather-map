import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { Container, Row, Col } from "reactstrap";

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
   <Container>
    <Row>
      <Col>
      <form
      onSubmit={handleSubmit}
      className="d-flex align-content-center pt-lg-3"
    >
      <TextField
        type="text"
        className="w-100"
        value={city}
        onChange={handleInputChange}
        label="City"
        style={{ textTransform: 'uppercase' }}
      />
      <Button type="submit" disabled={!city} variant="outlined">
        Ara
      </Button>
    </form>
      </Col>
    </Row>
   </Container>
  );
};

export default CityInput;
