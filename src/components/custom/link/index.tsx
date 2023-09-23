import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { navigateToPage } from "../../../utils/navigateToPage";

type Props = {
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
  route: string;
};

const Link = ({ className, onClick, children, route }: Props) => {
  const navigate = useNavigate();
  const container = useRef(null);

  return (
    <li
      onClick={() => {
        onClick && onClick();
        navigateToPage(navigate, route);
      }}
      className={`${className} cursor-pointer`}
      ref={container}
    >
      {children}
    </li>
  );
};

export default Link;
