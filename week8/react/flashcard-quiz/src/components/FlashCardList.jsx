import quizData from "../quizData.js";

import FlashCard from "./FlashCard.jsx";

const FlashCardList = () => {
  const cardsArray = quizData;

  return (
    <div className="flashCardContainer">
      {cardsArray.map((card) => (
        <FlashCard id={card.id} question={card.question} answer={card.answer} />
      ))}
    </div>
  );
};

export default FlashCardList;
