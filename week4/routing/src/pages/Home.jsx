import Header from "../components/Header";
import Booklist from "../components/Booklist";
import Layout from "../components/LayOut";

const Home = () => {
  return (
    <>
      <Header/>

      <Layout>
        <Booklist />
      </Layout>
    </>
  );
};

export default Home;
