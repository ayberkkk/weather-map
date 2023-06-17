import React, { useState } from "react";
import {
  Typography,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const WeatherCard = ({ weatherData, city }) => {
  const [accordionOpen, setAccordionOpen] = useState(false); // State for accordion
  const [savedValues, setSavedValues] = useState([]); // State for saving values

  if (!weatherData) {
    return <div className="loading">Veri yükleniyor...</div>;
  }

  const { current, forecast } = weatherData;
  const currentDay = forecast.forecastday[0];
  const forecastDays = forecast.forecastday.slice(1); // İlk günü çıkararak diğer günleri al

  const toggleAccordion = () => {
    setAccordionOpen(!accordionOpen);
  };

  const handleSaveChange = () => {
    const newSavedValues = [...savedValues, currentDay.day.condition.text];
    setSavedValues(newSavedValues);
  };

  return (
    <div className="mt-5">
      <Typography variant="h5" style={{ textTransform: "uppercase" }}>
        {city} Hava Durumu
      </Typography>
      <div className="current-day">
        <Typography variant="h5">Bugün</Typography>
        <Typography>{currentDay.day.date}</Typography>
        <Typography>
          <strong>Açıklama:</strong> {currentDay.day.condition.text}
        </Typography>
        <Typography>
          <strong>Sıcaklık:</strong> {current.temp_c}°C
        </Typography>
        <Typography>
          <strong>Rüzgar Hızı:</strong> {currentDay.day.maxwind_kph} km/h
        </Typography>
        <FormControlLabel
          control={<Checkbox onChange={handleSaveChange} />}
          label="Kaydet"
        />
      </div>
      <Accordion expanded={accordionOpen} onChange={toggleAccordion}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6"  style={{ textTransform: 'uppercase' }}>{city}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="current-day">
            <Typography variant="h5">Bugün</Typography>
            <Typography>{currentDay.day.date}</Typography>
            <Typography>
              <strong>Açıklama:</strong> {currentDay.day.condition.text}
            </Typography>
            <Typography>
              <strong>Sıcaklık:</strong> {current.temp_c}°C
            </Typography>
            <Typography>
              <strong>Rüzgar Hızı:</strong> {currentDay.day.maxwind_kph} km/h
            </Typography>
            <FormControlLabel
              control={<Checkbox onChange={handleSaveChange} />}
              label="Kaydet"
            />
          </div>
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
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default WeatherCard;
