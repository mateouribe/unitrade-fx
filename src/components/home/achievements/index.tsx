import Divider from "../divider";
import Subtitle from "../../custom/subtitle";
import Card from "./Card";

const Achievements = () => {
  return (
    <Divider className="flex flex-col items-center justify-between md:flex-row gap-50 md:gap-100">
      <div className="w-full md:w-[40%]">
        <Subtitle className="text-white">
          Lo que hemos
          <br />
          logrado.
        </Subtitle>
      </div>
      <div className="w-full flex flex-col md:flex-row justify-end gap-50 md:gap-100 md:w-[60%]">
        <Card
          text="Miles de usuarios confían en nuestra plataforma."
          number="2K"
        />
        <Card
          text="Nuestros usuarios han ganado 200k+ con solo un click."
          number="200K"
        />
      </div>
    </Divider>
  );
};

export default Achievements;
