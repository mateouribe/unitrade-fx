import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  fullHeight?: boolean;
  fullHeightNav?: boolean;
  hasPadding?: boolean;
};

const Section = ({
  children,
  className,
  fullHeight = false,
  fullHeightNav = false,
  hasPadding = false,
}: Props) => {
  return (
    <section
      className={`
      ${fullHeight ? "h-view" : "h-auto"} 
      ${
        fullHeightNav
          ? "h-view lg:h-[calc(100vh-90px)] pt-[150px] lg:pt-desktop"
          : "h-full"
      } 
      ${className}
      ${hasPadding && "px-mobile md:px-tablet lg:px-desktop"}
      `}
    >
      {children}
    </section>
  );
};

export default Section;
