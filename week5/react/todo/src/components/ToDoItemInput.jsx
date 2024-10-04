import { useState } from "react";

const ToDoItemInput = ({ onAddItem }) => {
  const [inputValue, setInputValue] = useState("");

  const handleAddItem = () => {
    if (inputValue.trim() === "") return;
    const newItem = {
      id: Date.now(),
      text: inputValue,
      completed: false,
    };
    onAddItem(newItem);
    setInputValue("");
  };

  return (
    <div className="todo-item-input">
      <input
        type="text"
        placeholder="What to do?"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className="add-button" onClick={handleAddItem}>+</button>
    </div>
  );
};

export default ToDoItemInput;
