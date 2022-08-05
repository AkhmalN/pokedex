import './App.css';
import { Navbar, Footer } from './layouts';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, Pokemon, AboutUs, PokemonSlider, Detailpoke} from './pages';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon" element={<Pokemon />} />
          <Route path="/pokemon/:id" element={<Detailpoke/>} />
          <Route path="/AboutUs" element={<AboutUs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
