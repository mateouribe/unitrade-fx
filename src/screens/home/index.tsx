import Hero from "../../components/home/hero";
import Concepts from "../../components/home/concepts";
import WhyUs from "../../components/home/whyUs";
import Cases from "../../components/home/cases";
import Achievements from "../../components/home/achievements";
import Earnings from "../../components/home/earnings";
import Options from "../../components/home/options";
import Brokers from "../../components/home/brokers";

const Home = () => {
  return (
    <div>
      <Hero />
      <Achievements />
      <Concepts />
      <WhyUs />
      <Earnings />
      <Cases />
      <Options />
      <Brokers />
      <div className="w-full h-[100vh] bg-black">OB</div>
    </div>
  );
};

export default Home;
