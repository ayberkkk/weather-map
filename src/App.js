import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import CityInput from "./components/CityInput";
import WeatherFetcher from "./components/WeatherFetcher ";
import "./App.css";

const App = () => {
  const [city, setCity] = useState("");

  const handleCitySelect = (selectedCity) => {
    setCity(selectedCity);
  };

  return (
    <Container className="text-center mt-5 d-table m-auto w-50">
      <Row>
        <Col className="border-3 shadow-lg rounded-2 p-4">
          <CityInput onCitySelect={handleCitySelect} />
          {city && (
            <WeatherFetcher
              apiKey="bff45e15412b4c86a0e120043231406"
              city={city}
            />
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default App;
