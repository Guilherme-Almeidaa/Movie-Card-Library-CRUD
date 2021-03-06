import React,{useContext} from 'react';
import { Link } from "react-router-dom";
import context from '../../Provider/context';
import copy from 'clipboard-copy';

function BloqueioDeKunai () {
    const  { convertNumber , setAg, agilidadeAgora ,powerUse ,setPowerUsed,powerUsed} =  useContext(context);


    const BloqueioDeKunai =({target}) => {
    
        const valueSpent = powerUse.includes('Sharingan') ? 250 : 500
        if(powerUse.includes('Kunai')) {
            setAg( agilidadeAgora - valueSpent)
            const { innerText } = target
            copy(innerText)
            setPowerUsed([...powerUsed,`passo ${convertNumber(valueSpent)} Ag para Bloqueio de Kunai`])
        }
         
    }
    
    
    return (
        <Link onClick={BloqueioDeKunai} className={powerUse.includes('Kunai') ? "legends" : "legends-desabled"} >
        *BLOQUEIO DE KUNAI*<br/>

Bloqueio seu atk, hp intacto

</Link>
    )
}

export default BloqueioDeKunai;