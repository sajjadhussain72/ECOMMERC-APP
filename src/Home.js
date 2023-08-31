import FeatureProduct from "./components/FeatureProduct";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Trusted from "./components/Trusted";

const Home = () => {
  const data = {
    name: "HUSSAIN STORE",
  };
  const image = {
    image:"images/istockphoto-1193353836-612x612.jpg"
    
  }
  const par ={
    par:"Hussain Store offers a diverse range of high-quality products, providing customers with a seamless shopping experience. Discover unique items that cater to various needs and preferences."
  }
  return (
    <>
      <HeroSection myData={data}  ImgData={image}  PData={par} />
      <FeatureProduct />
      <Services />
      <Trusted />
    </>
  );
};

export default Home;