import React from "react";
import imgmanabao from "./resources/images/manabaoImg.webp";
import imgActvd1 from "./resources/images/actvd1.webp";
import thnImgActvd1 from "./resources/images/actvd1v2.webp";
import imgActvd2 from "./resources/images/actvd2.webp";
import thnImgActvd2 from "./resources/images/actvd2v2.webp";
import imgActvd3 from "./resources/images/actvd3.webp";
import thnImgActvd3 from "./resources/images/actvd3v2.webp";
import imgActvd4 from "./resources/images/actvd4.webp";
import thnImgActvd4 from "./resources/images/actvd4v2.webp";
import imgActvd5 from "./resources/images/actvd5.webp";
import thnImgActvd5 from "./resources/images/actvd5v2.webp";
import imgActvd6 from "./resources/images/actvd6.webp";
import thnImgActvd6 from "./resources/images/actvd6v2.webp";
import rc1 from "./resources/images/rcImg1v2.webp";
import actidrc1 from "./resources/images/rcImg1.webp";
import rc2 from "./resources/images/rcImg2v2.webp";
import actidrc2 from "./resources/images/rcImg2.webp";
import rc3 from "./resources/images/rcImg3v2.webp";
import rcVid from "./resources/videos/rcVid.mp4";
import vistaM from "./resources/videos/vista_manabao_vid.mp4";
import descrpM from "./resources/videos/descrp_vid.mp4";
import projectPoster from "./resources/images/posterVistaM.webp";
import manabaoPoster from "./resources/images/manabaoPoster.webp";

import {
  Card,
  Carousel,
  Container,
  Image,
  Offcanvas,
  Row,
  Col,
} from "react-bootstrap";
import ScrollToTop from "react-scroll-to-top";
import Footer from "./Footer.jsx";
import CustomCarousel from "./Carousel";
import CustomNavbar from "./Navbar";
import Map from "./Map";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const imgActivitiesStyles = {
  width: "100%",
};

const titleStyles = {
  textAlign: "center",
};

const carouselStyles = {
  marginBottom: "5rem",
};

const textBoxStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mbShow: false,
      sndShow: false,
      cmpShow: false,
      rcShow: false,
    };

    this.mbHandleShow = this.mbHandleShow.bind(this);
    this.mbHandleClose = this.mbHandleClose.bind(this);

    this.sndHandleShow = this.sndHandleShow.bind(this);
    this.sndHandleClose = this.sndHandleClose.bind(this);

    this.cmpHandleShow = this.cmpHandleShow.bind(this);
    this.cmpHandleClose = this.cmpHandleClose.bind(this);

    this.rcHandleShow = this.rcHandleShow.bind(this);
    this.rcHandleClose = this.rcHandleClose.bind(this);
  }

  mbHandleShow() {
    this.setState(() => ({
      mbShow: true,
    }));
  }
  mbHandleClose() {
    this.setState(() => ({
      mbShow: false,
    }));
  }

  sndHandleShow() {
    this.setState(() => ({
      sndShow: true,
    }));
  }
  sndHandleClose() {
    this.setState(() => ({
      sndShow: false,
    }));
  }

  cmpHandleShow() {
    this.setState(() => ({
      cmpShow: true,
    }));
  }
  cmpHandleClose() {
    this.setState(() => ({
      cmpShow: false,
    }));
  }

  rcHandleShow() {
    this.setState(() => ({
      rcShow: true,
    }));
  }
  rcHandleClose() {
    this.setState(() => ({
      rcShow: false,
    }));
  }

  render() {
    return (
      <div className="App">
        <div className="App-body">
          <CustomNavbar />

          <Container className="carousel" id="home" style={carouselStyles}>
            <CustomCarousel />
          </Container>

          <Container className="projectPresentation" id="project">
            <Row className="justify-content-md-center">
              <Col sm={12} md={6} lg={4} style={textBoxStyle}>
                <div style={{ width: "90%" }}>
                  <h1 style={titleStyles}>Vista De Manabao</h1>
                  <p align="left">
                    Es un proyecto ubicado en la zona de{" "}
                    <b>Manabao, Jarabacoa. </b>
                    Cuenta con una altura máxima de 1,370 msnm y una altura
                    mínima de 950 msnm. Está ubicando a tan solo 23 km del
                    municipio de Jarabacoa.
                  </p>

                  <p align="left">
                    En un proyecto en desarrollo, la cual contamos con una
                    reforestación de Pinus occidentalis “pino criollo”
                    totalmente en nuestro proyecto. Abarca una extensión de
                    5,659,740 mts2, la cual lo cataloga como el proyecto más
                    extenso a nivel de Jarabacoa y Manabao. Cuenta con 17
                    arroyos dentro del proyecto.
                  </p>
                </div>
              </Col>
              <Col className="vmVideo centered-element" sm={12} md={6} lg={8}>
                <video
                  controls
                  preload="none"
                  width={"100%"}
                  poster={projectPoster}
                >
                  <source src={vistaM} type="video/mp4" />
                </video>
              </Col>
            </Row>
          </Container>
          <section id="manabao">
            <Container className="locationDescription">
              <h1 style={titleStyles}>Manabao</h1>
              <Row className="justify-content-md-center subtitle">
                <p align="center">"Cerca del cielo"</p>
              </Row>
              <Row>
                <Col className="centered-element" sm={12} lg={6}>
                  <Image
                    src={imgmanabao}
                    style={imgActivitiesStyles}
                    loading="lazy"
                  />
                </Col>
                <Col sm={12} md={6} className="centered-element">
                  <div style={{ width: "90%" }}>
                    <p>
                      Es fácil enamorarse de Manabao y caer rendidos ante sus
                      paisajes, sus flores y su gente. El distrito municipal,
                      ubicado al oeste de la provincia La Vega, con una altura
                      de 877 metros sobre el nivel del mar, pertenece al
                      municipio de Jarabacoa, de cuyo centro lo separan
                      alrededor de 23 kilómetros. La carretera que los une corre
                      paralela al río Yaque del Norte y atraviesa los arroyos
                      Dajao y Grande.
                    </p>
                    <p>
                      Las bellezas naturales que posee Manabao con sus
                      balnearios,saltos y montañas, constituye la principal
                      atracción para miles de personas que acuden a este lugar
                      intramontañoso a pasar sus días de vacaciones. Este lugar
                      se vislumbra como el mejor destino nacional para el
                      turismo de aventuras.
                    </p>
                    <p>
                      Manabao se caracteriza por la frescura del clima, la
                      siembra de café, vegetales diversos y flores de gran
                      variedad, aquí la magia se apodera del visitante.
                    </p>
                    <p>
                      Muchos viajeros admiten que el primer encuentro con
                      Manabao llegó cuando aceptaron subir el{" "}
                      <b>“Pico Duarte”</b> por la ruta más corta y los llevaron
                      al poblado de La Ciénaga, a los pies del Parque Nacional
                      J. Armando Bermúdez, de donde parte la excursión de
                      aproximadamente 22 kilómetros hasta su cima, localizada a
                      3,087 metros sobre el nivel del mar.
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
            <Container className="centered-element customBackground">
              <video
                controls
                preload="none"
                width={"100%"}
                poster={manabaoPoster}
              >
                <source src={descrpM} type="video/mp4" />
              </video>
            </Container>
          </section>

          <Container
            id="activities"
            className="activitiesContainer customBackground"
          >
            <h1 style={titleStyles}>Actividades en la zona</h1>

            <Row className="justify-content-md-center">
              <Col sm={12} md={6} className="cardsColumn">
                <Card className="customCard" onClick={this.mbHandleShow}>
                  <Card.Img variant="top" src={thnImgActvd1} loading="lazy" />
                  <Card.Body>
                    <Card.Title className="cardTitle">Mountain Bike</Card.Title>
                  </Card.Body>
                </Card>
                <Offcanvas
                  placement="top"
                  show={this.state.mbShow}
                  onHide={this.mbHandleClose}
                  style={{ "background-color": "transparent" }}
                >
                  <Offcanvas.Header closeButton closeVariant="white">
                    <Offcanvas.Title></Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body className="centered-element">
                    <Card.Img variant="top" src={imgActvd1} loading="lazy" />
                  </Offcanvas.Body>
                </Offcanvas>
              </Col>
              <Col sm={12} md={6} className="cardsColumn">
                <Card className="customCard" onClick={this.sndHandleShow}>
                  <Carousel fade controls={false} indicators={false}>
                    <Carousel.Item interval={3000}>
                      <Card.Img
                        variant="top"
                        src={thnImgActvd2}
                        loading="lazy"
                      />
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                      <Card.Img
                        variant="top"
                        src={thnImgActvd3}
                        loading="lazy"
                      />
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                      <Card.Img
                        variant="top"
                        src={thnImgActvd4}
                        loading="lazy"
                      />
                    </Carousel.Item>
                  </Carousel>
                  <Card.Body>
                    <Card.Title className="cardTitle">Senderismo</Card.Title>
                  </Card.Body>
                </Card>
                <Offcanvas
                  placement="top"
                  show={this.state.sndShow}
                  onHide={this.sndHandleClose}
                  style={{ "background-color": "transparent" }}
                >
                  <Offcanvas.Header closeButton closeVariant="white">
                    <Offcanvas.Title></Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body className="centered-element">
                    <Carousel indicators={false} className="centered-element">
                      <Carousel.Item interval={3000}>
                        <Card.Img
                          variant="top"
                          src={imgActvd2}
                          loading="lazy"
                        />
                      </Carousel.Item>
                      <Carousel.Item style={{ "max-width": "35rem" }}>
                        <Card.Img
                          variant="top"
                          src={imgActvd3}
                          loading="lazy"
                        />
                      </Carousel.Item>
                      <Carousel.Item style={{ "max-width": "35rem" }}>
                        <Card.Img
                          variant="top"
                          src={imgActvd4}
                          loading="lazy"
                        />
                      </Carousel.Item>
                    </Carousel>
                  </Offcanvas.Body>
                </Offcanvas>
              </Col>
            </Row>

            <Row className="justify-content-md-center">
              <Col sm={12} md={6} className="cardsColumn">
                <Card className="customCard" onClick={this.cmpHandleShow}>
                  <Carousel fade controls={false} indicators={false}>
                    <Carousel.Item interval={3000}>
                      <Card.Img
                        variant="top"
                        src={thnImgActvd5}
                        loading="lazy"
                      />
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                      <Card.Img
                        variant="top"
                        src={thnImgActvd6}
                        loading="lazy"
                      />
                    </Carousel.Item>
                  </Carousel>
                  <Card.Body>
                    <Card.Title className="cardTitle">Camping</Card.Title>
                  </Card.Body>
                </Card>
                <Offcanvas
                  placement="top"
                  show={this.state.cmpShow}
                  onHide={this.cmpHandleClose}
                  style={{ "background-color": "transparent" }}
                >
                  <Offcanvas.Header closeButton closeVariant="white">
                    <Offcanvas.Title></Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body className="centered-element">
                    <Carousel className="centered-element">
                      <Carousel.Item interval={3000}>
                        <Card.Img
                          variant="top"
                          src={imgActvd5}
                          loading="lazy"
                        />
                      </Carousel.Item>
                      <Carousel.Item interval={3000}>
                        <Card.Img
                          variant="top"
                          src={imgActvd6}
                          loading="lazy"
                        />
                      </Carousel.Item>
                    </Carousel>
                  </Offcanvas.Body>
                </Offcanvas>
              </Col>

              <Col sm={12} md={6} className="cardsColumn">
                <Card className="customCard" onClick={this.rcHandleShow}>
                  <Carousel fade controls={false} indicators={false}>
                    <Carousel.Item interval={5000}>
                      <Card.Img variant="top" src={rc1} loading="lazy" />
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                      <Card.Img variant="top" src={rc3} loading="lazy" />
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                      <Card.Img variant="top" src={rc2} loading="lazy" />
                    </Carousel.Item>
                  </Carousel>
                  <Card.Body>
                    <Card.Title className="cardTitle">
                      Recolección de Café orgánico
                    </Card.Title>
                  </Card.Body>
                </Card>
                <Offcanvas
                  placement="top"
                  show={this.state.rcShow}
                  onHide={this.rcHandleClose}
                  style={{ "background-color": "transparent" }}
                >
                  <Offcanvas.Header closeButton closeVariant="white">
                    <Offcanvas.Title></Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body className="centered-element">
                    <Carousel indicators={false} className="centered-element">
                      <Carousel.Item interval={3000} style={{ "max-width": "60rem" }}>
                        <Card.Img variant="top" src={actidrc1} loading="lazy" />
                      </Carousel.Item>
                      <Carousel.Item interval={3000} style={{ "max-width": "35rem" }}>
                        <video
                          controls
                          width={"100%"}
                        >
                          <source src={rcVid} type="video/mp4" />
                        </video>
                      </Carousel.Item>
                      <Carousel.Item
                        interval={3000}
                        style={{ "max-width": "60rem" }}
                      >
                        <Card.Img variant="top" src={actidrc2} loading="lazy" />
                      </Carousel.Item>
                    </Carousel>
                  </Offcanvas.Body>
                </Offcanvas>
              </Col>
            </Row>
          </Container>
          <Map />
        </div>
        <ScrollToTop id="scroll-to-top" smooth color="white" />
        <Container id="contact">
          <Footer />
        </Container>
      </div>
    );
  }
}

export default App;
