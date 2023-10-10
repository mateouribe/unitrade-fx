import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

const Title = ({ children, className, style }: Props) => {
  return (
    <h1
      className={`text-black text-titleMobile md:text-titleTablet lg:text-titleDesktop leading-[108.5%] font-medium
       ${className}
       `}
      style={style}
    >
      {children}
    </h1>
  );
};

export default Title;
