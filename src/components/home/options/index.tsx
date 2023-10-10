import Divider from "../divider";
import Title from "../../custom/title";
import Button from "../../custom/button";
import brokers from "../../../assets/brokers.svg";

const Options = () => {
  return (
    <Divider
      className="flex flex-col items-start justify-between gap-100 px-mobile md:px-tablet lg:px-desktop"
      noPadding
    >
      <div className="flex flex-col items-start w-full lg:items-end lg:flex-row gap-30 lg:gap-100 py-tablet">
        <Title className="font-normal text-white">
          ¡Tú escoges con
          <br />
          quien trabajar!
        </Title>
        <div>
          <div className="inline-block mr-20">
            <Button hasArrow hasBackground navigateTo="/">
              Empezar a generar
            </Button>
          </div>
          <a className="inline-block text-white underline">Conocer brokers</a>
        </div>
      </div>
      <img src={brokers} className="w-full h-full" />
    </Divider>
  );
};

export default Options;
