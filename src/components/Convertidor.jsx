import React from "react";
import '../components/styles/Convertidor.css';

export default function Convertidor() {
    const [input, setInput] = React.useState({
        valor: "",
    });

    const [result, setResult] = React.useState();
    const handleInput = function (e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    };

    const Celsius = function () {
        setResult(((+input.valor) - 32) * 0.5556 + 'C');
    };

    const Fahrenheit = function () {
        setResult(((+input.valor) * 1.8) + 32 + 'F');
    };

    return (

        <div className="container">
            <h1>Convertidor de Temperatura: Celsius-Fahrenheit</h1>
            <div className='convertidor'>
                <div>
                    <p className='contenido'>Ingrese una temperatura</p>
                    <div className='temperatura'>
                        <input className='bold-tamaño'
                            onChange={handleInput}
                            name="valor"
                            value={input.valor}
                            type="text"
                        ></input>
                    </div>
                </div>
                <h3 className='centerText centerText'>Convertir a:</h3>
                <div className='center_div'>
                    <button className="cel" onClick={Celsius}>Celsius</button>
                    <button className="fah" onClick={Fahrenheit}>Fahrenheit</button>
                </div>
                <div>
                    <h4>=</h4>
                    <h4 className='result'> <span className='result-color'> {result} </span> </h4>
                </div>
            </div>
        </div>

    );
}