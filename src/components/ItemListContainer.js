import "../assets/css/Styles.css";

const ItemListContainer = ({greeting}) => {
  return (
    <div className="greeting">
      <h3>{greeting}</h3>
    </div>
  );
}

export default ItemListContainer;