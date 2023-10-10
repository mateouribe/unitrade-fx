import { useLayoutEffect, useRef } from "react";
import Section from "../../custom/section";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Observer } from "gsap/all";
import Title from "../../custom/title";
import Button from "../../custom/button";
import transparency from "../../../assets/transparency.png";
import Text from "../../custom/text";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Observer);

const WhyUs = () => {
  const container = useRef(null);

  useLayoutEffect(() => {
    const cards: HTMLDivElement[] = gsap.utils.toArray(".card");
    const spacer = 60;
    const minScale = 0.9;

    const distributor = gsap.utils.distribute({ base: minScale, amount: 0.1 });

    const ctx = gsap.context(() => {
      cards.forEach((card: HTMLDivElement, index: number) => {
        const scaleVal = distributor(index, cards[index], cards);

        //Scale down when stacked
        gsap.to(card, {
          scrollTrigger: {
            trigger: card,
            start: `top top`,
            scrub: true,
            // markers: true,
            invalidateOnRefresh: true,
          },
          ease: "none",
          scale: scaleVal,
        });

        ScrollTrigger.create({
          trigger: card,
          start: `top-=${index * spacer} top`,
          endTrigger: ".cards",
          end: `bottom top+=${150 + cards.length * spacer}`,
          pin: true,
          pinSpacing: false,
          // markers: index === 0 ? true : false,
          id: "pin",
          invalidateOnRefresh: true,
        });
      });
    }, container);

    return () => ctx.revert();
  }, []);

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
        <div className="relative w-full h-full cards">
          <div className="h-[80vh] w-full bg-red-300 card rounded-30"></div>
          <div className="h-[80vh] w-full bg-green-400 card rounded-30"></div>
          <div className="h-[80vh] w-full bg-blue-300 card rounded-30"></div>
          <div className="h-[80vh] w-full bg-orange-300 card rounded-30"></div>
          <div className="h-auto w-full bg-[#000] card rounded-30 p-50 flex flex-col gap-100 justify-start z-[999] relative py-100">
            <div className="flex flex-col gap-30">
              <Title className="font-black text-white">
                Estrategia comprobada
              </Title>
              <Text className="text-white w-[50%]">
                Mantenemos una política de total transparencia, proporcionando a
                los clientes información clara sobre su inversión y resultados.
                Mantenemos una política de total transparencia, proporcionando a
                los clientes información clara sobre su inversión y resultados.
              </Text>
            </div>
            <Button navigateTo="/" hasBackground hasArrow>
              Empezar a generar
            </Button>

            <div className="absolute bottom-0 right-0 w-[40%] h-auto px-100">
              <img src={transparency} />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default WhyUs;
