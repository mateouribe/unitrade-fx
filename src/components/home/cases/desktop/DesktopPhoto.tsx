type Props = {
  color: string;
};

const DesktopPhoto = ({ color }: Props) => {
  return (
    <div
      className="desktopPhoto absolute w-[98%] h-[86%] top-[6%] left-1/2 transform -translate-x-1/2 z-[1]"
      style={{
        backgroundColor: color,
      }}
    ></div>
  );
};

export default DesktopPhoto;
