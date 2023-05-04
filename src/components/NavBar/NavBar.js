import { NavLink, Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"
import './Navbar.css'

const NavBar = () => {
    return (
    <nav>
    <Link to='/'>
        <h1 className="Name">
            Odil Comidas Caseras 
        </h1>
        </Link>
        <div className="Categories">
            <NavLink to={'/category/pan'} className={({ isActive}) => isActive? 'ActiveOption' : 'Option'}>Panes</NavLink>
            <NavLink to={'/category/otrosproductos'} className={({ isActive}) => isActive? 'ActiveOption' : 'Option'}>Otros Productos</NavLink>
            <NavLink to={'/category/postres'} className={({ isActive}) => isActive? 'ActiveOption' : 'Option'}>Postres</NavLink>
        </div>
        <CartWidget />
    </nav>
    )
}

export default NavBar

