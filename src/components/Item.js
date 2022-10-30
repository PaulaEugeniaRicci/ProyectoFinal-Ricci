import { Link } from "react-router-dom";
import { currencyFormat } from "../helpers/currencyFormat";

const Item = ( {item} ) => {

  const styles = {
    text: "nexa-bold tracking-wider h-14",
    price: "font-semibold mt-7 text-base tracking-wider",
    button: "btn select-none uppercase text-sm text-white bg-black py-3 px-9 mt-3 nexa"
  }

  return (
    <div className="group m-5 pt-5 h-full">
      <Link to={`/item/${item.id}`} className="">
        <div className='overflow-hidden relative'>
          <img src={item.image} alt={item.title} className="duration-500 group-hover:opacity-0"/>
          <img src={item.image2} alt={item.title} className="scale-95 absolute top-0 -z-50"/>
        </div>
        <div className='text-center uppercase pt-5'>
          <div><p className={(styles.text)+" pt-2"}>{item.title}</p></div>
          <div><p className="text-gray-500 nexa-ligth text-sm">{item.concentration}</p></div>
          <div><p className={styles.price}>{currencyFormat(item.price)}</p></div>
          <button className={styles.button}>Descubrir</button>
        </div>
      </Link>
    </div>
  )
}

export default Item;