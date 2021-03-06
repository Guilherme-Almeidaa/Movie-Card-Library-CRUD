import React,{useContext} from 'react';
import { Link } from "react-router-dom";
import context from '../../Provider/context';
import copy from 'clipboard-copy';

function Teisho () {

  const ATRIBUTES = JSON.parse(localStorage.getItem('atributes')) || { atack:0, agilidade:0, chacara:0, defesa:0, hp:0 } ;
    const  { convertNumber , setAg, agilidadeAgora ,powerUse ,setPowerUsed,powerUsed} =  useContext(context);

  const Teisho =({target}) => {
    const valueSpent = powerUse.includes('Sharingan') ? 250 : 500
    setAg( agilidadeAgora - valueSpent)
    const { innerText } = target
    copy(innerText)
    setPowerUsed([...powerUsed,`passo ${convertNumber(valueSpent)} Ag para Teisho`])
  }
    return (
        <Link onClick={Teisho} className="legends" >
       *Teisho* <br/>

        Atk1.000+{convertNumber(ATRIBUTES.atack)}(CT)={convertNumber(1000+Number(ATRIBUTES.atack))}
           • Meu atk passa sua defesa, hp: 00

</Link>
    )
}

export default Teisho;