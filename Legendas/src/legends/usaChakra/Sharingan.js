import React,{useContext} from 'react';
import { Link } from "react-router-dom";
import context from '../../Provider/context';
import copy from 'clipboard-copy';

function Sharingan () {

    const  { convertNumber ,chacaraAgora, setChacara, setPowerUse ,powerUse ,setPowerUsed,powerUsed} =  useContext(context);


   const Sharingan =({target}) => {
       if(target.className === 'legends') {
        setChacara( chacaraAgora - 2000)
       
        setPowerUse([...powerUse, 'Sharingan'])
       
        const { innerText } = target
        copy(innerText)
        setPowerUsed([...powerUsed,`passo ${convertNumber(2000)} Ck para Sharingan`])
       } else {
           
        powerUse.splice(powerUse.indexOf('Sharingan'), 1);
       }
   }
    return (
        <Link onClick={Sharingan} className={powerUse.includes('Sharingan') ? 'selected' : "legends"} >
       ✦Sharingan✦<br/>
•Ativo, utilizando como rastreamento visual, vendo o fluxo de chakra do oponente, atento a alterações.<br/>

✦Previsão de Movimentos✦<br/>
•Acompanhando movimentos de velocidade nivel 3 podendo prever e antecipar movimentos inimigos.
•Ag -50% de custo.

</Link>
    )
}

export default Sharingan;