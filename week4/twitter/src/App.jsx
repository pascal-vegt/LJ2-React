import "./App.css";
import CreateMessage from "./components/CreateMessage";
import MessageList from "./components/MessageList";

function App() {
  let name = "jason";
  let message = "first message";
  return (
    <>
      <CreateMessage />
      <MessageList name={name} message={message} />
    </>
  );
}

export default App;
