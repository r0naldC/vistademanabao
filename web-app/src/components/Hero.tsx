import slide1 from "../assets/slide1.webp";
import slide2 from "../assets/slide2.webp";
import slide3 from "../assets/slide3.webp";
import CustomCarousel from "./Carousel";

const images = [slide1, slide2, slide3];

const Hero = () => {
  return (
    <>
      <div className="custom-hero bg-white" id="home">
        <CustomCarousel images={images} />
      </div>
    </>
  );
};

export default Hero;
