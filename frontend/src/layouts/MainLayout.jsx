import { Outlet } from "react-router-dom"
import NavbarGuest from "../components/NavbarGuest"

export default function MainLayout() {
    return (
        <><header>
            <NavbarGuest> </NavbarGuest>
        </header>
        <main>
            <Outlet />
        </main>
        <footer>
            <p>© 2025 Mi Aplicación. Todos los derechos reservados.</p>
        </footer></>
    )
}