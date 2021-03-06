import React,{useContext} from 'react';
import { Link } from "react-router-dom";
import context from '../Provider/context';
import copy from 'clipboard-copy';


function KunaiEmpunhada () {
    const  { powerUse } =  useContext(context);


const KunaiEmpunhada =({target}) => {
    
     if(powerUse.includes('Kunai')) {
     const { innerText } = target
     copy(innerText)
     }
     
}

    
    return (
        
        <Link  onClick={KunaiEmpunhada} className={powerUse.includes('Kunai') ? "legends" : "legends-desabled"}>
           
           *KUNAI Empunhada*
            
            </Link>
            
    )
}

export default KunaiEmpunhada;