import React from "react";

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

        <div>
            <h1>Suma de dos numeros</h1>
            <div>
                <div>
                    <p className='margen-none'>Introduzca los numeros a sumar</p>
                    <div className='center_input marginTop'>
                        <input className='bold-tamaño'
                            onChange={handleInput}
                            name="num1"
                            value={input.num1}
                            type="text"
                        ></input>
                        <input className='bold-tamaño'
                            onChange={handleInput}
                            name="num2"
                            value={input.num2}
                            type="text"
                        ></input>
                    </div>
                </div>
                <div className='center_div'>
                    <button onClick={suma}>Sumar</button>
                </div>
                <div>
                    <h4 className='result'>Resultado: <span className='result-color'> {result} </span> </h4>
                </div>

            </div>
        </div>
    );
}