import { useState } from "react"
import { apiLogin } from "../api/apiLogin";
import Swal from "sweetalert2";

export const Login = () => {

    //Manejo del state del email y del password
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();//Para que la pagina no se recarge
        const result = await apiLogin(email, password);
        if (result) {
            Swal.fire({
                icon: "success",
                title: "Los datos ingresados son correctos",
                text: "Ha iniciado sesion correctamente",
                confirmButtonText: "Ok"
            }).then((r) => { if(r.isConfirmed) window.location.href = "/" })
        }
    }

    return (
        <>
            <h3>Login</h3>
            <div className="container">
                <div className="row vh-100 justify-content-center align-items-center">
                    <div className="row row-cols-1 row-cols-md-2">
                        <div className="col">
                            <div className="card border-0" style={{ backgroundColor: '#71B8B4' }}>
                                <div className="card-title p-1"
                                    style={{ fontFamily: 'Playfair Display , serif', fontSize: '57px' }}>
                                    Agenda Web
                                </div>
                                <div className="card-body p-1" style={{ fontFamily: 'Itim', fontSize: '20px' }}>
                                    Ayuda a organizar sus contactos de una forma ordenada,
                                    además de agregar nuevos contactos, muestra una lista de estos e incorpora una
                                    lista actividades pendientes.
                                </div>
                            </div>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="col">
                                <div className="card border-0" style={{ backgroundColor: '#71B8B4', maxWidth: '415px' }}>
                                    <div className="card-body sombra">
                                        <div className="mb-3">
                                            <input type="email" className="form-control" id="email" placeholder="Correo" aria-describedby="emailHelp"
                                                value={email} onChange={(e) => setEmail(e.target.value)} required />
                                        </div>
                                        <div className="mb-3">
                                            <input type="password" className="form-control" id="password"
                                                placeholder="Contraseña" value={password}
                                                onChange={(p) => setPassword(p.target.value)} required />
                                        </div>
                                        <div className="mb-3 d-grid gap-2">
                                            <button className="btn btn-primary" type="submit">Iniciar sesión</button>
                                        </div>
                                        <div className="mb-3">
                                            <a href="#" className="text-light text-center" style={{ textDecoration: 'none' }}>¿Olvidaste tu contraseña?</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
