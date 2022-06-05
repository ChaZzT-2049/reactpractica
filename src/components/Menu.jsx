import React from "react";
import { Link } from "react-router-dom";
import '../components/styles/Menu.css';

const Menu = () => {
    return (
        <div className="contenedor">
            <div className="titulo"><h1>Formularios en React</h1></div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to={'/multiplicacion'}>Multiplicacion</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/suma'}>Suma</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/convertidor'}>Convertidor</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/formulario'}>Formulario</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Menu