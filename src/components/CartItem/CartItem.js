import { useContext } from "react"
import { CartContext } from "../../context/CartContext"






export const CartItem = ({nombre,precio,quantity,id}) =>{
    const{removeItem} = useContext(CartContext)



    return (
        <div className='container-principal'>
      <section className='CartItem'>
        <h4>{nombre}</h4>
        <h4>Precio: ${precio}</h4>
        <h4>Cantidad: {quantity}</h4>        
        <h4>Subtotal: ${precio*quantity}</h4>    
        <button onClick={()=> removeItem(id)} className='boton'>Eliminar Producto</button>
      </section>
    </div>
  )
}

export default CartItem
    

