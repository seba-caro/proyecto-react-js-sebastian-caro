import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
    <nav>
        <img src="./" alt="" />
        <h3>
            Odil Comidas Caseras 
        </h3>
        <div>
            <button>Panes</button>
            <button>Postres</button>
            <button>Conocenos</button>
            <button> Nuestros Productos</button>
        </div>
        <CartWidget/>
    </nav>
    )
}

export default NavBar