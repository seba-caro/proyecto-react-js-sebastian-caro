import cart from './assets/cart.png'

const CartWidget = () => {
    return (
        <div className='carrito' >
            <img className='imgc' src={cart} alt="cart-widget"/> 
            <h2 className='carritonumero'>0</h2>
            
        </div>
    )
}

export default CartWidget