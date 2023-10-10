import { useRef } from "react";
import Divider from "../divider";
import Title from "../../custom/title";
import Text from "../../custom/text";
import Button from "../../custom/button";
import Lines from "./lines";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Earnings = () => {
  const container = useRef(null);

  return (
    <div ref={container}>
      <Divider
        className="relative bg-white py-[100px] px-mobile md:px-tablet lg:px-desktop"
        noPadding
      >
        <div className="w-full md:w-[70%] h-full flex flex-col gap-100 ">
          <div className="flex flex-col w-full gap-40">
            <Title className="font-normal z-[10]">
              Nosotros nos encargamos
              <br />
              de tus ganancias.
            </Title>
            <Text className="w-[70%] z-[10]">
              Al acceder a nuestros servicios tendrás la posibilidad de generar
              ingresos pasivos con un solo click.{" "}
              <a className="relative" href="#">
                Empieza ahora!{" "}
                <span className="absolute bottom-[1px] left-0 w-full h-[2px] bg-main"></span>
              </a>
            </Text>
          </div>
          <Button
            navigateTo="/contact"
            className="z-[10]"
            hasArrow
            hasBackground
          >
            Empezar a generar
          </Button>
        </div>

        {/* Lines background */}
        <div className="absolute bottom-0 left-0 w-full h-full z-[1]">
          <Lines />
        </div>
      </Divider>
    </div>
  );
};

export default Earnings;
