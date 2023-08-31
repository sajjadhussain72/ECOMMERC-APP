import HeroSection from "./components/HeroSection";
import { useProductContext } from "./context/productcontex";

const About = () => {
  const { myName } = useProductContext();

  const data = {
    name: "MUGHAL STORE",
  };
  const image = {
    image:"images/200423151747-ramadan-gallery.jpg"
    
  };
  const par ={
    par: "Mughal Store: Timeless Elegance. Offering a curated collection of exquisite artifacts, textiles, and craftsmanship, embodying the rich legacy and opulence of the Mughal era. Experience history, redefined."
  }
  return (
    <div>
      {myName}
      <HeroSection myData={data}  ImgData={image} PData={par} />
      <h2>sajjad hussain</h2>
      </div>
  )
  }

export default About;