import Home from '../views/Home';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import About from '../views/About';
import NotFound from '../views/NotFound';
import Housing from '../views/Housing';

function IndexRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/About" element={<About />} />
        <Route exact path="/Housing" element={<Housing />} />
        <Route exact path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate replace to="/404" />} />
      </Routes>
    </BrowserRouter>
  );
}
export default IndexRoutes;