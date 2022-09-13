import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/detail/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CategoriesContainer from './components/categories/CategoriesContainer';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        {/* <ItemDetailContainer/> */}
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={'Mas vendidos'}/>}/>
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>
          <Route path='/category/:title' element={<CategoriesContainer/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
