import Subtitle from "../../custom/subtitle";
import Text from "../../custom/text";

type Props = {
  text: string;
  number: string;
};

const Card = ({ text, number }: Props) => {
  return (
    <div className="flex items-center w-full h-full gap-50 ">
      <Text className="w-[70%] md:w-full text-white relative z-[10]">
        {text}
      </Text>
      <Subtitle className="text-white relative z-[10]">{number}+</Subtitle>
    </div>
  );
};

export default Card;
