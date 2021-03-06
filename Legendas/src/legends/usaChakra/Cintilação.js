import React,{useContext} from 'react';
import { Link } from "react-router-dom";
import context from '../../Provider/context';
import copy from 'clipboard-copy';

function Kawarimi () {

    const  { convertNumber , chacaraAgora, setChacara ,setPowerUsed,powerUsed} =  useContext(context);

    const Kawarimi =({target}) => {
      setChacara( chacaraAgora - 1000)
      const { innerText } = target
      copy(innerText)
      setPowerUsed([...powerUsed,`passo ${convertNumber(1000)} Ck para Cintilação`])
    }

    
    return (
        <Link onClick={Kawarimi} className="legends" >
        
        *Cintilaçao Corporal!*<br/>
• Cintilo meu corpo escapando do seu ataque. // Hp intacto 





</Link>
    )
}

export default Kawarimi;