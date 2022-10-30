import './App.css';
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";  
import ItemDetailContainer from "./components/ItemDetailContainer"; 
import Footer from "./components/Footer"; 
import Cart from "./components/Cart"; 
import Checkout from "./components/Checkout"; 
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartContextProvider } from './context/CartContext';

function App() {
  return (
    <>
    <CartContextProvider>
    <div className='min-h-screen'>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>} />
            <Route path='/category/:id' element={<ItemListContainer/>} />
            <Route path='/item/:id' element={<ItemDetailContainer/>} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/checkout' element={<Checkout/>} />
          </Routes>
        </BrowserRouter>
        <ItemListContainer/>
      </div>
    </CartContextProvider>
    <Footer/>
    </>
  );
}

export default App;
