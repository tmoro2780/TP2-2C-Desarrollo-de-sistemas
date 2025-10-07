
export default function Login(){
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
 