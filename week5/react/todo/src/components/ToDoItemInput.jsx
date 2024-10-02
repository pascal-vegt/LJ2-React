import { useState } from "react";

const ToDoItemInput = () => {
  const [message, setMessage] = useState([]);
  const [textInput, setTextInput] = useState("");

  let idNumber = 0;

  const updateTextInput = (e) => {
    setTextInput(e.target.value);
  };

  const updateMessage = () => {
    setMessage({
      id: idNumber,
      text: textInput,
    });
  };

  return (
    <div className="todoiteminput">
      <label htmlFor="input">Add Item</label>
      <br />
      <textarea
        name="ToDoInput"
        id="input"
        onChange={updateTextInput}
      ></textarea>
      <input type="button" value="Submit" id="button" onClick={updateMessage} />
    </div>
  );
};

export default ToDoItemInput;
