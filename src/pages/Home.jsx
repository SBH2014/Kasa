
import "../public/css/style.css";
import "../public/css/home.css"
import Banner from '../components/Banner';
import Card from '../components/Card';
import Footer from '../components/Footer';
function Home() {
 
    return <div>
     <Banner>
     <div className='banner , banner__home-pic , banner__home h1' >
       <h1 >Chez vous, partout et ailleurs</h1>
      </div>
     </Banner>
        <Card />
        <Footer/>
    </div>;
}
export default Home