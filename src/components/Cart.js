import React from 'react'
import { useCart } from '../context/CartContext';

const Cart = () => {
    const {products, clearCart} = useCart()

  return (
    <div>
    <div>Cart</div>
        { products.map( (p,i) => <li key={i}>{p.title}</li>) }
        <button onClick={clearCart}>Limpiar carrito</button>
    </div>
  )
}

export default Cart;