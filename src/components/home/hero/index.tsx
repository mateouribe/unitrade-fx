import Button from "../../custom/button";
import Section from "../../custom/section";
import hero_image from "../../../assets/hero_image.png";
import Title from "../../custom/title";
import { useLayoutEffect, useRef, useState } from "react";
import gsap, { Expo } from "gsap";

const Hero = () => {
  const container = useRef<HTMLDivElement | null>(null);
  const buttonTl = useRef<gsap.core.Timeline | null>(null);
  const [isAnimationFinished, setIsAnimationFinished] = useState(false);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: Expo.easeInOut } });

      const heroLines = gsap.utils.toArray(".heroLine");
      gsap.set(".bg-blur", {
        opacity: 0,
      });
      tl.fromTo(
        [heroLines],
        {
          opacity: 0,
          scale: 0.8,
          top: 20,
        },
        {
          opacity: 1,
          scale: 1,
          top: 0,
          duration: 0.8,
          stagger: 0.1,
          delay: 1,
        }
      );

      tl.fromTo(
        ".btn-hero",
        {
          y: 20,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
        },
        "-=.6"
      );

      tl.fromTo(
        [".bg-blur", ".hero-image"],
        {
          opacity: 0,
          scale: 0.95,
        },
        {
          opacity: 0.6,
          scale: 1,
          duration: 0.8,
        },
        "-=.6"
      );
      tl.fromTo(
        ".hero-image",
        {
          opacity: 0,
          scale: 0.95,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          onComplete: () => {
            setIsAnimationFinished(true);
          },
        },
        "-=.5"
      );
    }, container);

    return () => ctx.revert();
  }, []);

  useLayoutEffect(() => {
    if (isAnimationFinished) {
      const ctx = gsap.context(() => {
        buttonTl.current = gsap.timeline({
          paused: true,
        });

        buttonTl.current.fromTo(
          ".bg-blur",
          {
            opacity: 0.6,
          },
          {
            opacity: 1,
            duration: 0.5,
          }
        );
      }, container);

      return () => ctx.revert();
    }
  }, [isAnimationFinished]);

  return (
    <div ref={container}>
      <Section
        className="relative flex flex-col items-center gap-50"
        fullHeightNav
        hasPadding
      >
        <Title className="z-10 text-center text-white heroTitle">
          <span className="relative heroLine">Tu puerta al mundo de las</span>
          <br />
          <span className="relative heroLine">inversiones inteligentes</span>
        </Title>
        <Button
          navigateTo="/"
          hasArrow
          hasBackground
          className="btn-hero z-[10]"
          onMouseEnter={() => {
            buttonTl.current?.play();
            console.log("enter");
          }}
          onMouseLeave={() => {
            buttonTl.current?.reverse();
            console.log("leave");
          }}
        >
          Empezar a generar
        </Button>

        <div className="absolute bottom-0 flex items-center justify-center w-full h-full transform -translate-x-1/2 left-1/2">
          <div className="relative flex items-end justify-center w-full h-full">
            <img
              src={hero_image}
              alt="chart"
              className="w-full md:w-[150%] lg:w-[50%] relative z-[10] hero-image"
            />

            {/* Bg blur */}
            <div className="absolute -bottom-[10%] transform -translate-x-1/2 left-1/2 w-1/2 h-[70%] rounded-full bg-main z-[1] blur-[100px] bg-blur" />
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Hero;
