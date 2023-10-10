import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Subtitle = ({ children, className }: Props) => {
  return (
    <h3
      className={`
      text-black text-subtitleMobile md:text-subtitle-tablet lg:text-subtitleDesktop leading-[103.5%]
     ${className}
     `}
    >
      {children}
    </h3>
  );
};

export default Subtitle;
