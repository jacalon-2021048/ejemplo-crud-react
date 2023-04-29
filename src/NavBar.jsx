import { Link } from "react-router-dom"
import { isUserAuthenticated } from "./login/helpers/isUserAuthenticated"

export const NavBar = () => {

    const logOut = () => {
        localStorage.removeItem('token');
        window.location.href = "/login";
    }

    return (
        <>
            {
                isUserAuthenticated() && (
                    <nav className="navbar navbar-expand-lg bg-body-tertiary">
                        <Link className="navbar-brand" to="/">
                            CRUD
                        </Link>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-x mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/add/user">
                                        Agregar Usuario
                                    </Link>
                                </li>
                            </ul>
                            <ul className="navbar-nav ms-auto">
                                {
                                    localStorage.getItem("token") && (
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/" onClick={() => logOut()}>
                                                Cerrar Sesion
                                            </Link>
                                        </li>
                                    )
                                }
                            </ul>
                        </div>
                    </nav>
                )
            }
        </>
    )
}
