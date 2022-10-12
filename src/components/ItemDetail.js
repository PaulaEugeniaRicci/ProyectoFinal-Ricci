import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {

  return (
    <>
      <div className="selection:bg-gray-600 selection:text-white mt-8">
        <div class="grid grid-rows-3 grid-flow-col gap-4">
          <div class="row-span-5 w-full">
            <img src={item.pictureUrl} alt={item.title} className=''/>
          </div>
          <div class="col-span-2 m-5 pt-2">
            <div><h3 className="font-semibold pt-2 uppercase">{item.title}</h3></div>
            <div><p className="pt-2">{item.description}</p></div>
          </div>
          <div class="row-span-2 col-span-2 m-5">
            <div><p className="pt-2">${item.price}</p></div>
            <ItemCount stock={10} />
          </div>
        </div>
      </div>
    </>
  )
}
  
export default ItemDetail;