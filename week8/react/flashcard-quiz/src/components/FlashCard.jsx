import { useState } from "react";

const FlashCard = ({ answer, question }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [className, setClassName] = useState("flashCardUnPressed");
  const standardClass = "flashCard";


  const flipCard = () => {
    setIsClicked(!isClicked);
    if (className == "flashCardUnPressed") {
      setClassName("flashCardPressed")
    } else {
      setClassName("flashCardUnPressed")
    }
  };

  return (
    <div onClick={flipCard} className={`${standardClass} ${className}`}>
      {isClicked ? <h2>{answer}</h2> : <h2>{question}</h2>}
    </div>
  );
};

export default FlashCard;
