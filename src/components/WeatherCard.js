import React from 'react';

const WeatherCard = ({ weatherData }) => {
  if (!weatherData) {
    return <div>Bekleniyor...</div>;
  }

  const { temperature, humidity, description, windSpeed } = weatherData;

  return (
    <div className="weather-card">
      <h2>Hava Durumu</h2>
      <div className="weather-info">
        <div>
          <strong>Sıcaklık:</strong> {temperature}°C
        </div>
        <div>
          <strong>Nem Oranı:</strong> {humidity}%
        </div>
        <div>
          <strong>Açıklama:</strong> {description}
        </div>
        <div>
          <strong>Rüzgar Hızı:</strong> {windSpeed} m/s
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
