import Button from "../../custom/button";
import Section from "../../custom/section";
import hero_image from "../../../assets/hero_image.png";
import Title from "../../custom/title";

const Hero = () => {
  return (
    <Section
      className="relative flex flex-col items-center gap-50"
      fullHeightNav
      hasPadding
    >
      <Title className="text-center text-white">
        Tu puerta al mundo de las
        <br />
        inversiones inteligentes
      </Title>
      <Button navigateTo="/" hasArrow hasBackground>
        Empezar a generar
      </Button>

      <div className="absolute bottom-0 flex items-center justify-center w-full transform -translate-x-1/2 left-1/2">
        <img
          src={hero_image}
          alt="chart"
          className="w-full md:w-[150%] lg:w-[60%] "
        />
      </div>
    </Section>
  );
};

export default Hero;
