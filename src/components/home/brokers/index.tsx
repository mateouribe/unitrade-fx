import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import ScrollView from "./ScrollView";
import { colors } from "../../../utils/constants";
gsap.registerPlugin(ScrollTrigger);

const Brokers = () => {
  const triggerRef = useRef(null);
  const desktopContainer = useRef(null);

  useLayoutEffect(() => {
    const createPin = () => {
      const pin = gsap.fromTo(
        desktopContainer.current,
        {
          translateX: 0,
        },
        {
          translateX: -window.innerWidth * 3,
          ease: "none",
          duration: 1,
          scrollTrigger: {
            trigger: triggerRef.current,
            scrub: 0,
            pin: true,
            start: "top top",
            end: `+=300%`,
          },
        }
      );
      return () => {
        pin.kill();
      };
    };

    const cleanup = createPin();
    return cleanup;
  }, []);

  return (
    <section className="overflow-hidden">
      <div ref={triggerRef}>
        {/* <!-- desktop --> */}
        <div
          className="w-[400vw] h-view lg:flex flex-row relative hidden"
          ref={desktopContainer}
        >
          <ScrollView background={colors.axi} />
          <ScrollView background={colors.black} />
          <ScrollView background={colors.mql5} />
          <ScrollView background={colors.main} />
        </div>
      </div>
    </section>
  );
};

export default Brokers;
