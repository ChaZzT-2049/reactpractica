import React from "react";

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
            <div className="border-blue">
                <h1 className="contenido">Formulario de Contacto</h1>
                <form className="formulario">
                    <fieldset>
                        <p>Favor de rellenar todo los campos</p>
                        <div className="content">
                            <div className="formula">
                                <label>Nombre: </label>
                                <input className="input-text" type="text" placeholder="Introduzca su nombre" />
                            </div>
                            <div className="formula">
                                <label>Teléfono: </label>
                                <input className="input-text" type="tel" placeholder="Introduzca su numero" />
                            </div>
                            <div className="formula">
                                <label>Correo: </label>
                                <input className="input-text" type="text" placeholder="Introduzca su correo" />
                            </div>
                            <div className="formula">
                                <label className="centraTx">Detalles: </label>
                                <textarea className="input-text" placeholder="Detalles de contacto"></textarea>
                            </div>
                        </div>
                        <div className="flex-boton">
                            <input className="boton input-boton" type="button" value="Enviar" />
                        </div>
                    </fieldset>
                </form>
            </div>
        );
    }
}
export default Formulario;