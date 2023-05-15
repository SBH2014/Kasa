
import Home from './pages/Home';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import About from './pages/About';
import Header from './components/Header';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';
import Housing from './pages/Housing';
import "./styles/main.scss"


function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
        <Route exact path="/"  element={<Home/>}/>
        <Route exact path="/About"  element={<About/>}/>
        <Route exact path="/Logement"  element={<Housing/>}/>
        <Route exact path="/404"  element={<NotFound/>}/>
        <Route path="*" element={<Navigate replace to="/404"/>}/>

    </Routes>
    <Footer/>


</BrowserRouter>
  );
}

export default App;
