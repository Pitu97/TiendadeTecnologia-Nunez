import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='Catalogo'>
        <ItemListContainer greeting="Bienvenido a mi pagina Coderhouse"/>
        <ItemDetailContainer />
      </div>
    </div>
  );
}

export default App;
