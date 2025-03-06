import { useState } from "react";
import style from "./style.module.css";
import data from "../../../../../data/local/faqs.json";
import FaqsCard from "../../../../components/faqscard";
import SectionTitle from "../../../../components/titleLine";

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={style.container}>
      <div className={style.containerHeader}>
        <SectionTitle title="FAQ´s" fontSize="36px" />
        <p>
          Temos o prazer em responder algumas das perguntas mais frequentes. Se
          <br />
          ainda restarem dúvidas, não hesite em contactar-nos.
        </p>
      </div>
      <div className={style.body}>
        {data.faqs.map((faq, index) => (
          <FaqsCard
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={activeIndex === index}
            onClick={() => handleToggle(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Faqs;
