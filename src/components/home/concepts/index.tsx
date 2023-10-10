import Card from "./Card";
import copy_concept from "../../../assets/copy_concept.png";
import strategy_concept from "../../../assets/strategy_concept.png";

const Concepts = () => {
  return (
    <section>
      <Card
        img={copy_concept}
        title="¿Qué es copy trading?"
        description="El copy trading es una estrategia de inversión popular en los
  mercados financieros, especialmente en el contexto de las
  plataformas de trading en línea. Permite a los inversores
  individuales copiar automáticamente las operaciones (compra y venta
  de activos) realizadas por traders profesionales o experimentados."
        leftText
      ></Card>
      <Card
        img={strategy_concept}
        title="Nuestra estrategia"
        description="Con un enfoque sólido en la seguridad y la confiabilidad, nuestra estrategia de Copytrading se basa en los principios del SmartMoney. Le ofrecemos la oportunidad de seguir a traders experimentados de manera automatizada, asegurando un crecimiento constante de su inversión. Siempre respaldado por la experiencia de profesionales para alcanzar sus metas financieras de manera inteligente y eficiente."
      ></Card>
    </section>
  );
};

export default Concepts;
