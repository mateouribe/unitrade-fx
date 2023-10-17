import Divider from "../divider";
import Subtitle from "../../custom/subtitle";
import Card from "./Card";

const Achievements = () => {
  return (
    <Divider className="flex flex-col items-center justify-between md:flex-row gap-50 md:gap-100">
      <div className="w-full md:w-[30%]">
        <Subtitle className="text-white z-[10] relative">
          Lo que hemos
          <br />
          logrado.
        </Subtitle>
      </div>
      <div className="w-full flex flex-col md:flex-row justify-end items-center gap-50 md:gap-100 md:w-[70%]">
        <Card
          text="Miles de usuarios confían en nuestra plataforma."
          number="2.000"
        />
        <Card
          text="Nuestros usuarios han ganado 200k+ con solo un click."
          number="200.000"
        />
      </div>
    </Divider>
  );
};

export default Achievements;
