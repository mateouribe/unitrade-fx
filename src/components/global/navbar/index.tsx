import { useLayoutEffect, useRef, useState } from "react";
import Link from "../../custom/link";
import Button from "../../custom/button";
import icon from "../../../assets/icon.svg";
import icon_white from "../../../assets/icon-white.svg";
import gsap, { Expo } from "gsap";

const Navbar = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const mobileContainer = useRef<HTMLDivElement | null>(null);
  const mobileTl = useRef<gsap.core.Timeline | null>(null);

  //Mobile animation
  useLayoutEffect(() => {
    const items = gsap.utils.toArray(".mobileItem");
    // const splitMobileItems = [];
    // items.forEach((item) => {
    //   const split = new SplitText(item, {
    //     type: "words",
    //   });

    //   splitMobileItems.push(split.words);
    // });

    const ctx = gsap.context(() => {
      mobileTl.current = gsap.timeline({ paused: true });

      // Burger animation
      mobileTl.current
        .to(".lineTop", { duration: 0.2, y: 5 })
        .to(".lineBottom", { duration: 0.2, y: -5 }, "<")
        .to(".lineTop", { duration: 0.5, rotate: 45 })
        .to(".lineBottom", { duration: 0.5, rotate: -45 }, "<");

      // Mobile menu animation
      mobileTl.current.to(
        ".mobileContentContainer",
        {
          duration: 0.5,
          right: 0,
          ease: Expo.easeInOut,
        },
        "-=0.5"
      );

      // Mobile menu items animation
      mobileTl.current.fromTo(
        items,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
        }
      );
    }, mobileContainer);

    return () => ctx.revert();
  }, []);

  const toggleMobileMenu = (): void => {
    setIsMenuOpened(!isMenuOpened);
    if (isMenuOpened) {
      mobileTl.current?.reverse();
      mobileTl.current?.duration(0.5);
    } else {
      mobileTl.current?.play();
      mobileTl.current?.duration(1.5);
    }
    console.log(mobileTl.current?.duration());
  };

  return (
    <nav className="w-full relative z-[200]">
      <ul className="flex-row justify-between hidden w-full lg:flex p-mobile md:px-tablet lg:px-desktop">
        <Link route="/" className="text-white">
          <img className="" src={icon_white} alt="Samacle icon" />
        </Link>
        <li className="flex gap-30">
          <ul className="flex items-center w-full text-sm text-white gap-30">
            <Link route="/" className="desktopItem" underline>
              Home
            </Link>
            <Link route="/our-brokers" className="desktopItem" underline>
              Brokers
            </Link>
            <Link route="/" className="desktopItem">
              <Button navigateTo="/">Generar</Button>
            </Link>
          </ul>
        </li>
      </ul>

      {/* Mobile */}
      <div
        className="fixed flex items-start justify-end w-full lg:hidden"
        ref={mobileContainer}
      >
        {/* Burger icon */}
        <div
          className="flex flex-col items-center justify-center gap-5 p-10 mt-20 mr-20 rounded-full w-60 h-60 top-20 right-20 bg-main z-[999]"
          onClick={toggleMobileMenu}
        >
          <span className="w-full h-[5px] bg-white rounded-[10px] lineTop origin-center"></span>
          <span className="w-full h-[5px] bg-white rounded-[10px] lineBottom origin-center"></span>
        </div>

        {/* Menu container */}
        <div className="absolute top-0 flex flex-col w-full bg-white h-view -right-full mobileContentContainer p-50 gap-100">
          <ul>
            {" "}
            <Link route="/" className="text-black mobileItem">
              <img className="" src={icon} alt="Samacle icon" />
            </Link>
          </ul>

          <ul className="flex flex-col w-full h-full gap-20">
            <Link
              route="/"
              className="text-black text-[30px] border-b-[1px] border-white/20 mobileItem"
            >
              Home
            </Link>
            <Link
              route="/"
              className="text-black text-[30px] border-b-[1px] border-white/20 mobileItem"
            >
              Brokers
            </Link>
            <Link route="/" className="desktopItem mobileItem">
              <Button navigateTo="/" className="text-[30px] ">
                Generar
              </Button>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
