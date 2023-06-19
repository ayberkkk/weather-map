import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { Container, Row, Col } from "reactstrap";

const UserMap = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      },
      (error) => {
        console.error("Konum alınamadı:", error);
      }
    );
  }, []);

  const position = [latitude, longitude];

  return (
    <Container>
      <Row>
        <Col>
          <div style={{ height: "230px", width: "100%" }}>
            {latitude && longitude ? (
              <MapContainer
                center={position}
                zoom={13}
                style={{ height: "100%", width: "100%" }}
              >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={position} />
              </MapContainer>
            ) : (
              <div>Konum bilgisi alınamadı.</div>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default UserMap;
