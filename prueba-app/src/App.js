import { Route, Routes, useParams } from 'react-router-dom';
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar.js';
import NotFound from './components/NotFound';

function App() {
  const params = useParams()
  return (
    <div className="App">
      <Navbar />
      <div className='Catalogo'>
        <Routes>
          <Route exact path="/" element={<ItemListContainer />}></Route>
          <Route exact path="/category/:id" element={<ItemListContainer/>}></Route>
          <Route exact path="/item/:id" element={<ItemDetailContainer />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
