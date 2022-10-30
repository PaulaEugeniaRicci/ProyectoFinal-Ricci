import { useContext, useState } from "react"
import { CartContext } from '../context/CartContext';
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { currencyFormat } from "../helpers/currencyFormat";

const ItemDetail = ({ item }) => {

  const styles = {
    text: "nexa-bold tracking-wider uppercase",
    price: "font-semibold text-base tracking-wider",
    button: "btn select-none uppercase text-sm text-white bg-black py-3 px-9 mt-4 nexa"
  }
  
  const {addItem} = useContext(CartContext)
  const [isInCart, setIsInCart] = useState(false)

  const addToCart = (quantity) => {
    addItem(item, quantity)
    setIsInCart(true)
  }

  return (
    <>
      <div className="selection:bg-gray-600 selection:text-white mt-8">
        <div className="grid grid-rows-3 grid-flow-col gap-4">
          <div className="row-span-5 w-full">
            <img src={item.image} alt={item.title} className=''/>
          </div>
          <div className="col-span-2 m-5 pt-2">
            <div><h3 className={(styles.text) + " pt-2"}>{item.title}</h3></div>
            <div><p className="pt-2">{item.description}</p></div>
          </div>
          <div className="row-span-2 col-span-2 m-5">
            <div><p className={(styles.price) + " pt-2"}>{currencyFormat(item.price)}</p></div>
            { isInCart ?  
              <div className="flex flex-col space-y-8 mt-6">
                <Link to='/cart' className={(styles.button) + " focus:outline-none focus:ring-transparent max-w-fit text-center"}>Finalizar compra</Link>
              </div> : <ItemCount addToCart={addToCart} stock={item.stock} /> 
            }
          </div>
        </div>
      </div>
    </>
  )
}
  
export default ItemDetail;