import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import './Cart.css'
import CartItem from "../CartItem/CartItem"




const Cart = () => {
    const { cart, clearCart, totalQuantity, Total} = useContext(CartContext)
    console.log(Total())
    console.log(totalQuantity)

    if(totalQuantity () === 0) {
        return (
            <div className="prod">
                <h1 className="titulo">No hay items en el carrito</h1>
                <Link to='/' className= 'pro'>Productos</Link>  
            </div>
        )
    }

        return(
            <div className="divcart">
            { cart.map(p => <CartItem key={p.id} {...p}/>) }
            <h3>TOTAL: ${Total()}</h3>
            <button onClick={() => clearCart()} className="Button2">Limpiar Carrito </button>
            <Link to='/checkout' className="checkcart">Checkout</Link>
            </div>
        )
}

export default Cart