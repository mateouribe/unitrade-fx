import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  noPadding?: boolean;
};

const Divider = ({ children, className, noPadding = false }: Props) => {
  return (
    <div
      className={`w-full min-h-[30vh] overflow-hidden 
    ${className}
    ${!noPadding && "py-tablet px-mobile md:px-tablet lg:px-desktop"}
    `}
    >
      {children}
    </div>
  );
};

export default Divider;
