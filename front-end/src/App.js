import logo from './logo.svg';
import './App.css';

import { BrowserRouter,Routes,Route } from 'react-router-dom';

import Header from './componentes/Header';
import Nav from './componentes/Nav';
import Footer from './componentes/Footer';

import Aventura from './generos/Aventura';
import Lucha from './generos/Lucha';
import Rol from './generos/Rol';
import Estrategia from './generos/Estrategia';

function App() {
  return (
    <div className="App">

      <BrowserRouter>

      <Header/>
      <div className='separar'></div>
      <Nav/>
      <Routes>
        <Route path='aventura' element={<Aventura/>}/>
        <Route path='lucha' element={<Lucha/>}/>
        <Route path='rol' element={<Rol/>}/>
        <Route path='estrategia' element={<Estrategia/>}/>

      </Routes>
      </BrowserRouter>
      
      <Footer/>      

    </div>
  );
}

export default App;
