import React,{useContext} from 'react';
import { Link } from "react-router-dom";
import context from '../../Provider/context';
import copy from 'clipboard-copy';

function Sharingan () {

    const  { convertNumber ,chacaraAgora, setChacara,powerUse ,setPowerUsed,powerUsed} =  useContext(context);


   const Sharingan =({target}) => {
       if(target.className === 'legends') {
        setChacara( chacaraAgora - 10000)
        const { innerText } = target
        copy(innerText)
        setPowerUsed([...powerUsed,`passo ${convertNumber(10000)} Ck para Mangekyou`])
       } else {
           powerUse.splice(powerUse.indexOf('Sharingan'), 1);
       }
   }
    return (
        <Link onClick={Sharingan} className="legends" >
       *Mangekyō Sharingan ativo* <br/>

● Percepção visual ampliada me tornando capaz de se defender e reagir a qualquer movimento que os olhos possam ver. <br/>

*Previsão de Movimentos*<br/>

 ● Acompanhando movimentos de velocidade nível 4 podendo prever e antecipar movimentos inimigos. <br/>

● Ag -50% de custo ●

</Link>
    )
}

export default Sharingan;