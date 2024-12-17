import "./App.css";
import Carousel from "./components/Carousel";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MainContainer from "./components/MainContaier";

import slide1 from "./assets/slide1.webp";
import slide2 from "./assets/slide2.webp";
import slide3 from "./assets/slide3.webp";

let images = [slide1, slide2, slide3];

function App() {
  return (
    <>
      <Carousel images={images} />
      {/* <Header />
      <Hero />
      <MainContainer /> */}
    </>
  );
}

export default App;
