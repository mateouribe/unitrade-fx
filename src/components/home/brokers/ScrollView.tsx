import React from "react";

type Props = {
  background: string;
};

const ScrollView = ({ background }: Props) => {
  return (
    <div
      className="w-[100vw] h-view"
      style={{
        background,
      }}
    ></div>
  );
};

export default ScrollView;
