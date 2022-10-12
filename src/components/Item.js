import React from 'react';
import { Link } from "react-router-dom";

const Item = ( {id, title, price, pictureUrl} ) => {
  return (
    <Link to={`/item/${id}`}>
      <div className='m-5 pt-2 text-center uppercase'>
        <div className='min-h-max'><img src={pictureUrl} alt={title}/></div>
        <div><p className="font-semibold pt-2">{title}</p></div>
        <div><p className="">${price}</p></div>
        <button className="btn select-none uppercase text-sm text-white bg-black py-3 px-5 mt-8">Descubrir</button>
      </div>
    </Link>
  )
}

export default Item;