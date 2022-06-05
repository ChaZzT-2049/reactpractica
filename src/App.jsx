import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Menu from "./components/Menu";
import Multiplicacion from "./components/Multiplicacion";
import Suma from "./components/Suma";
import Convertidor from "./components/Convertidor";
import Formulario from "./components/Formulario";

export function App() {
    return (
        <BrowserRouter>
            <div>
                <Menu></Menu>
                <Routes>
                    <Route path="/multiplicacion" element={<Multiplicacion />} />
                    <Route path="/suma" element={<Suma />} />
                    <Route path="/convertidor" element={<Convertidor />} />
                    <Route path="/formulario" element={<Formulario />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}