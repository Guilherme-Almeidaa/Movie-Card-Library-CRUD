import React,{useContext} from 'react';
import { Link } from "react-router-dom";
import context from '../../Provider/context';
import copy from 'clipboard-copy';


function Radio () {


const  { convertNumber , setAg, agilidadeAgora ,powerUse ,setPowerUsed,powerUsed , setPowerUse} =  useContext(context);

const Radio =({target}) => {
    const valueSpent = powerUse.includes('Sharingan') ? 25 : 50
    if(target.className === 'legends') {
         target.className ='selected'
         setAg( agilidadeAgora - valueSpent)
         const { innerText } = target
         copy(innerText)
         setPowerUse([...powerUse, 'Radio'])
         setPowerUsed([...powerUsed,`passo ${convertNumber(valueSpent)} Ag para Rádio`])
    } else {
        target.className = 'legends'
        powerUse.splice(powerUse.indexOf('Radio'), 1);
    }
}
    
    return (
        
        <Link  onClick={Radio} className="legends">
            *Rádio de Comunicação!*<br/>
             Equipo meu rádio, podendo me comunicar com minha equipe, sabendo das estratégias e próximos passos.
           
            </Link>
            
    )
}

export default Radio;