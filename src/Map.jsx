import React from "react";
import { Container } from "react-bootstrap";

const mapStyles = {
  width: "100%",
  height: 600,
  border: 0,
};

const customStyles = {
  backgroundColor: "#525D4C",
};

const mapSorce =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d36931.733191549305!2d-70.81553157465456!3d19.050866462663407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eb039662193bc9b%3A0xa26b8f744567c44b!2sVista%20de%20Manabao!5e0!3m2!1ses-419!2sdo!4v1650908537946!5m2!1ses-419!2sdo";

export default function Map() {
  return (
    <Container style={customStyles}>
      <div>
        <iframe
          title="map"
          src={mapSorce}
          style={mapStyles}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </Container>
  );
}
