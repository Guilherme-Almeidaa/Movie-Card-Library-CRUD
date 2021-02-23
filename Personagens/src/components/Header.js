import React from 'react';
import {Link} from 'react-router-dom'

function Header () {
    return (
        <header>
           <div className="header">
                <div className="buttons-header">
                <Link data-testid="register" className="tag is-black is-large" to="/" >Cadastro</Link>
                </div>
        <div className="buttons-header">
       <Link data-testid="characters" className="tag is-link is-large" to="/infoperson" >Personagens</Link>
                </div>
       </div>
         </header>
    )
}

export default Header;