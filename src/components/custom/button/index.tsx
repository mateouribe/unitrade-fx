import React from "react";
import { navigateToPage } from "../../../utils/navigateToPage";
import { useNavigate } from "react-router-dom";

type Props = {
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
  navigateTo: string;
};

const Button = ({ children, className, onClick, navigateTo }: Props) => {
  const navigate = useNavigate();

  return (
    <button
      className={`max-w-fit flex text-left rounded-[10px] cursor-pointer ${className} text-sm uppercase font-light bg-transparent border-[1px] border-main text-main py-10 px-20`}
      onClick={() => {
        onClick && onClick();
        navigateToPage(navigate, navigateTo);
      }}
      //  ref={container}
      //  onMouseEnter={() => {
      //    tl.current.play();
      //  }}
      //  onMouseLeave={() => {
      //    tl.current.reverse();
      //  }}
      //  type={type}
    >
      {children}
    </button>
  );
};

export default Button;
