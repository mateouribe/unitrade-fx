import Text from "../../custom/text";
import Button from "../../custom/button";

type Props = {
  title: string;
  description: string;
  backgroundColor: string;
  textColor: string;
  image: string;
  className?: string;
};

const Card = ({
  title,
  description,
  backgroundColor,
  textColor,
  image,
  className,
}: Props) => {
  return (
    <div
      className={`relative flex flex-col lg:flex-row justify-between w-full h-full card rounded-40 ${className}`}
      style={{
        backgroundColor,
      }}
    >
      {/* Text */}
      <div className="w-full lg:w-[60%] min-h-[50vh] p-mobile md:p-tablet lg:p-desktop flex flex-col justify-between">
        <div className="flex flex-col gap-30">
          <h4
            className="text-[30px] md:text-[35px] lg:text-[45px] text-left font-medium"
            style={{
              color: textColor,
            }}
          >
            {title}
          </h4>
          <Text
            style={{
              color: textColor,
            }}
            className="text-[18px]"
          >
            {description}
          </Text>
        </div>
        <Button navigateTo="/" hasArrow hasBackground>
          Empezar a generar
        </Button>
      </div>

      {/* Image */}
      <div className="p-10 w-full lg:w-[40%] min-h-[30vh] ">
        <img className="w-full h-full rounded-30" src={image} />
      </div>
    </div>
  );
};

export default Card;
