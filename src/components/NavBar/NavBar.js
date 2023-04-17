import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
    <nav>
        <h1>
            Odil Comidas Caseras 
        </h1>
        <div>
            <button>Pan</button>
            <button>Postres</button>
            <button>Conocenos</button>
            <button> Nuestros Productos</button>
        </div>
        <CartWidget />
    </nav>
    )
}

export default NavBar