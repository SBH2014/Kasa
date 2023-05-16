
import Header from '../Layout/Header';
import Banner from '../Layout/Banner';
import Card from '../components/Card';
import Footer from '../Layout/Footer';
import "../styles/pages/_home.scss";

function Home() {

  return (
    <>
      <div className="content__rules" >
        <Header />
        <Banner>
          <div className='banner banner__home-pic  banner__home h1' >
            <h1 >Chez vous, partout et ailleurs</h1>
          </div>
        </Banner>
        <Card />

      </div>
      <Footer />
    </>
  )

}
export default Home