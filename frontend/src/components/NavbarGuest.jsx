import { Link, NavLink, useNavigate } from "react-router-dom";
export default function NavbarGuest(){
    return(
        <nav>
            <ul className="flex gap-4 p-4 bg-gray-200 justify-center">
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to='/signup'>Registrarse</NavLink>
                </li>
                <li>
                    <NavLink to='/login'>Iniciar Sesión</NavLink>
                </li>
                <li>
                    <NavLink to='/eventos'>Eventos</NavLink>
                </li>
            </ul>
        </nav>
    )
}