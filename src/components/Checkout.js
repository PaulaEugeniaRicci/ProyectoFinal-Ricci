import { CartContext } from '../context/CartContext';
import { useState, useContext } from 'react';
import { Link } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { IoIosArrowBack } from "react-icons/io";
import { GoPackage } from "react-icons/go";


const Checkout = () => {

  const styles = {
    input: "focus:outline-none border-b border-gray-900 placeholder-gray-700 px-2 pt-4 mb-4 w-full ",
    title: "uppercase leading-loose tracking-wider font-medium text-center nexa-bold",
    text: "tracking-wide leading-none nexa-light",
    highlight: "lowercase flex flex-row items-center mb-4 nexa-light",
    button: "focus:outline-none focus:ring-transparent text-center btn select-none uppercase text-sm text-white py-3 px-9 mt-6 w-full nexa"
  }

  const {items, clearCart, cartLength, getTotal} = useContext(CartContext)
  const [idOrder, setIdOrder] = useState("")
  const [showModal, setShowModal] = useState(false)
  const [buyer, setBuyer] = useState({
    name: "",
    surname: "",
    telephone: "",
    email: "",
    emailConfirmation: "",
  })

  console.log(idOrder)

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
      price: getTotal(),
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
              <h2 className={(styles.title) + " pb-1"}>Datos de facturaci<span className="font-bold font-['Arial']">ó</span>n</h2>
              <input className={styles.input + styles.text} type="text" name="name" required onChange={handleUpdateBuyer} placeholder="Nombre"/>
              <input className={styles.input + styles.text} type="text" name="surname" required onChange={handleUpdateBuyer} placeholder="Apellido"/>
              <input className={styles.input + styles.text} type="tel" name="telephone" required onChange={handleUpdateBuyer} placeholder="Telefono"/>
              <input className={styles.input + styles.text} type="email" name="email" required onChange={handleUpdateBuyer} placeholder="E-mail"/>
              <input className={styles.input + styles.text} type="email" name="emailConfirmation" required onChange={handleUpdateBuyer} placeholder="Confirmar e-mail"/>
            </form>
            
            {buyer.name && buyer.surname && buyer.telephone && (buyer.email === buyer.emailConfirmation) 
            && telRegex.test(buyer.telephone) && emailRegex.test(buyer.email, buyer.emailConfirmation) ? (
              
              <input 
                onClick={() => { orderHandler(); setShowModal(true) }} 
                className={(styles.button) + " bg-black cursor pointer"} type="submit" value="Continuar"
              />
              ) : (
                <input className={(styles.button) + " bg-gray-400"} type="submit" value="Continuar" disabled/>
              )
            }
          </div>

          <div className="flex flex-col self-start w-full md:w-1/2 md:ml-10 sm:ml-0">
            <div className="flex flex-col border border-gray-200 rounded-lg py-4 px-5 mt-6">
            <h2 className={(styles.title) + " border-b border-gray-200 py-5"}>Resumen de Compra</h2>
              <div className={"flex flex-row justify-between border-b border-gray-200" + (styles.text)}>
                <p className='leading-loose py-5 px-2'>Cantidad de items</p>
                <p className='leading-loose py-5 px-2'>{cartLength()}</p>
              </div>
              <div className="flex flex-row font-medium border-b border-gray-200 nexa">
                <p className='leading-loose py-5 px-2'>Costo de env<span className='font-sans'>í</span>o - Gratis</p>
              </div>
              <div className="flex flex-row justify-between font-semibold border-b border-gray-200">
                <p className={(styles.title) + ' py-5 px-2 text-lg'}>Total</p>
                <p className='leading-loose py-5 px-2 text-lg'>{getTotal()}</p>
              </div>
              <Link to='/cart' className={(styles.highlight) + " pt-6 justify-center"}>
                <IoIosArrowBack className="mr-1"/>Volver a carrito
              </Link>
            </div>
          </div>
        </div>            
      </div>
    </div>

    <div className={`${showModal ? "flex" : "hidden"} inset-0 fixed w-full h-full bg-gray-500`}>
      <div className="container mx-auto justify-center items-center px-4 md:px-10 py-20 place-self-center">
        <div className="bg-white px-3 md:px-4 py-12 flex flex-col justify-center items-center">
          <h2 className="text-center md:w-9/12 lg:w-7/12 font-bold text-lg nexa-bold">Tu pedido fue aprobado</h2>
          <p className="mt-6 text-center md:w-9/12 lg:w-7/12">
            Tu pedido <span className='font-medium'>{idOrder}</span> ya se encuentra en preparación y está próximo a ser despachado. Te enviamos un mail a {(buyer.email).toLowerCase()} con los detalles.
          </p>
          <p className='font-bold text-lg pt-6'>
            ¡<span className="nexa-bold text-center mx-auto">Gracias por tu compra en MUGLER Store</span>!
          </p>
          <Link to="/" className="mt-6 flex justify-center">
            <button onClick={clearCart} className={(styles.button) + " bg-black cursor-pointer"}>
              Volver al inicio
            </button>
          </Link>
        </div>
      </div>
    </div>
  </>
  )
}

export default Checkout