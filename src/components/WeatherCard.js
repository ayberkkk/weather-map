import React from "react";
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
  if (!weatherData) {
    return <div className="loading">Veri yükleniyor...</div>;
  }

  const { current, forecast } = weatherData;
  const currentDay = forecast.forecastday[0];
  const forecastDays = forecast.forecastday.slice(1);

  return (
    <Container className="border-3 shadow-lg rounded-2 bg-white mt-3 mb-3">
      <Row>
          <Col lg={4}>
            <div className="current-day rounded-2">
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
            <div className="current-day rounded-2 description">
              <div className="d-flex align-items-center">
                <div
                  className="w-50 d-lg-block d-sm-none text-start"
                  style={{ height: "220px" }}
                >
                  <p className="description-name">Açıklama</p>
                  <p className="description-name">Min</p>
                  <p className="description-name">Max</p>
                  <p className="description-name">Rüzgar</p>
                  <p className="description-name">UV</p>
                </div>
                <div
                  className="w-50 text-start description-current-data rounded-2"
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
                  <p className="description-data">{currentDay.day.uv} km/h</p>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="current-day rounded-2 maps">
              <UserMap />
            </div>
          </Col>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Tarih</TableCell>
                <TableCell>Açıklama</TableCell>
                <TableCell>Min</TableCell>
                <TableCell>Max</TableCell>
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
      </Row>
    </Container>
  );
};

export default WeatherCard;
