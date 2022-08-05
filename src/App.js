import './App.css';
import { Navbar, Footer } from './layouts';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, Pokemon, AboutUs, Detailpoke,ErrorPage} from './pages';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducers } from './bootstraps'

function App() {
const store = createStore(reducers);
  return (
    <div>
      <Provider store ={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon" element={<Pokemon />} />
          <Route path="/pokemon/:id" element={<Detailpoke/>} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path='/*' element = {<ErrorPage/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
