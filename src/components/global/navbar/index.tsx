// import React, { useState } from "react";
import Link from "../../custom/link";
import Button from "../../custom/button";
import icon from "../../../assets/icon.svg";
// import { useRef } from "react";

const Navbar = () => {
  
  return (
    <nav className="w-full relative z-[200]">
      <ul className="flex-row justify-between hidden w-full lg:flex p-mobile md:px-tablet lg:px-desktop">
        <Link route="/" className="text-black">
          <img className="" src={icon} alt="Samacle icon" />
        </Link>
        <li className="flex gap-30">
          <ul className="flex items-center w-full text-sm text-black gap-30">
            <Link route="/" className="desktopItem">
              Home
            </Link>
            <Link route="/our-brokers" className="desktopItem">
              Brokers
            </Link>
            <Link route="/" className="desktopItem">
              <Button navigateTo="/">Generar</Button>
            </Link>
            <p className="p-3 px-2 m-4 text-lg font-bold text-center"></p>
          </ul>
        </li>
      </ul>

      {/* Mobile */}
      <div className="relative flex items-start justify-end w-full bg-red-100 h-view">
        <div className="mt-20 mr-20 rounded-full w-60 h-60 top-20 right-20 bg-main"></div>
        <div className="absolute top-0 w-full h-full bg-black -right-full"></div>
      </div>

    </nav>
  );
};

export default Navbar;
