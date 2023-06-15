import React from "react";

const WeatherCard = ({ weatherData, city }) => {
  if (!weatherData) {
    return <div className="loading">Veri yükleniyor...</div>;
  }

  const { current, forecast } = weatherData;
  const currentDay = forecast.forecastday[0];
  const forecastDays = forecast.forecastday.slice(1); // İlk günü çıkararak diğer günleri al

  return (
    <div className="mt-5">
      <h2>{city} Hava Durumu</h2>
      <div className="current-day">
        <h3>Bugün</h3>
        <div>{currentDay.day.date}</div>
        <div>
          <strong>Açıklama:</strong> {currentDay.day.condition.text}
        </div>
        <div>
          <strong>Sıcaklık:</strong> {current.temp_c}°C
        </div>
        <div>
          <strong>Rüzgar Hızı:</strong> {currentDay.day.maxwind_kph} km/h
        </div>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Tarih</th>
            <th>Açıklama</th>
            <th>Min Sıcaklık</th>
            <th>Max Sıcaklık</th>
            <th>Rüzgar Hızı</th>
          </tr>
        </thead>
        <tbody>
          {forecastDays.map((day) => (
            <tr key={day.date}>
              <td>{day.date}</td>
              <td>{day.day.condition.text}</td>
              <td>{day.day.mintemp_c}°C</td>
              <td>{day.day.maxtemp_c}°C</td>
              <td>{day.day.maxwind_kph} km/h</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WeatherCard;
