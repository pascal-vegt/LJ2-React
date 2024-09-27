import { useState } from "react";
import "./App.css";
import CreateMessage from "./components/CreateMessage";
import MessageList from "./components/MessageList";
import Message from "./components/Message";

function App() {
  const [message, setMessage] = useState([]);
  const [textInput, setTextInput] = useState("");
  let name = "jason";

  const userInputHandler = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addMessage("jason", message); // Assuming the name is "jason" for now
    setMessage(""); // Clear the textarea after adding the message
  };


  return (
    <>
      <CreateMessage
        onSubmit={handleSubmit}
        textInput={textInput}
        setTextInput={setTextInput}
        value={Message}
        setMessage={setMessage}
      />
      <MessageList name={name} message={message} />
    </>
  );
}

export default App;
