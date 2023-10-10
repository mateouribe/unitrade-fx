import { useLayoutEffect, useRef } from "react";
import DesktopContentSection from "./desktop/DesktopContentSection";
import macbook_model from "../../../assets/macbook_model.png";
import gsap, { Expo } from "gsap";
import { ScrollTrigger } from "gsap/all";
import DesktopPhoto from "./desktop/DesktopPhoto";
gsap.registerPlugin(ScrollTrigger);

const Cases = () => {
  const container = useRef(null);

  useLayoutEffect(() => {
    const images = gsap.utils.toArray(".desktopPhoto:not(:first-child)");
    //  const body = document.querySelector("body");
    const mm = gsap.matchMedia();
    gsap.set(images, { yPercent: 100 });

    const ctx = gsap.context(() => {
      const animation = gsap.to(images, {
        yPercent: 0,
        stagger: 0.5,
        ease: Expo.easeOut,
      });

      mm.add("(min-width: 900px)", () => {
        ScrollTrigger.create({
          trigger: container.current,
          start: "top top",
          end: "bottom bottom",
          pin: ".left",
          animation: animation,
          scrub: 2,
        });
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={container} className="bg-black">
      <div className="relative flex gallery">
        {/* left side */}
        <div className="flex flex-col justify-center w-[70%] h-view px-mobile md:px-desktop p-desktop left">
          {/* <!-- add mobile content here--> */}

          <div className="hidden w-full mobileContent py-desktop">
            <div className="flex flex-col w-full gap-30">
              <div className="mobilePhoto w-full h-[80vh] flex flex-col justify-center items-center px-mobile py-tablet gap-20 bg-green-300"></div>
            </div>
            <div className="flex flex-col w-full gap-30">
              <div className="mobilePhoto w-full h-[80vh] flex flex-col justify-center items-center px-mobile py-tablet gap-20 bg-purple-300"></div>
            </div>
            <div className="flex flex-col w-full gap-30">
              <div className="mobilePhoto w-full h-[80vh] flex flex-col justify-center items-center px-mobile py-tablet gap-20 bg-green-300"></div>
            </div>
            <div className="flex flex-col w-full gap-30">
              <div className="mobilePhoto w-full h-[80vh] flex flex-col justify-center items-center px-mobile py-tablet gap-20 bg-blue-300"></div>
            </div>
          </div>

          {/* <!-- desktop content --> */}
          <div className="desktopPhotos w-[100%] h-[45vw] relative rounded-10 flex justify-start items-start max-w-[850px] overflow-hidden">
            {/* Images here */}
            <DesktopPhoto color="#ff00ff" />
            <DesktopPhoto color="#f0f4f3" />
            <DesktopPhoto color="#b1b2b3" />
            <DesktopPhoto color="#00ff00" />

            {/* Macbook */}
            <div
              className="absolute top-0 left-0 w-full h-full z-[999]"
              style={{
                backgroundImage: `url(${macbook_model})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
          </div>
        </div>

        {/* right side */}
        <div className="w-[30%] right">
          {/* Desktop content */}
          <div className="m-auto desktopContent pr-desktop">
            <DesktopContentSection
              title="Rentabilidad Historica"
              text="Nuestros datos muestran un rendimiento impresionante a lo largo del tiempo, respaldado por una estrategia sólida y transparente."
              stats={[
                { stat: "1.5%", title: "Rentabilidad mensual" },
                { stat: "18%", title: "Rentabilidad anual" },
              ]}
            />
            <DesktopContentSection
              title="Rentabilidad Historica"
              text="Nuestros datos muestran un rendimiento impresionante a lo largo del tiempo, respaldado por una estrategia sólida y transparente."
              stats={[
                { stat: "1.5%", title: "Rentabilidad mensual" },
                { stat: "18%", title: "Rentabilidad anual" },
              ]}
            />
            <DesktopContentSection
              title="Rentabilidad Historica"
              text="Nuestros datos muestran un rendimiento impresionante a lo largo del tiempo, respaldado por una estrategia sólida y transparente."
              stats={[
                { stat: "1.5%", title: "Rentabilidad mensual" },
                { stat: "18%", title: "Rentabilidad anual" },
              ]}
            />
            <DesktopContentSection
              title="Rentabilidad Historica"
              text="Nuestros datos muestran un rendimiento impresionante a lo largo del tiempo, respaldado por una estrategia sólida y transparente."
              stats={[
                { stat: "1.5%", title: "Rentabilidad mensual" },
                { stat: "18%", title: "Rentabilidad anual" },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cases;
