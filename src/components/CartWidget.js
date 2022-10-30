import { HiShoppingBag } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartWidget = () => {

  const { cartLength } = useContext(CartContext)

  return (
    <div>
      <Link to='/cart' className="group -m-2 flex items-center">
        <HiShoppingBag className="h-5 w-5 text-white"/>
        
        {cartLength() > 0 && (
          <span className="ml-2 text-sm font-medium text-white">{cartLength()}</span>
        )}
      </Link>
    </div>
  );
}

export default CartWidget;