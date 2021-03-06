import React,{useContext} from 'react';
import { Link } from "react-router-dom";
import context from '../Provider/context';
import copy from 'clipboard-copy';


function KunaiEmpunhada () {
    const  { powerUse , convertNumber } =  useContext(context);
    const ATRIBUTES = JSON.parse(localStorage.getItem('atributes')) || { atack:0, agilidade:0, chacara:0, defesa:0, hp:0 } ;


const KunaiEmpunhada =({target}) => {
    
     
    if(powerUse.includes('Kunai')) {
        const { innerText } = target
        copy(innerText)
        }
     
}

    
    return (
        
        <Link  onClick={KunaiEmpunhada} className={powerUse.includes('Kunai') ? "legends" : "legends-desabled"}>
           
           *KUNAI

           Empunhada*<br/>. Atk:5.000+{convertNumber(ATRIBUTES.atack)}(CT)={convertNumber(5000+Number(ATRIBUTES.atack))} meu atk Vai direto no seu hp:00
            
            </Link>
            
    )
}

export default KunaiEmpunhada;

