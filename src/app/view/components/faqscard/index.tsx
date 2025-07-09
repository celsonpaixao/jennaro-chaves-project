import style from "./style.module.css";

const FaqsCard = ({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <div className={style.faqCard}>
      <button className={style.faqButton} onClick={onClick}>
        {question}
        <span>{isOpen ? "−" : "+"}</span>
      </button>
      <div className={`${style.faqAnswer} ${isOpen ? style.open : ""}`}>
        <p>{isOpen ? answer : ""}</p>
      </div>
    </div>
  );
};

export default FaqsCard;
