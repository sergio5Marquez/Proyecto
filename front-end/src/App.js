import logo from './logo.svg';
import './App.css';

import Header from './componentes/layout/Header';
import Nav from './componentes/layout/Nav';
import Footer from './componentes/layout/Footer';

function App() {
  return (
    <div className="App">
      <>(header)</>
      <Header/>
      <>(Nav)</>
      <Nav></Nav>
      <>(Footer)</>
      <Footer/>     

    </div>
  );
}

export default App;
