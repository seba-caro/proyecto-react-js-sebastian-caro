import './ItemDetail.css'
import ItemCount from "../ItemCount/ItemCount"
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

const ItemDetail = ({id, name, img, category, price,stock, description}) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const {addItem} = useContext(CartContext)

const hanleOnAdd = (quantity) => {
    setQuantityAdded(quantity)

    const item = {
        id, name, price
    }

    addItem(item, quantity)
}


    return(
        <article className="CardItem">
<header className="Header">
    <h2 className="ItemHeader">
        {name}
    </h2>
</header>
<picture>
    <img src={img} alt={name} className="ItemImg" />
</picture>

<section>
    <p className="Info">
        Precio: ${price}
    </p>
    <p className="Info">
        Descripcion: {description}
    </p>

</section>
<footer className="ItemFooter">
    { 
        quantityAdded > 0 ? (
            <Link to= '/cart' className= 'btndet'>Terminar Compra</Link> 
        ) : (
        <ItemCount initial={1} stock={stock} onAdd={hanleOnAdd}/>
        )
        }

</footer>
        </article>
    )
}

export default ItemDetail