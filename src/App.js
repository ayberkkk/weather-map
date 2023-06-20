import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import CityInput from "./components/CityInput";
import WeatherFetcher from "./components/WeatherFetcher ";
import Background from "./components/DynamicBg";
import "./App.css";

const App = () => {
  const [city, setCity] = useState('');

  const handleCitySelect = (selectedCity) => {
    setCity(selectedCity);
  };

  return (
      <Container className="text-center d-table m-auto overflow-x-hidden d-block">
        <Row>
        <Background />
          <Col className="mt-4 position-static z-1">
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
