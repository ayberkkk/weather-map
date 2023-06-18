import React, { useState, useEffect } from "react";
import {
  Typography,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@material-ui/core";

import UserMap from "./UserMap";
import { Container, Row, Col } from "reactstrap";

const WeatherCard = ({ weatherData, city }) => {
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    const getUserLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setUserLocation({ latitude, longitude });
          },
          (error) => {
            console.error("Konum alınamadı:", error);
          }
        );
      } else {
        console.error("Tarayıcı konum desteği sağlamıyor.");
      }
    };

    getUserLocation();
  }, []);

  if (!weatherData) {
    return <div className="loading">Veri yükleniyor...</div>;
  }

  const { current, forecast } = weatherData;
  const currentDay = forecast.forecastday[0];
  const forecastDays = forecast.forecastday.slice(1);

  return (
    <div className="mt-5">
      <Container>
        <Row>
          <Col lg={4}>
            <div className="current-day">
              <div className="mt-5 mb-5">
                <Typography variant="h6" style={{ textTransform: "uppercase" }}>
                  {city}
                </Typography>
                <Typography>{current.temp_c}°C</Typography>
                <Typography className="current-day-condition">
                  {currentDay.day.condition.text}
                </Typography>
              </div>
            </div>
          </Col>
          <Col lg={4}>
          <div className="current-day description">
            <div className="mt-3">
              <div className="d-flex align-items-center">
                <div
                  className="w-50 d-lg-block d-sm-none text-start m-lg-4"
                  style={{ height: "220px" }}
                >
                  <p className="description-name">Açıklama:</p>
                  <p className="description-name">Min:</p>
                  <p className="description-name">Max:</p>
                  <p className="description-name">Rüzgar:</p>
                </div>
                <div
                  className="w-50 text-start description-current-data"
                  style={{ height: "220px" }}
                >
                  <p className="description-data">
                    {currentDay.day.condition.text}
                  </p>
                  <p className="description-data">
                    {currentDay.day.mintemp_c} °C
                  </p>
                  <p className="description-data">
                    {currentDay.day.maxtemp_c} °C
                  </p>
                  <p className="description-data">
                    {currentDay.day.maxwind_kph} km/h
                  </p>
                </div>
              </div>
            </div>
          </div>
          </Col>
          <Col lg={4}>
          <div className="current-day maps">
            {userLocation && <UserMap userLocation={userLocation} />}
          </div>
          </Col>
        </Row>
      </Container>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Tarih</TableCell>
            <TableCell>Açıklama</TableCell>
            <TableCell>Min Sıcaklık</TableCell>
            <TableCell>Max Sıcaklık</TableCell>
            <TableCell>Rüzgar Hızı</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {forecastDays.map((day) => (
            <TableRow key={day.date}>
              <TableCell>{day.date}</TableCell>
              <TableCell>{day.day.condition.text}</TableCell>
              <TableCell>{day.day.mintemp_c}°C</TableCell>
              <TableCell>{day.day.maxtemp_c}°C</TableCell>
              <TableCell>{day.day.maxwind_kph} km/h</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default WeatherCard;
