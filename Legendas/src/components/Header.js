import React from 'react';
import { Link } from "react-router-dom";
function Header () {
    return (
        <header>
            <div className="links" >
         <Link className="link" to="/legends" >Legendas</Link>
         </div>
         <div className="links" >
         <Link className="link" to="/" >Atualizar</Link>
         </div >
         <div className="links" >
         <Link className="link" to="/register" >Registrar</Link>
         </div>
        </header>

    )
}

export default Header;