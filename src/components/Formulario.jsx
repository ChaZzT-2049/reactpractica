import React from "react";
import '../components/styles/Formulario.css';

class Formulario extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: "",
            apellidos: "",
            telefono: "",
            email: "",
            detalles: "",
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value,
        });
    }

    handleSubmit(event) {
        alert("Se enviaron los datos de : " + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div className="container">
                <form className="formulario">
                    <h1>Formulario de Contacto</h1>
                    <fieldset>
                        <p>Favor de rellenar todo los campos</p>
                        <div className="content">
                            <div className="formula">
                                <label className="etiqueta"><b>Nombre:</b></label>
                                <input className="input-text" type="text" placeholder="Introduzca su nombre" />
                            </div>
                            <div className="formula">
                                <label className="etiqueta"><b>Numero:</b> </label>
                                <input className="input-text" type="tel" placeholder="Introduzca su numero" />
                            </div>
                            <div className="formula">
                                <label className="etiqueta"><b>Correo:</b> </label>
                                <input className="input-text" type="text" placeholder="Introduzca su correo" />
                            </div>
                            <div className="formula">
                                <label className="etiqueta"><b>Detalles:</b></label>
                                <input className="input-text" placeholder="Detalles de contacto"></input>
                            </div>
                        </div>
                        <div className="subir">
                            <input className="boton input-boton" type="button" value="Enviar" />
                        </div>
                    </fieldset>
                </form>
            </div>
        );
    }
}
export default Formulario;