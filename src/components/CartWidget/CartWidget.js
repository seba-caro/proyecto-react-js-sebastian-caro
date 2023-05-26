import { useContext } from 'react'
import cart from './assets/cart.png'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import'./CartWidget.css'

const CartWidget = () => {
    const { totalQuantity} = useContext(CartContext)
    

    return (
        <Link to='./cart' className='CartWidget' style={{ display: totalQuantity() > 0 ? 'flex' : 'none' }}>
            <img className='imgc' src={cart} alt='cart-widget'/>
            {totalQuantity()}
        </Link>

    )


}

export default CartWidget