import './App.css';
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";  
import ItemDetailContainer from "./components/ItemDetailContainer"; 
import Footer from "./components/Footer"; 
import Cart from "./components/Cart"; 
import Checkout from "./components/Checkout"; 
import { HashRouter, BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartContextProvider } from './context/CartContext';

function App() {
  return (
    <>
    <CartContextProvider>
    <div className='min-h-screen'>
        <HashRouter> {/*Se reemplazo BrowserRouter por Hash para hacer deploy en Github Pages*/}
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>} />
            <Route path='/ProyectoFinal-Ricci' element={<ItemListContainer/>} />
            <Route path='/category/:id' element={<ItemListContainer/>} />
            <Route path='/item/:id' element={<ItemDetailContainer/>} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/checkout' element={<Checkout/>} />
          </Routes>
        </HashRouter>
      </div>
    </CartContextProvider>
    <Footer/>
    </>
  );
}

export default App;
