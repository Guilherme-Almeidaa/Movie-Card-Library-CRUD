import React from 'react';
import { Link } from "react-router-dom";
import copy from 'clipboard-copy';


function SharinganDesativado () {

    
const  copyLegends =  ({target}) => {
    const { innerText } = target
    copy(innerText)

}


    
    return (
        
        <Link  onClick={(target) =>  copyLegends(target)} className="legends">
            *Sharingan desativado*<br/>
             
           
            </Link>
            
    )
}

export default SharinganDesativado;