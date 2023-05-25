import { useContext } from 'react'
import cart from './assets/cart.png'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import'./CartWidget.css'

const CartWidget = () => {
    const { totalQuantity} = useContext(CartContext)
    

    return (
        <div className='carrito' >
            <img className='imgc' src={cart} alt="cart-widget"/> 
            <h2 className='carritonumero'>0</h2>
            
        </div>
    )

    return (
        <Link to='./cart' className='CartWidget' style={{ display: totalQuantity > 0 ? 'block' : 'none' }}>
            <img className='imgc' src={cart} alt='cart-widget'/>
            {totalQuantity}
        </Link>

    )




}

export default CartWidget