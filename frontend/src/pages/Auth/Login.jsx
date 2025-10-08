import { useState } from "react"
export default function Login(){
    const [token, setToken] = useState('ASJDOASD')
    if (token) {
        return (
            <div className="w-full h-full flex flex-col justify-center items-center min-h-screen bg-gray-100">
                <div className="flex flex-col items-center justify-center w-[15rem] h-[3rem] rounded-lg border-2 border-green-400 bg-green-100">
                    <h1 className="font-bold text-green-500">Ya estas logueado</h1>
                </div>
            </div>
        )    
    } else {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <form className="flex flex-col gap-2 bg-gray-300 p-6 rounded shadow-md">
                <label>Email</label>
                <input type="text" />

                <label>Contraseña</label>
                <input type="password" />

                <button  type="submit" className="bg-blue-500 text-white p-2 rounded mt-4 hover:bg-blue-600">Iniciar Sesion</button>
            </form>
        </div>
    )
    }

}
