import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/detail/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartContextProvider } from './context/CartContext';

function App() {
  return (
    <div>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={'Mas vendidos'}/>}/>
            <Route path='/item/:id' element={<ItemDetailContainer/>}/>
            <Route path='/category/:title' element={<ItemListContainer/>} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
