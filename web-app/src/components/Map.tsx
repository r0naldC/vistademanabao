import Iframe from "react-iframe";

const mapSorce =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d36931.733191549305!2d-70.81553157465456!3d19.050866462663407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eb039662193bc9b%3A0xa26b8f744567c44b!2sVista%20de%20Manabao!5e0!3m2!1ses-419!2sdo!4v1650908537946!5m2!1ses-419!2sdo";

const MapComponent = () => {
  return (
    <div>
      <Iframe
        url={mapSorce}
        width="100%"
        height="300px"
        id="myIframe"
        className="map"
        display="block"
        position="relative"
        allowFullScreen
        styles={{ border: "none" }}
        loading="lazy"
      />
    </div>
  );
};

export default MapComponent;
