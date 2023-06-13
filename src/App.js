import React, { useState } from "react";
import CityInput from "./components/CityInput";
import WeatherFetcher from "./components/WeatherFetcher ";
import WeatherCard from "./components/WeatherCard";

const App = () => {
  const apiKey = "5d2ccd799930f37c67eea31487ca9fbc"; // API anahtarını buraya girin
  const [selectedCity, setSelectedCity] = useState("");

  const handleCitySelect = (city) => {
    setSelectedCity(city);
  };

  return (
    <div className="App">
      <h1>Hava Durumu Uygulaması</h1>
      <CityInput onCitySelect={handleCitySelect} />
      {selectedCity && <WeatherFetcher city={selectedCity} apiKey={apiKey} />}
      <WeatherCard />
    </div>
  );
};

export default App;
