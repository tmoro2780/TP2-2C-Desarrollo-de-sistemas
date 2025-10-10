import { Router } from "express";
import { AuthService } from "../services/authService";
import { UserService } from "../services/userService";
import { SessionCheck } from "../auth/sessionCheck";

export const auth_router = Router();
const auth_service = new AuthService();
const user_service = new UserService();
const session_check = new SessionCheck();

auth_router.post('/', session_check.checkUserIsUnlogged, async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;
        const match = await auth_service.loginUser(email, password);

        if (match == 0) {
            res.status(401).json({ ok: false, msg: "Credenciales incorrectas" });
            return;
        }

        req.session.user = {
            id: match
        };
        res.status(200).json({ ok: true, data: match });
    } catch (error) {
        res.status(500).json({ ok: false, msg: (error as any).message });
    }
})

auth_router.post('/registrarse', session_check.checkUserIsUnlogged, async (req, res) => {
    try {
        const username = req.body.username;
        const name = req.body.name;
        const surname = req.body.surname;
        const dni = parseInt(req.body.dni);
        const email = req.body.email;
        const password = req.body.password;

        // si existe un usuario con el email o username ingresado, se devuelve codigo 401
        const user_exists_email = await user_service.getUserByEmail(email);
        const user_exists_username = await user_service.getUserByUsername(username);

        if (user_exists_email || user_exists_username) {
            res.status(401).json({ ok: false, msg: "Ya existe un usuario con ese username o email" });
            return;
        }

        const user = await auth_service.createUser({
            username: username,
            name: name,
            surname: surname,
            dni: dni,
            email: email,
            password: password
        })

        res.status(200).json({ ok: true, data: user });
    } catch (error) {
        res.status(500).json({ ok: false, msg: (error as any).message });
    }
})
