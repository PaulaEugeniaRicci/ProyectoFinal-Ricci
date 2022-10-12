import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Item from './Item'
import { products } from './data/products'

// Lista de items
const ItemList = () => {

    // Use params const {categoryId} = useParams()

  // Use states para mostrar items y spinner cuando se deba
  const [items, setItems] = useState([])

  // Obtener la información de los items
  useEffect(() => {
    getProducts().then( response => {
      console.log( response );
      setItems( response )
    })
  }, [])

    const getProducts = () => {
        return new Promise( resolve => {
          setTimeout(() => {
            resolve( products )
          }, 1000);
        })
      }
    // Renderizar lista de items
    return (
      <>
        <div className="mx-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 max-w-full lg:max-w-7xl m-auto">
            { items.map((item) => (<Item key={item.id} item={item}></Item>
            ))}
          </div>
        </div>
      </>
    )
}

export default ItemList