import React from "react";
import '../components/styles/Suma.css';

export default function Suma() {
    const [input, setInput] = React.useState({
        num1: "",
        num2: "",
    });

    const [result, setResult] = React.useState();
    const handleInput = function (e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    };

    const suma = function () {
        setResult((+input.num1) + (+input.num2));
    };

    return (

        <div className="container">
            <div><h1>Suma de dos numeros</h1></div>
            <div>
                <div>
                    <p className='margen-none'>Introduce los numeros a sumar</p>
                    <div className='center_input marginTop'>
                        <input className='form'
                            onChange={handleInput}
                            name="num1"
                            value={input.num1}
                            type="text"
                        ></input> +
                        <input className='form'
                            onChange={handleInput}
                            name="num2"
                            value={input.num2}
                            type="text"
                        ></input>
                    </div>
                </div>
                <div className='center_div'>
                    <button className="boton" onClick={suma}>Sumar</button>
                </div>
                <div>
                    <h4>=</h4>
                    <h4 className='result'> <span className='result-color'> {result} </span> </h4>
                </div>

            </div>
        </div>
    );
}