import "../assets/css/Styles.css";
import ItemList from './ItemList';

const ItemListContainer = ( {greeting} ) => {
  return (
    <div className="mx-6">
      <h3>{greeting}</h3>
      <ItemList/>
    </div>
  )
}

export default ItemListContainer;