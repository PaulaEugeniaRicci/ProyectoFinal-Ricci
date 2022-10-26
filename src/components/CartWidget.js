import { HiShoppingBag } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";



const CartWidget = () => {

  const { count } = useCart()

  return (
    <div className="">
      <Link to='/cart' className="group -m-2 flex items-center">
        <HiShoppingBag className="h-5 w-5 text-white"/>
        {count > 0 && (
          <span className="ml-2 text-sm font-medium text-gray-600">{count}</span>
        )}
      </Link>
    </div>
  );
}

export default CartWidget;