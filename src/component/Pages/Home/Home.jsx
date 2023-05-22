import AboutSection from "./About/AboutSection";
import HeaderSlider from "./HeroSection/HeaderSlider";
import Service from "./Services/Service";
import TabCategory from "./TabCategory/TabCategory";

const Home = () => {
  return (
    <div>
      <HeaderSlider></HeaderSlider>
      <AboutSection></AboutSection>
      <TabCategory></TabCategory>
      <Service></Service>
    </div>
  );
};

export default Home;
