import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
    <nav>
        <h1 className="Name">
            Odil Comidas Caseras 
        </h1>
        <div className="navbar">
            <button className="btn"  >Pan</button>
            <button className="btn" >Postres</button>
            <button className="btn" >Conocenos</button>
            <button className="btn" > Nuestros Productos</button>
        </div>
        <CartWidget />
    </nav>
    )
}

export default NavBar