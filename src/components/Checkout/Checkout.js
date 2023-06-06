import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { Timestamp, addDoc, collection, documentId, getDocs, query, writeBatch, where } from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"

import CheckoutForm from "../CheckoutForm/CheckoutForm"

import { Link } from "react-router-dom"
import './Checkout.css'


const Checkout = () => {
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState('');

    const { cart, Total, clearCart} = useContext (CartContext);

    const createOrder = async ({ name, phone, email, emailConfirm }) => {
        if (email !== emailConfirm) {
            alert ('Los emails no coinciden')
            setLoading(false)
            return;
        }

        setLoading(true);

        try{
            const objOrder = {
                buyer: {
                    name, phone, email
                },
                items: cart,
                total: Total(),
                date: Timestamp.fromDate(new Date())
            }
            
            const batch = writeBatch(db);

            const outOfStock = [];

            const ids = cart.map(prod => prod.id);

            const productsRef = collection (db, 'products');

            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))

            const { docs } = productsAddedFromFirestore

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAddedToCart = cart.find(prod =>prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity
                

                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity});
                } else {
                    outOfStock.push({id: doc.id, ...dataDoc})
                }
            });

            if(outOfStock.length === 0) {
                await batch.commit()

                const orderRef = collection(db, 'orders')

                const orderAdded = await addDoc(orderRef, objOrder)

                setOrderId(orderAdded.id)
                clearCart()
            } else {
                console.error('hay productos que estan fuera de stock')
            }

        } catch(error) {
            console.log(error)
        } finally{
            setLoading(false)
        }
    }

    if (loading){
        return <h1 className="check" >Se esta generando su orden...</h1>
    }
    if (orderId) {
        return <div><h1 className='orderid'>El id de su orden es: {orderId}</h1>
        <Link to='/' className= 'Option1'>Productos</Link> 
        </div>

    }

    return(
        <div>
            <h1 className="check" >CHECKOUT</h1>
            <CheckoutForm onConfirm={createOrder}/>
        </div>
    )

}

export default Checkout