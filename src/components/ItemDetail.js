import ItemCount from "./ItemCount";
import { useCart } from "../context/CartContext";

const ItemDetail = ({ item }) => {
  
  const {addToCart} = useCart()

  const addHandler = () => {
    addToCart(item)
  }

  return (
    <>
      <div className="selection:bg-gray-600 selection:text-white mt-8">
        <div className="grid grid-rows-3 grid-flow-col gap-4">
          <div className="row-span-5 w-full">
            <img src={item.pictureUrl} alt={item.title} className=''/>
          </div>
          <div className="col-span-2 m-5 pt-2">
            <div><h3 className="font-semibold pt-2 uppercase">{item.title}</h3></div>
            <div><p className="pt-2">{item.description}</p></div>
          </div>
          <div className="row-span-2 col-span-2 m-5">
            <div><p className="pt-2">${item.price}</p></div>
            <ItemCount stock={10} />
            <button className="btn select-none uppercase text-sm text-white bg-black p-3" onClick={ addHandler }>Añadir al carrito</button>
          </div>
          
        </div>
      </div>
    </>
  )
}
  
export default ItemDetail;