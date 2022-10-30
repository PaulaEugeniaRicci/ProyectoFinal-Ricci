import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import ItemDetail from './ItemDetail';

const ItemDetailContainer = ( ) => {

  const { id: itemId } = useParams()
  const [item, setItem] = useState([])
  const [loading, setloading] = useState(true)

  const Loading = () => {
    return (
      <div className='flex justify-center items-center h-80'>
        <strong className='text-center'>Cargando...</strong>
      </div>
    )
  }

  useEffect(() => {
    const itemRef = doc(db, "items", itemId)
    getDoc(itemRef).then((snapshot) => {
      if (snapshot.exists()){
        setItem({ id: snapshot.id, ...snapshot.data()})
        setloading(false)
      }
    })
  }, [])

  return (
    <div className="">
      {loading ? <Loading/> : <ItemDetail item={item}/>}
    </div>
  )
}

export default ItemDetailContainer;