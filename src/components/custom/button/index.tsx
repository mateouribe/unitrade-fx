import React from "react";
import { navigateToPage } from "../../../utils/navigateToPage";
import { useNavigate } from "react-router-dom";

type Props = {
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
  navigateTo: string;
  hasArrow?: boolean;
  hasBackground?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

const Button = ({
  children,
  className,
  onClick,
  navigateTo,
  hasArrow = false,
  hasBackground = false,
  onMouseEnter,
  onMouseLeave,
}: Props) => {
  const navigate = useNavigate();

  return (
    <button
      className={`max-w-fit max-h-fit flex items-center justify-center text-left rounded-30 cursor-pointer text-sm uppercase py-10 px-20 gap-20
      ${className}
      ${
        hasBackground
          ? "bg-main text-black border-none"
          : "bg-transparent border-[1px] border-main text-main"
      }
      `}
      onClick={() => {
        onClick && onClick();
        navigateToPage(navigate, navigateTo);
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
      {hasArrow && (
        <span className="material-symbols-outlined">trending_up</span>
      )}
    </button>
  );
};

export default Button;
