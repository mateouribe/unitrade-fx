import Button from "../../custom/button";
import Section from "../../custom/section";
import hero_image from "../../../assets/hero_image.png";
import Title from "../../custom/title";
import { useRef } from "react";
// import gsap, { Expo } from "gsap";

const Hero = () => {
  const container = useRef<HTMLDivElement | null>(null);

  // useLayoutEffect(() => {
  //   const ctx = gsap.context(() => {
  //     const tl = gsap.timeline({ defaults: { ease: Expo.easeOut } });

  //     const heroLines = gsap.utils.toArray(".heroLine");
  //     tl.fromTo(
  //       heroLines.reverse(),
  //       {
  //         opacity: 0,
  //         top: 40,
  //       },
  //       {
  //         opacity: 1,
  //         top: 0,
  //         duration: 0.5,
  //         stagger: 0.1,
  //         delay: 1,
  //       }
  //     );
  //   }, container);

  //   return () => ctx.revert();
  // }, []);

  return (
    <div ref={container}>
      <Section
        className="relative flex flex-col items-center gap-50"
        fullHeightNav
        hasPadding
      >
        <Title className="text-center text-white heroTitle">
          <span className="relative heroLine">Tu puerta al mundo de las</span>
          <br />
          <span className="relative heroLine">inversiones inteligentes</span>
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
    </div>
  );
};

export default Hero;
