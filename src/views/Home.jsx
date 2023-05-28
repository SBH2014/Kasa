import Header from "../components/Header";
import Banner from "../components/Banner";
import Card from "../components/Card";
import Footer from "../components/Footer";
import "../styles/pages/_home.scss";

function Home() {
  return (
    <>
      <div className="content__rules">
        <Header />
        <Banner bannerClass="banner__home-pic banner__home ">
          <h1>Chez vous, partout et ailleurs</h1>
        </Banner>
        <Card />
      </div>
      <Footer />
    </>
  );
}
export default Home;
