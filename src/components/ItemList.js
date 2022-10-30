import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/firebase";
import Item from './Item';

const ItemList = ( ) => {

  const {id} = useParams();
  const [items, setItems] = useState([])
  
  useEffect(()=>{
    if (id !== 'masculino' && id!== 'femenino'){
      const itemCollection = id
      ? query(collection(db, "items"), where("title", ">=", id), where("title", "<=", id+ '\uf8ff'))
      : collection(db, "items")
      getDocs(itemCollection).then( (snapshot) => {
        if (snapshot.size === 0 ){
          console.log("no products")
        }
        setItems(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data() })))
      });
    }
    else{
      const itemCollection = id
      ? query(collection(db, "items"), where("categoryId", "==", id))
      : collection(db, "items")
      getDocs(itemCollection).then( (snapshot) => {
        if (snapshot.size === 0 ){
          console.log("no products")
        }
        setItems(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data() })))
      });
    }
  },[id])
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 max-w-full lg:max-w-7xl m-auto">
      { items.map((item) => ( <Item key={item.id} item={item}/> ) )}
    </div>
  )
}

export default ItemList;