import './App.css';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting="Bienvenido a mi pagina Coderhouse"/>
    </div>
  );
}

export default App;
