import React from "react";

import {Link} from "react-router-dom";

import "./BarraNavegacao.css"

function BarraNavegacao () {
    return (
        <nav>
          <ul>
            <li><Link to="/" className="buttom-menu">Currículo</Link></li>
            <li><Link to="/portfolio" className="buttom-menu">Portfólio</Link></li>
            <li><Link to="/contato" className="buttom-menu">Contato</Link></li>
          </ul>
        </nav>
    )
}

export default BarraNavegacao;

