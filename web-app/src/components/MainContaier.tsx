import Actvities from "./Activities";
import Section from "./Section";
import prmt from "../assets/prjct-prmt.mp4";
import mnv from "../assets/mn-v.mp4";
import imgloct from "../assets/imgloct.webp";

import { Element } from "react-scroll";

const childs = [
  {
    child: (
      <Element name="project">
        <h1 className="text-gray-900 ">Vista De Manabao</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-justify content-center">
          <div className="content-center">
            <p>
              Es un proyecto ubicado en la zona de <b>Manabao, Jarabacoa</b>.
              Cuenta con una altura máxima de 1,370 msnm y una altura mínima de
              950 msnm. Está ubicando a tan solo 23 km del municipio de
              Jarabacoa.
            </p>
            <p>
              En un proyecto en desarrollo, la cual contamos con una
              reforestación de Pinus occidentalis “pino criollo” totalmente en
              nuestro proyecto. Abarca una extensión de 5,659,740 mts2, la cual
              lo cataloga como el proyecto más extenso a nivel de Jarabacoa y
              Manabao. Cuenta con 17 arroyos dentro del proyecto.
            </p>
          </div>
          <video className="rounded-lg" src={prmt} controls></video>
        </div>
      </Element>
    ),
  },
  {
    child: (
      <Element
        name="location"
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-justify content-center"
      >
        <img src={imgloct} alt="Manabao" className="rounded-lg" />
        <div className="content-center grid gap-4">
          <div className="text-gray-900 align-to-center">
            <h1>Manabao</h1>
            <h2>"Cerca del cielo"</h2>
          </div>
          <p>
            Es fácil enamorarse de Manabao y caer rendidos ante sus paisajes,
            sus flores y su gente. El distrito municipal, ubicado al oeste de la
            provincia La Vega, con una altura de 877 metros sobre el nivel del
            mar, pertenece al municipio de Jarabacoa, de cuyo centro lo separan
            alrededor de 23 kilómetros. La carretera que los une corre paralela
            al río Yaque del Norte y atraviesa los arroyos Dajao y Grande.
          </p>
          <p>
            Las bellezas naturales que posee Manabao con sus balnearios,saltos y
            montañas, constituye la principal atracción para miles de personas
            que acuden a este lugar intramontañoso a pasar sus días de
            vacaciones. Este lugar se vislumbra como el mejor destino nacional
            para el turismo de aventuras.
          </p>
          <p>
            Manabao se caracteriza por la frescura del clima, la siembra de
            café, vegetales diversos y flores de gran variedad, aquí la magia se
            apodera del visitante.
          </p>
          <p>
            Muchos viajeros admiten que el primer encuentro con Manabao llegó
            cuando aceptaron subir el <b>“Pico Duarte”</b> por la ruta más corta
            y los llevaron al poblado de La Ciénaga, a los pies del Parque
            Nacional J. Armando Bermúdez, de donde parte la excursión de
            aproximadamente 22 kilómetros hasta su cima, localizada a 3,087
            metros sobre el nivel del mar.
          </p>
        </div>
      </Element>
    ),
  },
  {
    child: (
      <div id="gallery">
        <video className="rounded-lg" src={mnv} controls muted />
      </div>
    ),
  },
  {
    child: (
      <Element name="activities">
        <Actvities />
      </Element>
    ),
  },
  {
    child: (
      <Element name="map">
        <p>
          dffsdbfsdfbsdfsdjfsdfsdfsdkjfbskjbdffsdbfsdfbsdfsdjfsdfsdfsdkjfbskjbdffsdbfsdfbsdfsdjfsdfsdfsdkjfbskjb
        </p>
      </Element>
    ),
  },
];

const MainContainer = () => {
  return (
    <div className="main-container text-gray-500 grid gap-16">
      {childs.map((item, index) => (
        <>
          <Section child={item.child} key={index} />
        </>
      ))}
    </div>
  );
};

export default MainContainer;