import React,{useContext} from 'react';
import { Link } from "react-router-dom";
import context from '../../Provider/context';
import copy from 'clipboard-copy';


function Evasiva () {
    const  { convertNumber , setAg, agilidadeAgora ,powerUse ,setPowerUsed,powerUsed} =  useContext(context);

  const Evasiva =({target}) => {
    const valueSpent = powerUse.includes('Sharingan') ? 250 : 500
    setAg( agilidadeAgora - valueSpent)
    const { innerText } = target
    copy(innerText)
    setPowerUsed([...powerUsed,`passo ${convertNumber(valueSpent)} Ag para Evasiva`])
  }
    
    return (
        
        <Link  onClick={Evasiva} className="legends">
            *Evasiva!* <br/>
                  Esquivo do seu ataque, Hp intacto.
           
            </Link>
            
    )
}

export default Evasiva;