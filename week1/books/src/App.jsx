import Header from "./components/Header";
import "./App.css";
import Booklist from "./components/Booklist";
import Layout from "./components/LayOut";

function App() {
  return (
    <>
      <Header
        image="navbar image"
        title="titel"
        text1="home"
        text2="abouot"
        text3="contact"
      />
      <h1>hello world</h1>
      <h2>jason derulo is de beste docent</h2>

      <Layout>
        <Booklist />
      </Layout>
    </>
  );
}

export default App;
