import React,{useContext} from 'react';
import { Link } from "react-router-dom";
import context from '../../Provider/context';
import copy from 'clipboard-copy';


function Kunai () {
    const ATRIBUTES = JSON.parse(localStorage.getItem('atributes')) || { atack:0, agilidade:0, chacara:0, defesa:0, hp:0 } ;
const  { convertNumber , setAg, agilidadeAgora, setPowerUse ,powerUse , setStatusKunai,statusKunai,setPowerUsed,powerUsed} =  useContext(context);


   const kunai =({target}) => {
    const valueSpent = powerUse.includes('Sharingan') ? 50 : 100
       if(target.className === 'legends') {
        setAg( agilidadeAgora - valueSpent)
        
        setPowerUse([...powerUse, 'Kunai'])
        setStatusKunai(!statusKunai)
        const { innerText } = target
        copy(innerText)
        setPowerUsed([...powerUsed,`passo ${convertNumber(valueSpent)} Ag para Kunai`])
       } else {
           
        powerUse.splice(powerUse.indexOf('Kunai'), 1);
       }
   }

    
    return (
        
        <Link  onClick={kunai} className={powerUse.includes('Kunai')  ? 'selected' :'legends'}>
            
            *KUNAI

            Empunhada*<br/>. Atk:5.000+{convertNumber(ATRIBUTES.atack)}(CT)={convertNumber(5000+Number(ATRIBUTES.atack))}
            </Link>
            
    )
}

export default Kunai;