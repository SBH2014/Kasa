
import "../public/css/style.css";
import "../public/css/home.css"
import Banner from '../components/Banner';
import Card from '../components/Card';

function Home() {
 
    return <div className="content__rules" >
     <Banner>
     <div className='banner banner__home-pic  banner__home h1' >
       <h1 >Chez vous, partout et ailleurs</h1>
      </div>
     </Banner>
        <Card />

    </div>;
}
export default Home