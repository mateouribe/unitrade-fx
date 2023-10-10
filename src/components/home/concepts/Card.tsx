import Title from "../../custom/title";
import Text from "../../custom/text";
import Button from "../../custom/button";

type Props = {
  className?: string;
  img: string;
  title: string;
  description: string;
  leftText?: boolean;
};

const Card = ({
  className,
  img,
  title,
  description,
  leftText = false,
}: Props) => {
  return (
    <div
      className={`px-mobile md:px-tablet lg:px-desktop py-desktop relative ${className} overflow-hidden flex flex-col lg:flex-row gap-50 bg-white justify-end items-center lg:items-end`}
    >
      <div
        className={`w-full md:w-[70%] h-full flex flex-col gap-100 p-tablet border-[1px] border-gray rounded-10 
        ${!leftText ? "order-2 lg:order-2" : "order-2 lg:order-1"}
      }`}
      >
        <div className="flex flex-col w-full gap-40">
          <Title className="font-normal text-black">{title}</Title>
          <Text className="z-[2] text-black">{description}</Text>
        </div>
        <Button navigateTo="/contact" hasArrow hasBackground>
          Empezar a generar
        </Button>
      </div>

      <div
        className={`w-1/2 md:w-[30%] h-auto
      ${!leftText ? "order-1 lg:order-1" : "oreder-1 lg:order-2"}
      `}
      >
        <img src={img} />
      </div>
    </div>
  );
};

export default Card;
