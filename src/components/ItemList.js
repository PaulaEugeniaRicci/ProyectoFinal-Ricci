import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Item from './Item';
import { products } from './data/products';

const ItemList = ( ) => {
  const {id} = useParams();
  const [items, setItems] = useState([])

  useEffect(()=>{
    getProducts().then(response=>{
        if(!id){
            setItems(response)
        } else{
          console.log(id)
            const selectedCategory = response.filter(item=>item.category === id);
            console.log('nuevaLista', selectedCategory)
            setItems(selectedCategory)
        }
    })
  },[id])
  
  const getProducts = () => {
    return new Promise( resolve => {
      setTimeout(() => {
        resolve( products )
      }, 2000);
    })
  }
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 max-w-full lg:max-w-7xl m-auto">
      { items.map( i => <Item key={i.id} {...i}/> ) }
    </div>
  )
}
  
export default ItemList;