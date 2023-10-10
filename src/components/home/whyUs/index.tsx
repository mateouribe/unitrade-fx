import { useLayoutEffect, useRef } from "react";
import Section from "../../custom/section";
import gsap, { Expo } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Observer } from "gsap/all";
import Title from "../../custom/title";
import Card from "./Card";
import { colors } from "../../../utils/constants";
import black_why_us2 from "../../../assets/black_why_us2.png";
import white_why_us1 from "../../../assets/white_why_us1.png";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Observer);

const WhyUs = () => {
  const container = useRef(null);

  useLayoutEffect(() => {
    const cards: HTMLDivElement[] = gsap.utils.toArray(".card");
    const spacer = 60;
    const minScale = 0.85;

    const distributor = gsap.utils.distribute({ base: minScale, amount: 0.1 });

    const ctx = gsap.context(() => {
      cards.forEach((card: HTMLDivElement, index: number) => {
        const scaleVal = distributor(index, cards[index], cards);

        //Scale down when stacked
        gsap.to(card, {
          scrollTrigger: {
            trigger: card,
            start: `top top`,
            scrub: 2.5,
            invalidateOnRefresh: true,
          },
          ease: Expo.easeOut,
          scale: scaleVal,
        });

        ScrollTrigger.create({
          trigger: card,
          start: `top-=${index * spacer} top`,
          endTrigger: ".cards",
          end: `bottom top+=${150 + cards.length * spacer}`,
          pin: true,
          pinSpacing: false,
          id: "pin",
          invalidateOnRefresh: true,
        });
      });
    }, container);

    return () => ctx.revert();
  }, []);

  const white = colors.white;
  const black = colors.black;

  return (
    <div ref={container}>
      {/* Container */}
      <Section
        hasPadding
        className="flex flex-col items-center gap-50 justify-center w-full bg-black pt-desktop pb-[300px]"
      >
        <Title className="self-start font-normal text-left text-white just">
          ¿Por qué escogernos?
        </Title>
        {/* Cards */}
        <div className="relative flex flex-col w-full h-full cards gap-100">
          <Card
            backgroundColor={white}
            textColor={black}
            description="Nuestra estrategia de SmartMoney ha demostrado ser efectiva en la generación de ganancias de manera constante."
            title="Estratégia comprobada"
            image={white_why_us1}
          />
          <Card
            backgroundColor="#000"
            textColor={white}
            description="Nuestra estrategia de SmartMoney ha demostrado ser efectiva en la generación de ganancias de manera constante."
            title="Estratégia comprobada"
            image={black_why_us2}
          />
          <Card
            backgroundColor={white}
            textColor={black}
            description="Nuestra estrategia de SmartMoney ha demostrado ser efectiva en la generación de ganancias de manera constante."
            title="Estratégia comprobada"
            image={white_why_us1}
          />
          <Card
            backgroundColor="#000"
            textColor={white}
            description="Nuestra estrategia de SmartMoney ha demostrado ser efectiva en la generación de ganancias de manera constante."
            title="Estratégia comprobada"
            image={black_why_us2}
            className="lg:z-[100]"
          />
        </div>
      </Section>
    </div>
  );
};

export default WhyUs;
