import React,{useContext} from 'react';
import { Link } from "react-router-dom";
import context from '../Provider/context';
import copy from 'clipboard-copy';


function GuardoKunai () {
  const { powerUse } = useContext(context);


const guardoKunai =({target}) => {
    
    
     const { innerText } = target
     copy(innerText)
     powerUse.splice(powerUse.indexOf('Kunai'), 1);
     
}

    
    return (
        
        <Link  onClick={guardoKunai} className="legends">
           
           *Guardo minha KUNAI*
            
            </Link>
            
    )
}

export default GuardoKunai;