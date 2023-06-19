import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Button,
} from "reactstrap";
import { FaSearchLocation } from "react-icons/fa";

const CityInput = ({ onCitySelect }) => {
  const [city, setCity] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (city.trim() === "") {
      return;
    }

    onCitySelect(city);
    setCity("");
  };

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
  };

  return (
    <Container>
      <Row>
        <Col>
          <Form
            onSubmit={handleSubmit}
            className={`pt-lg-3 d-flex align-items-center ${
              isFocused ? "focused" : ""
            }`}
          >
            <FormGroup className="flex-grow-1">
              <Input
                type="text"
                id="cityInput"
                value={city}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                placeholder="City"
              />
            </FormGroup>
            <Button className="mb-3" type="submit" disabled={!city} outline>
              <FaSearchLocation />
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default CityInput;
