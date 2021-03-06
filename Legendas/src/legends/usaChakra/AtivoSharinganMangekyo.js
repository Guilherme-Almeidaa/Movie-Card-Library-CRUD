import React,{useContext} from 'react';
import { Link } from "react-router-dom";
import context from '../../Provider/context';
import copy from 'clipboard-copy';

function Sharingan () {

    const  { convertNumber ,chacaraAgora, setChacara, setPowerUse ,powerUse ,setPowerUsed,powerUsed} =  useContext(context);


   const Sharingan =({target}) => {
       if(target.className === 'legends') {
        setChacara( chacaraAgora - 2000)
        target.className ='selected'
        setPowerUse([...powerUse, 'Sharingan','Mangekyou'])
       
        const { innerText } = target
        copy(innerText)
        setPowerUsed([...powerUsed,`passo ${convertNumber(2000)} Ck para Sharingan`])
       } else {
           target.className = 'legends'
        powerUse.splice(powerUse.indexOf('Sharingan'), 1);
        powerUse.splice(powerUse.indexOf('Mangekyou'), 1);
       }
   }
    return (
        <Link onClick={Sharingan} className="legends" >
       ✦Sharingan ativo evoluindo para Mangekyou Sharingan✦


</Link>
    )
}

export default Sharingan;