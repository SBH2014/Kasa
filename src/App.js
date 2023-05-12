
import Home from './pages/Home';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Apropos from './pages/Apropos';
import Header from './components/Header';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';
import Logement from './pages/Logement';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
        <Route exact path="/"  element={<Home/>}/>
        <Route exact path="/Apropos/"  element={<Apropos/>}/>
        <Route exact path="/Logement"  element={<Logement/>}/>
        <Route   path="*" element={<NotFound/>}/>

    </Routes>
    <Footer/>


</BrowserRouter>
  );
}

export default App;
