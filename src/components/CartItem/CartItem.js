import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import './CartItem.css'






export const CartItem = ({name,price,quantity,id}) =>{
    const{removeItem} = useContext(CartContext)



    return (
        <div className='container-principal'>
      <section className='CartItem'>
        <h4>{name}</h4>
        <h4>Precio: ${price}</h4>
        <h4>Cantidad: {quantity}</h4>        
        <h4>Subtotal: ${price * quantity}</h4>    
        <button onClick={()=> removeItem(id)} className='boton'>Eliminar Producto</button>
      </section>
    </div>
  )
}

export default CartItem
    

