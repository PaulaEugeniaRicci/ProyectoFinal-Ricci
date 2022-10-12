import React, { useEffect, useState } from 'react';
import { products } from './data/products';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = ( ) => {

  const { id: itemId } = useParams()
  const [item, setItem] = useState([])

  useEffect(() => {
    getItemDetails().then( response => {
      console.log(response)
      setItem( response )
    })
  }, [])
  
  const getItemDetails = () => {
    return new Promise( resolve => {
      setTimeout(() => {
        resolve( products.find( p => p.id === Number(itemId) ) )
      }, 2000);
    })
  }

  return (
    <div className="">
      {<ItemDetail item={item}/>}
    </div>
  )
}

export default ItemDetailContainer;