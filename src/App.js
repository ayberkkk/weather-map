import React, { useState,useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import CityInput from "./components/CityInput";
import WeatherFetcher from "./components/WeatherFetcher ";
import "./App.css";

const App = () => {
  const [city, setCity] = useState('');
  const [isNightMode, setIsNightMode] = useState(false);

  useEffect(() => {
    const currentTime = new Date().getHours();
    setIsNightMode(currentTime >= 19 || currentTime < 6);
  }, []);

  const handleCitySelect = (selectedCity) => {
    setCity(selectedCity);
  };

  return (
    <div className={`app ${isNightMode ? 'night-mode' : 'day-mode'}`}>
      <Container className="text-center d-table m-auto w-50 h-100">
        <Row>
          <Col className="border-3 shadow-lg rounded-2 p-4 bg-white mt-4">
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
    </div>
  );
};

export default App;
