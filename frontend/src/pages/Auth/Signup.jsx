import { useEffect, useState } from "react"; 
import { createUser } from '../../services/authService'
export default function Signup(){
    const [Username, setUsername] = useState("");
    const [FirstName, setFirstName] = useState("");
    const [SurName, setSurName] = useState("");
    const [DNI, setDNI] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    useEffect(() => {
        const fetchEvents = async () => {
        try {
            data = {
                username: Username,
                name: FirstName,
                surname: SurName,
                dni: DNI,
                email: Email,
                password: Password,
            };
            await createUser(data);
        } catch (error) {
            console.error("Error Signup:", error);
        }
        };
        fetchEvents();
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <form className="flex flex-col gap-2 bg-gray-300 p-6 rounded shadow-md">
                <label>Username</label>
                <input 
                type="text" 
                required 
                value={Username}
                onChange={(e) => setUsername(e.target.value)}
                />

                <label>Nombre Pila</label>
                <input
                type="text"
                required 
                value={FirstName}
                onChange={(e) => setFirstName(e.target.value)}
                />

                <label>Apellido</label>
                <input 
                type="text" 
                required 
                value={SurName}
                onChange={(e) => setSurName(e.target.value)}
                />

                <label>DNI</label>
                <input 
                type="number" 
                required 
                maxLength="8"
                value={DNI}
                onChange={(e) => setDNI(e.target.value)}
                />

                <label>Email</label>
                <input 
                type="email" 
                required
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
                />

                <label>Contraseña</label>
                <input 
                type="password"
                required
                value={Password}
                onChange={(e) => setPassword(e.target.value)} 
                />

                <button type="submit" className="bg-blue-500 text-white p-2 rounded mt-4 hover:bg-blue-600">Registrarse</button>
            </form>

            <div>
                <ul>
                    <li>{Username}</li>
                    <li>{FirstName}</li>
                    <li>{SurName}</li>
                    <li>{DNI}</li>
                    <li>{Email}</li>
                    <li>{Password}</li>
                </ul>
            </div>
        </div>
    )
}