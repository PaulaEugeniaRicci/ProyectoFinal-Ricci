import { CartContext } from '../context/CartContext';
import { useState, useContext } from 'react';
import { Link } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { IoIosArrowBack, IoMdArrowBack } from "react-icons/io";

const Checkout = () => {

  const styles = {
    input: "focus:outline-none border-b border-gray-900 placeholder-gray-700 px-2 py-4 w-full ",
    
    title: "font-medium text-lg text-gray-800 tracking-wider leading-tight uppercase",
    text: "font-light text-sm text-gray-600 tracking-wide leading-normal",
    highlight: "font-medium text-xs text-gray-700 tracking-wider leading-loose uppercase",
    button: "font-medium text-xxs text-gray-700 tracking-wider leading-normal uppercase select-none",
    symbol: "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer text-gray-400 border border-gray-400 w-7 h-7 flex items-center justify-center p-0.5",
    counter: "border border-x-1 border-x-white border-y-gray-400 text-gray-600 h-full text-center w-5 p-0.5"
}

  const {items, clearCart, cartLength, getTotal} = useContext(CartContext)
  //const { cartItems, cartLenght, clearCart, getTotal } = useContext(CartContext)
  const [idOrder, setIdOrder] = useState("")
  const [showModal, setShowModal] = useState(false)
  const [buyer, setBuyer] = useState({
    name: "",
    surname: "",
    telephone: "",
    email: "",
    emailConfirmation: "",
  })

  const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
  const telRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{1,6}$/im
  const orderDate = new Date().toLocaleDateString()

  const handleUpdateBuyer = (e) => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value })
  }

  const addOrder = async (order) => {
    const snapshot = await addDoc(collection(db, "orders"), order)
    return snapshot.id
}

  function orderHandler() {
    const order = {
      buyer,
      item: items,
      price: getTotal,
      date: orderDate,
    }
    addOrder(order).then(data => {
      setIdOrder(data)
    })
  }

  return (
    <>
    <div className="flex justify-center items-center mx-auto xl:max-w-7xl mx-6 xl:mx-auto pt-10">
      <div className="flex w-full flex-col justify-center items-center">     
        <div className="flex w-full flex-col lg:flex-row justify-start items-start">
          <div className="flex flex-col justify-start items-start w-full mt-6 lg:mt-0 mb-3">
            <form className="space-y-6">
              <h2 className={styles.highlight}>Datos de facturación</h2>
              <input className={styles.input} type="text" name="name" required onChange={handleUpdateBuyer} placeholder="Nombre*"/>
              <input className={styles.input} type="text" name="surname" required onChange={handleUpdateBuyer} placeholder="Apellido*"/>
              <input className={styles.input} type="tel" name="telephone" required onChange={handleUpdateBuyer} placeholder="Teléfono*"/>
              <input className={styles.input} type="email" name="email" required onChange={handleUpdateBuyer} placeholder="E-mail*"/>
              <input className={styles.input} type="email" name="emailConfirmation" required onChange={handleUpdateBuyer} placeholder="Confirmar e-mail*"/>
            </form>
            
            {buyer.name && buyer.surname && buyer.telephone && (buyer.email === buyer.emailConfirmation) 
            && telRegex.test(buyer.telephone) && emailRegex.test(buyer.email, buyer.emailConfirmation) ? (
              
              <input onClick={() => { orderHandler(); setShowModal(true) }} 
                className="focus:outline-none focus:ring-transparent w-full text-center btn select-none uppercase text-sm text-white bg-black py-3 px-9 mt-6 cursor pointer"
                type="submit" value="Continuar" />
                ) : (
              
                <input className="focus:outline-none focus:ring-transparent w-full text-center btn select-none uppercase text-sm text-white bg-gray-400 py-3 px-9 mt-6"
                type="submit" value="Continuar" disabled 
                />
                )
              }
            </div>

            <div className="flex flex-col self-start w-full md:w-1/2 ml-6">
              <h2 className={styles.highlight}>Resumen de Compra</h2>
              <div className="flex flex-col border border-gray-200 p-4 mt-6">
                <div className={"flex flex-row justify-between " + (styles.text)}>
                  <p>Cantidad de items:</p>
                  <p>{cartLength}</p>
                </div>
                <div className={"flex flex-row justify-between " + (styles.text)}>
                  <p>Gastos de envío:</p>
                  <p>¡Envío gratis!</p>
                </div>
                <div className={"flex flex-row justify-between font-semibold mt-10 " + (styles.highlight)}>
                  <p>Subtotal:</p>
                  <p>{cartLength}</p>
                </div>
                <div className={"flex flex-row justify-between font-semibold mt-10 " + (styles.highlight)}>
                  <p>Total:</p>
                  <p>{cartLength}</p>
                </div>
              </div>
              <Link to='/cart' className={(styles.highlight) + ' lowercase flex flex-row items-center self-start mb-4'}>
                <IoIosArrowBack className="mr-1"/>Seguir comprando
              </Link>
            </div>
          </div>            
                        
            </div>
        </div>
        </>
    )
}

export default Checkout