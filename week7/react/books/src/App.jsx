import Header from "./components/Header";
import "./App.css";
import Booklist from "./components/Booklist";
import Layout from "./components/LayOut";
import { useState } from "react";

function App() {

  return (
    <>
      <Header
        text1="home"
        text2="about"
        text3="contact"
      />

      <Layout>
        <Booklist />
      </Layout>
    </>
  );
}

export default App;
