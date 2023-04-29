import logo from './logo.svg';
import './App.css';

import { BrowserRouter,Routes,Route } from 'react-router-dom';

import Inicio from './componentes/Inicio';

import Header from './componentes/Header';
import Nav from './componentes/Nav';
import Footer from './componentes/Footer';

import Aventura from './generos/Aventura';
import Lucha from './generos/Lucha';
import Rol from './generos/Rol';
import Estrategia from './generos/Estrategia';

import Secciones from './generos/Secciones';
import Top from './paginas/Top';
import Loglos from './paginas/Logros';
import Jefes from './paginas/Jefes';
import Novedades from './paginas/Novedades';

function App() {
  return (
    <div className="App">

      <BrowserRouter>

      <Header/>
      <div className='separar'></div>
      <Routes>
        <Route path='/' element={<Inicio/>}/>
      </Routes>


      <Nav/>
      

      <Routes>
       
        <Route path='aventura' element={<Aventura/>}/>
        <Route path='lucha' element={<Lucha/>}/>
        <Route path='rol' element={<Rol/>}/>
        <Route path='estrategia' element={<Estrategia/>}/>
        
      </Routes>

      <Secciones/>
      <Routes>  
      <Route path='top' element={<Top/>}/>
      <Route path='loglos' element={<Loglos/>}/>
      <Route path='jefes' element={<Jefes/>}/>
      <Route path='novedades' element={<Novedades/>}/>
      </Routes>
      </BrowserRouter>
        
      <Footer/>   
    
    </div>
  );
}

export default App;
