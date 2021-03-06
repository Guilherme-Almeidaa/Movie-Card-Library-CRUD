import React,{useContext} from 'react';
import { Link } from "react-router-dom";
import context from '../../Provider/context';
import copy from 'clipboard-copy';

function Kawarimi () {

    const  { convertNumber , chacaraAgora, setChacara ,setPowerUsed,powerUsed} =  useContext(context);

    const Kawarimi =({target}) => {
      setChacara( chacaraAgora - 500)
      const { innerText } = target
      copy(innerText)
      setPowerUsed([...powerUsed,`passo ${convertNumber(500)} Ck para Kawarimi`])
    }

    
    return (
        <Link onClick={Kawarimi} className="legends" >
        
        *Kawarimi* <br/>

• Uso Kawarimi para fugir do seu atk. HP intacto.



</Link>
    )
}

export default Kawarimi;