import Header from "./components/Header";
import "./App.css";
import Booklist from "./components/Booklist";
import Layout from "./components/LayOut";
import { useState } from "react";

function App() {

const [todo, setTodo] = useState([])
const [textInput, setTextInput] = useState("")

setMessage(textInput)

  return (
    <> 

      <Header
        image="navbar image"
        title="titel"
        text1="home"
        text2="about"
        text3="contact"
      />
      <h1>hello world</h1>
      <h2>jason derulo is de beste docent</h2>

      <Layout>
        <Booklist />
      </Layout>
      <h2>jason is jason</h2>
      <button>Click marc</button>
    </>
  );
}

export default App;
