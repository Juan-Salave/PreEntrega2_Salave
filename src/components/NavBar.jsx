import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"


const NavBar = () => {
    return (

        <ul className="nav nav-fill text-bg-warning bg-gradient">
            <li className="nav-item h4 mt-1">
                <Link className="nav-link text-dark" to={'/'}><i className="fa-solid fa-store m-2"></i>Friut Store </Link>
            </li>
            <li className="nav-item h4 mt-1">
                <Link className="nav-link text-dark" to={'/category/fruta'}><i className="fa-solid fa-apple-whole m-2"></i>Frutas </Link>
            </li>
            <li className="nav-item h4 mt-1">
                <Link className="nav-link text-dark" to={'/category/vegetales'}><i className="fa-solid fa-carrot m-2"></i>Vegetales </Link>
            </li>
            <li className="nav-item h4 mt-1 text-dark">
                <CartWidget />
            </li>
        </ul>

    )
}

export default NavBar