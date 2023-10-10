import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  noLineHeight?: boolean;
};

const Text = ({ children, className, style, noLineHeight = false }: Props) => {
  return (
    <p
      className={`text-base text-left text-black ${className} ${
        noLineHeight && "leading-[105%]"
      }`}
      style={style}
    >
      {children}
    </p>
  );
};

export default Text;
