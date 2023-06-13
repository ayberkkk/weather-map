import React, { useEffect, useState } from 'react';
import WeatherCard from './WeatherCard';

const WeatherFetcher = ({ city, apiKey }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`
        );
        if (!response.ok) {
          throw new Error('Hava durumu verileri alınamadı.');
        }
        const data = await response.json();
        setWeatherData(data.current);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, [city, apiKey]);

  if (loading) {
    return <div>Bekleniyor...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return <WeatherCard weatherData={weatherData} />;
};

export default WeatherFetcher;
