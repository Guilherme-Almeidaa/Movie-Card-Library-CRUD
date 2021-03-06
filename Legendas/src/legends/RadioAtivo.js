import React from 'react';
import { Link } from "react-router-dom";

import copy from 'clipboard-copy';


function RadioAtivo () {
const  copyLegends =  ({target}) => {
    const { innerText } = target
    copy(innerText)

}


    
    return (
        
        <Link  onClick={(target) =>  copyLegends(target)} className="legends">
            *Rádio de Comunicação Ativo!*<br/>
             
           
            </Link>
            
    )
}

export default RadioAtivo;