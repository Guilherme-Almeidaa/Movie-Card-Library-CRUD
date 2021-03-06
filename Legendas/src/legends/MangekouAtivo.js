import React,{useContext} from 'react';
import { Link } from "react-router-dom";
import copy from 'clipboard-copy';
import context from '../Provider/context';

function SharinganAtivo () {

    const {powerUse} = useContext(context);
const  copyLegends =  ({target}) => {
    const { innerText } = target
    copy(innerText)

}


    
    return (
        
        <Link  onClick={(target) =>  copyLegends(target)} className="legends">
            *Mangekyou {powerUse.includes('Mangekyou') ? 'Ativo' : 'Desativado'}*<br/>
             
           
            </Link>
            
    )
}

export default SharinganAtivo;