import React, { useState, useEffect } from 'react';
import WeatherCard from './WeatherCard';

const WeatherFetcher = ({ apiKey, city }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(
          `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=7`
        );
        const data = await response.json();
        setWeatherData(data);
        setLoading(false);
      } catch (error) {
        console.log('Error fetching weather data:', error);
      }
    };

    fetchWeatherData();
  }, [apiKey, city]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!weatherData || !weatherData.forecast) {
    return <div>Unable to fetch weather data.</div>;
  }

  return <WeatherCard weatherData={weatherData} />;
};

export default WeatherFetcher;
