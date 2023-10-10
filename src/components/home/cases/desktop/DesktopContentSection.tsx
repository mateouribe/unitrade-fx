import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Subtitle from "../../../custom/subtitle";
import Text from "../../../custom/text";
gsap.registerPlugin(ScrollTrigger);

type Props = {
  title: string;
  text: string;
  className?: string;
  stats: [
    {
      title: string;
      stat: string;
    },
    {
      title: string;
      stat: string;
    }
  ];
};
const DesktopContentSection = ({
  title,
  text,
  className = "",
  stats,
}: Props) => {
  const container = useRef(null);

  return (
    <div
      className={`flex flex-col justify-center h-view py-desktop gap-100 ${className}`}
      ref={container}
    >
      {/* Text */}
      <div className="flex flex-col w-full gap-20">
        <Subtitle className="text-white">{title}</Subtitle>
        <Text className="text-gray">{text}</Text>
      </div>

      {/* Stats */}
      <div className="flex flex-col gap-40">
        {stats.map((stat, index) => (
          <div className="flex flex-col gap-10" key={index}>
            <Subtitle className="text-main">{stat.stat}</Subtitle>
            <Text className="text-white">{stat.title}</Text>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DesktopContentSection;
